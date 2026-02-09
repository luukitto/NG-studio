"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

const defaultState: FormState = {
  name: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(defaultState);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      setStatus("error");
      return;
    }

    console.log("Contact form submission:", form);
    setStatus("success");
    setForm(defaultState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
    >
      <h3 className="text-lg font-semibold text-dark">
        {t.contactPage.form.title}
      </h3>

      <div className="mt-6 space-y-4">
        <label className="grid gap-2 text-sm text-dark/70">
          {t.contactPage.form.name}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="rounded-xl border border-dark/10 bg-white px-4 py-2.5 text-sm text-dark outline-none transition focus:ring-2 focus:ring-primary/60"
            placeholder={t.contactPage.form.name}
          />
        </label>
        <label className="grid gap-2 text-sm text-dark/70">
          {t.contactPage.form.phone}
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="rounded-xl border border-dark/10 bg-white px-4 py-2.5 text-sm text-dark outline-none transition focus:ring-2 focus:ring-primary/60"
            placeholder="+995 5xx xx xx xx"
          />
        </label>
        <label className="grid gap-2 text-sm text-dark/70">
          {t.contactPage.form.message}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="min-h-[120px] rounded-xl border border-dark/10 bg-white px-4 py-2.5 text-sm text-dark outline-none transition focus:ring-2 focus:ring-primary/60"
            placeholder={t.contactPage.form.message}
          />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-500">{t.contactPage.form.error}</p>
      )}
      {status === "success" && (
        <p className="mt-4 text-sm text-emerald-600">
          {t.contactPage.form.success}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-dark px-6 py-3 text-sm font-medium text-white shadow-md transition-transform hover:scale-[1.02]"
      >
        {t.contactPage.form.submit}
      </button>
    </form>
  );
}
