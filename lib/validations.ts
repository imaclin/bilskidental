import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-()+]+$/, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  patientStatus: z.enum(["new", "current"]),
  preferredContact: z.enum(["phone", "email"]),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-()+]+$/, "Please enter a valid phone number"),
  requestedDate: z.string().min(1, "Please select a preferred date"),
  bestTime: z.enum(["anytime", "morning", "afternoon", "evening"]),
  service: z.string().optional(),
  message: z.string().optional(),
  patientStatus: z.enum(["new", "current"]),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type AppointmentFormData = z.infer<typeof appointmentSchema>;
