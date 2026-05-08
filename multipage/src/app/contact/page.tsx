import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us! We'd love to hear from you.",
};

export default function Contact() {
  return (
    <div className="container" style={{ padding: "120px 24px" }}>
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          marginBottom: "16px",
        }}
      >
        Contact Us
      </h1>

      <p
        style={{
          color: "var(--text-muted)",
          marginBottom: "36px",
          fontSize: "1.1rem",
        }}
      >
        Have questions or feedback? We&apos;d love to hear from you!
      </p>

      <div>
        <h2>Contact Information</h2>

        <p
          style={{
            color: "var(--text-muted)",
            marginBottom: "16px",
            fontSize: "1.1rem",
          }}
        >
          You can reach us at any of the following:
        </p>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1.1rem",
          }}
        >
          Email:{" "}
          <a href="mailto:info@company.com">
            info@company.com
          </a>
        </p>
      </div>
    </div>
  );
}