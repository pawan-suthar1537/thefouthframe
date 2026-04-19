"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      router.push("/admin");
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.logoBlock}>
          <div style={styles.logoCircle}>TF</div>
          <h1 style={styles.title}>ADMIN ACCESS</h1>
          <p style={styles.subtitle}>The Fourth Frame</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {error && <div style={styles.error}>{error}</div>}

          <div style={styles.inputGroup}>
            <label style={styles.label}>USERNAME</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              placeholder="Enter username"
              required
              autoComplete="username"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter password"
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              opacity: loading ? 0.6 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "AUTHENTICATING..." : "SIGN IN"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 50%, #0A0A0A 100%)",
    padding: "2rem",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "3rem 2.5rem",
    backdropFilter: "blur(20px)",
  },
  logoBlock: {
    textAlign: "center" as const,
    marginBottom: "2.5rem",
  },
  logoCircle: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #C9A84C, #8B6914)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0A0A0A",
    fontWeight: 800,
    fontSize: "1.2rem",
    letterSpacing: "0.05em",
    marginBottom: "1.2rem",
  },
  title: {
    color: "#fff",
    fontSize: "1.4rem",
    fontWeight: 600,
    letterSpacing: "0.2em",
    margin: 0,
  },
  subtitle: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.75rem",
    letterSpacing: "0.15em",
    marginTop: "0.5rem",
    textTransform: "uppercase" as const,
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
  },
  label: {
    color: "rgba(255,255,255,0.5)",
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.18em",
  },
  input: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "0.85rem 1rem",
    color: "#fff",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
  },
  button: {
    background: "linear-gradient(135deg, #C9A84C, #8B6914)",
    color: "#0A0A0A",
    border: "none",
    borderRadius: "10px",
    padding: "0.95rem",
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.15em",
    marginTop: "0.5rem",
    transition: "opacity 0.2s",
  },
  error: {
    background: "rgba(220,38,38,0.15)",
    border: "1px solid rgba(220,38,38,0.3)",
    color: "#fca5a5",
    borderRadius: "10px",
    padding: "0.75rem 1rem",
    fontSize: "0.85rem",
    textAlign: "center" as const,
  },
};
