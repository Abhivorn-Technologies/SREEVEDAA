import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "contact-submissions.json");

function isValidEmail(value: string) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  return /^[+0-9\\s\\-]{7,15}$/.test(value);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const { name = "", email = "", phone = "", city = "", message = "" } = payload as Record<string, string>;

  if (!name.trim() || !/^[a-zA-Z\\s'.-]{2,}$/.test(name)) {
    return NextResponse.json({ message: "Please enter a valid name." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Email looks invalid." }, { status: 400 });
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json({ message: "Enter a valid phone number." }, { status: 400 });
  }

  if (!message || message.trim().length < 10) {
    return NextResponse.json({ message: "Tell us a little more about the project." }, { status: 400 });
  }

  const entry = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    city: city.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    const existing = await fs.readFile(dataFile, "utf8").catch(() => "[]");
    const parsed = JSON.parse(existing || "[]");
    parsed.unshift(entry);
    await fs.writeFile(dataFile, JSON.stringify(parsed.slice(0, 200), null, 2), "utf8");
  } catch (err) {
    console.error("contact-write-error", err);
    return NextResponse.json({ message: "Could not save your request right now." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
