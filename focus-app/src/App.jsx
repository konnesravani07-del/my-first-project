import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");
  const [started, setStarted] = useState(
  localStorage.getItem("started") === "true"
);
  const [time, setTime] = useState(
    Number(localStorage.getItem("time")) || 1500);
  const [completed, setCompleted] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  const [streak, setStreak] = useState(0);

  const [history, setHistory] = useState([]);

  const quotes = [
    "Stay focused 👀",
    "You can do it 💪",
    "Small steps every day 🚀",
    "Discipline beats motivation 🔥",
    "Keep grinding 😎",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const alarm = new Audio("/beep-11.wav");
  const music = new Audio("/lofi.mp3");

  useEffect(() => {
    let interval;
    localStorage.setItem("time", time);
localStorage.setItem("started", started);
    const handleVisibility = () => {
  if (document.hidden && started) {
    alert("🚫 Stay Focused Bro!");
  }
};

document.addEventListener(
  "visibilitychange",
  handleVisibility
);

    if (started && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      alarm.play();

      setStarted(false);
      setCompleted(true);

      setXp((prev) => prev + 10);

      setStreak((prev) => prev + 1);

      setHistory((prev) => [...prev, task]);
    }

    return () => clearInterval(interval);
  }, [started, time]);

  useEffect(() => {
    if (xp >= 50) {
      setLevel(2);
    }

    if (xp >= 100) {
      setLevel(3);
    }

    if (xp >= 150) {
      setLevel(4);
    }
  }, [xp]);

  function startFocus() {
    if (task === "") return;

    setCompleted(false);

    const randomQuote =
      quotes[Math.floor(Math.random() * quotes.length)];

    setQuote(randomQuote);

    alarm.play().then(() => {
      alarm.pause();
      alarm.currentTime = 0;
    });

    setStarted(true);
  }

  function resetTimer() {
    setStarted(false);
    setTime(1500);
  }

  function playMusic() {
    music.play();
  }

  return (
    <div
      style={{
        background: darkMode ? "#111827" : "#f3f4f6",
        minHeight: "100vh",
        color: darkMode ? "white" : "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial",
        padding: "20px",
        textAlign: "center",
        transition: "0.3s",
      }}
    >
      <h1>🔥 Focus App</h1>

      <p style={{ color: darkMode ? "#9ca3af" : "#374151" }}>
        {quote}
      </p>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          background: darkMode ? "#facc15" : "#111827",
          color: darkMode ? "black" : "white",
          cursor: "pointer",
        }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h3 style={{ marginTop: "20px" }}>
        🏆 Level: {level}
      </h3>

      <h3>⚡ XP: {xp}</h3>

      <h3>🔥 Streak: {streak}</h3>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button
          onClick={() => setTime(300)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          5 Min
        </button>

        <button
          onClick={() => setTime(900)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#7c3aed",
            color: "white",
            cursor: "pointer",
          }}
        >
          15 Min
        </button>

        <button
          onClick={() => setTime(1500)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#059669",
            color: "white",
            cursor: "pointer",
          }}
        >
          25 Min
        </button>
      </div>

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "12px",
          width: "260px",
          borderRadius: "10px",
          border: "none",
          marginTop: "20px",
          fontSize: "16px",
        }}
      />

      <button
        onClick={startFocus}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          border: "none",
          borderRadius: "10px",
          background: "limegreen",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Start Focus
      </button>

      <button
        onClick={playMusic}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          background: "#ec4899",
          color: "white",
          cursor: "pointer",
        }}
      >
        🎵 Play Lo-fi Music
      </button>

      {started && (
        <>
        <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 999,
      }}
    >
      <h1 style={{ fontSize: "50px", color: "white" }}>
        🚫 No Distractions
      </h1>

      <p style={{ fontSize: "25px", marginTop: "20px" }}>
        Stay focused on your goal 💪
      </p>
    </div>

    <></>
          <h2 style={{ marginTop: "20px" }}>
            🎯 Focus on: {task}
          </h2>

          <h1 style={{ marginTop: "20px", fontSize: window.innerWidth < 600 ? "40px" : "60px" }}>
            {Math.floor(time / 60)}:
            {String(time % 60).padStart(2, "0")}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => setStarted(false)}
              style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: "10px",
                background: "orange",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Pause
            </button>

            <button
              onClick={resetTimer}
              style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: "10px",
                background: "crimson",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Reset
            </button>
          </div>
        </>
      )}

      {completed && (
        <h2 style={{ color: "lightgreen", marginTop: "20px" }}>
          ✅ Task Completed!
        </h2>
      )}

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h2>📝 Task History</h2>

        {history.map((item, index) => (
          <p key={index}>✅ {item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;