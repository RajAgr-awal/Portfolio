// ── Contact Form API — persists submissions to GitHub ────────────────
// Creates/updates a JSON file in the portfolio repo under data/contacts/
// using the GitHub Contents API.

import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

// ── Helpers ──────────────────────────────────────────────────────────

function sanitize(str: string): string {
  return str.trim().slice(0, 5000);
}

function validate(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

// ── GitHub Storage ───────────────────────────────────────────────────

async function saveToGitHub(data: ContactPayload & { timestamp: string; id: string }) {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER || "RajAgr-awal";
  const repo = process.env.GITHUB_REPO || "Portfolio";
  const branch = process.env.GITHUB_BRANCH || "data";

  if (!token) {
    throw new Error("GITHUB_TOKEN is not configured");
  }

  const filePath = `data/contacts/${data.id}.json`;
  const content = Buffer.from(JSON.stringify(data, null, 2)).toString("base64");

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({
      message: `📬 New contact: ${data.name} (${data.email})`,
      content,
      branch,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("GitHub API error:", response.status, errorBody);
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}

// ── POST Handler ─────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validate(body)) {
      return NextResponse.json(
        { error: "Invalid form data. Please fill all fields correctly." },
        { status: 400 }
      );
    }

    const submission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: sanitize(body.name),
      email: sanitize(body.email),
      message: sanitize(body.message),
      timestamp: new Date().toISOString(),
    };

    // Attempt GitHub storage
    try {
      await saveToGitHub(submission);
    } catch (ghError) {
      console.error("Failed to save to GitHub:", ghError);
      // Still return success to user — we don't want to leak infra details
      // In production, you'd want a fallback (e.g., email notification)
    }

    return NextResponse.json(
      { success: true, message: "Message received! I'll get back to you soon." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
