"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("loading...");

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("API error"));
  }, []);

  return (
    <main style={{ padding: "40px", fontSize: "24px" }}>
      <h1>Next.js + FastAPI</h1>
      <p>API Response: {message}</p>
    </main>
  );
}

