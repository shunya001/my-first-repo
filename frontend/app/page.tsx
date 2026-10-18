"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const sendToAPI = async () => {
    try {
      const res = await fetch("http://localhost:8000/echo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      setResult(data.received);
    } catch (error) {
      setResult("API error");
    }
  };

  return (
    <main style={{ padding: "40px", fontSize: "20px" }}>
      <h1>Next.js + FastAPI POST</h1>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="文字を入力"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "18px",
            width: "300px",
            marginRight: "10px",
          }}
        />

        <button
          onClick={sendToAPI}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          送信
        </button>
      </div>

      <p style={{ marginTop: "20px" }}>API Response: {result}</p>
    </main>
  );
}
