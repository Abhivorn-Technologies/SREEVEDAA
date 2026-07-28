"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send");
      setState("success");
      setMessage("Thanks! We will call you back shortly.");
      event.currentTarget.reset();
    } catch (err: unknown) {
      setState("error");
      const fallback = "Something went wrong. Please try again.";
      if (err instanceof Error) {
        setMessage(err.message || fallback);
      } else {
        setMessage(fallback);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-slate-200">
          Name*
          <input
            name="name"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-100 outline-none focus:border-amber-300/70"
            placeholder="Your full name"
          />
        </label>
        <label className="space-y-1 text-sm text-slate-200">
          Email*
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-100 outline-none focus:border-amber-300/70"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-slate-200">
          Phone*
          <input
            name="phone"
            required
            pattern="^[+0-9\\s\\-]{7,15}$"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-100 outline-none focus:border-amber-300/70"
            placeholder="+91 70365 92351"
          />
        </label>
        <label className="space-y-1 text-sm text-slate-200">
          City
          <input
            name="city"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-100 outline-none focus:border-amber-300/70"
            placeholder="Hyderabad / Mumbai / ..."
          />
        </label>
      </div>
      <label className="space-y-1 text-sm text-slate-200 block">
        Project details*
        <textarea
          name="message"
          required
          minLength={10}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-slate-100 outline-none focus:border-amber-300/70"
          rows={4}
          placeholder="Tell us about the space, timelines, and what success looks like."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-400">
          We respond within one business day. Your details stay private.
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-primary px-6 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Sending…" : "Send message"}
        </button>
      </div>

      {message && (
        <p className={`text-sm ${state === "error" ? "text-rose-300" : "text-emerald-300"}`}>{message}</p>
      )}
    </form>
  );
}
