// components/Footer.tsx
// 🧠 CONCEPT: Server Component (default)
// No "use client" here because this component doesn't need
// any browser interactivity. It's static HTML — Next.js renders
// it on the server for better performance.

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          Built with ❤️ using <strong>Next.js 14</strong> · App Router ·{" "}
          {year}
        </p>
        <p style={{ marginTop: "8px", fontSize: "0.82rem" }}>
          Your first step to becoming a pro Next.js developer 🚀
        </p>
      </div>
    </footer>
  );
}