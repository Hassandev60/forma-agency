"use server";

import pool from "@/lib/db";

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContact(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim() || null;
  const service = formData.get("service")?.toString().trim() || null;
  const message = formData.get("message")?.toString().trim();

  // Validation
  if (!name || name.length < 2) {
    return { success: false, message: "Please enter your full name." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }
  if (!message || message.length < 10) {
    return { success: false, message: "Message must be at least 10 characters." };
  }

  try {
    await pool.query(
      `INSERT INTO contacts (name, email, company, service, message)
       VALUES ($1, $2, $3, $4, $5)`,
      [name, email, company, service, message]
    );

    return {
      success: true,
      message: "Thanks! We'll be in touch within 24 hours.",
    };
  } catch (error) {
    console.error("Contact form DB error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}