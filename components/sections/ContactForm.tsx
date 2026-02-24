"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { patientStatus: "new", preferredContact: "phone" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--color-beige-light)] flex items-center justify-center mb-5">
          <CheckCircle size={32} className="text-[var(--color-navy)]" />
        </div>
        <h2 className="font-heading text-3xl text-[var(--color-navy)] mb-3">Request received!</h2>
        <p className="font-body text-sm text-[var(--color-muted)] max-w-sm leading-relaxed mb-6">
          Thank you! Our team will contact you within one business day to
          confirm your appointment details.
        </p>
        <Button variant="secondary" size="md" onClick={() => setStatus("idle")}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div>
        <h2 className="font-heading text-3xl text-[var(--color-navy)] mb-2">
          Request an Appointment
        </h2>
        <p className="font-body text-sm text-[var(--color-muted)]">
          Fill in your details and we'll be in touch within one business day.
        </p>
      </div>

      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
      />

      {/* Name + Phone row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-secondary font-600 text-[var(--color-navy)] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            {...register("name")}
            className={cn(
              "w-full px-4 py-3 text-sm font-body text-[var(--color-navy)] bg-white border rounded-2xl transition-colors placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:border-[var(--color-navy)]",
              errors.name ? "border-red-400" : "border-[var(--color-border)]"
            )}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-secondary font-600 text-[var(--color-navy)] mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(216) 555-0100"
            {...register("phone")}
            className={cn(
              "w-full px-4 py-3 text-sm font-body text-[var(--color-navy)] bg-white border rounded-2xl transition-colors placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:border-[var(--color-navy)]",
              errors.phone ? "border-red-400" : "border-[var(--color-border)]"
            )}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={11} /> {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-secondary font-600 text-[var(--color-navy)] mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          {...register("email")}
          className={cn(
            "w-full px-4 py-3 text-sm font-body text-[var(--color-navy)] bg-white border rounded-2xl transition-colors placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:border-[var(--color-navy)]",
            errors.email ? "border-red-400" : "border-[var(--color-border)]"
          )}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle size={11} /> {errors.email.message}
          </p>
        )}
      </div>

      {/* Patient status + Preferred contact */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-secondary font-600 text-[var(--color-navy)] mb-2">
            Patient Status <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3">
            {(["new", "current"] as const).map((val) => (
              <label
                key={val}
                className="flex-1 flex items-center justify-center gap-2 py-3 border rounded-2xl cursor-pointer text-xs font-body transition-colors has-[:checked]:bg-[var(--color-navy)] has-[:checked]:border-[var(--color-navy)] has-[:checked]:text-white text-[var(--color-muted)] border-[var(--color-border)]"
              >
                <input type="radio" {...register("patientStatus")} value={val} className="sr-only" />
                {val === "new" ? "New Patient" : "Current Patient"}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-secondary font-600 text-[var(--color-navy)] mb-2">
            Preferred Contact <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3">
            {(["phone", "email"] as const).map((val) => (
              <label
                key={val}
                className="flex-1 flex items-center justify-center gap-2 py-3 border rounded-2xl cursor-pointer text-xs font-body transition-colors has-[:checked]:bg-[var(--color-navy)] has-[:checked]:border-[var(--color-navy)] has-[:checked]:text-white text-[var(--color-muted)] border-[var(--color-border)]"
              >
                <input type="radio" {...register("preferredContact")} value={val} className="sr-only" />
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-secondary font-600 text-[var(--color-navy)] mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about what you're looking for — preferred appointment times, specific service, or any questions..."
          {...register("message")}
          className={cn(
            "w-full px-4 py-3 text-sm font-body text-[var(--color-navy)] bg-white border rounded-2xl transition-colors placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:border-[var(--color-navy)] resize-none",
            errors.message ? "border-red-400" : "border-[var(--color-border)]"
          )}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle size={11} /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-sm text-red-600">
          <AlertCircle size={16} className="shrink-0" />
          Something went wrong. Please try again or call us at (216) 524-4410.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        shadow={true}
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Request <Send size={15} />
          </>
        )}
      </Button>

      <p className="text-xs font-body text-[var(--color-muted)]">
        We respect your privacy. Your information is never shared with third parties.
      </p>
    </form>
  );
}
