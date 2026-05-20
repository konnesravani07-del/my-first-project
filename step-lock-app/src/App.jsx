import { useState } from "react";

function App() {
  const [steps, setSteps] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(1);

  const unlockSound = new Audio("/unlock.mp3");

  const goal = 10;

  const earnedMinutes = Math.floor(steps / 2);

  const progress = (steps / goal) * 100;

  const level = Math.floor(xp / 50) + 1;

  const quotes = [
    "🚀 Small steps every day!",
    "💪 Keep moving forward!",
    "🔥 Discipline beats motivation!",
    "🏆 One step closer to success!",
  ];

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  function addStep() {
    const newSteps = steps + 1;

    setSteps(newSteps);

    setXp(xp + 5);

    if (newSteps === goal) {
      setStreak(streak + 1);

      unlockSound.play();
    }
  }

  function resetSteps() {
    setSteps(0);
    setXp(0);
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
        transition: "0.3s",
        textAlign: "center",
      }}
    >
      <h1>🚶 Step Lock App</h1>

      <p style={{ marginBottom: "20px", color: "orange" }}>
        {randomQuote}
      </p>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          background: darkMode ? "#facc15" : "#111827",
          color: darkMode ? "black" : "white",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h2>🔥 Level: {level}</h2>

      <h2>⚡ XP: {xp}</h2>

      <h2>🏆 Streak: {streak}</h2>

      <h2>Steps: {steps}</h2>

      <h3>Goal: {goal} Steps</h3>

      <h2>⏱️ Earned Time: {earnedMinutes} mins</h2>

      <div
        style={{
          width: "300px",
          height: "20px",
          background: "#374151",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "limegreen",
          }}
        ></div>
      </div>

      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={addStep}
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            background: "limegreen",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Add Step
        </button>

        <button
          onClick={resetSteps}
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            background: "crimson",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Reset
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#1f2937",
            padding: "20px",
            borderRadius: "15px",
            width: "150px",
            textAlign: "center",
          }}
        >
          <h2>📸 Instagram</h2>

          {steps >= goal ? (
            <p style={{ color: "lightgreen" }}>
              🔓 Unlocked
            </p>
          ) : (
            <p style={{ color: "red" }}>
              🔒 Locked
            </p>
          )}
        </div>

        <div
          style={{
            background: "#1f2937",
            padding: "20px",
            borderRadius: "15px",
            width: "150px",
            textAlign: "center",
          }}
        >
          <h2>▶️ YouTube</h2>

          {steps >= goal ? (
            <p style={{ color: "lightgreen" }}>
              🔓 Unlocked
            </p>
          ) : (
            <p style={{ color: "red" }}>
              🔒 Locked
            </p>
          )}
        </div>
      </div>

      {steps >= goal && (
        <div
          style={{
            marginTop: "30px",
            background: "#065f46",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>🎉 Daily Goal Completed!</h2>

          <p>
            You earned {earnedMinutes} mins
            of social media time 😎
          </p>
        </div>
      )}
    </div>
  );
}

export default App;