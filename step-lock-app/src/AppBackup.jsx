import { useState, useEffect } from "react";
import alarmSound from "./alarm.mp3";

function App() {
  const [steps, setSteps] = useState(
    Number(localStorage.getItem("steps")) || 0
  );

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [xp, setXp] = useState(
    Number(localStorage.getItem("xp")) || 0
  );

  const [streak, setStreak] = useState(
    Number(localStorage.getItem("streak")) || 1
  );
  const [history, setHistory] = useState([]);
  const [shopMessage, setShopMessage] = useState("");

const [coins, setCoins] = useState(
  Number(localStorage.getItem("coins")) || 0
);

  const [goal, setGoal] = useState(
    Number(localStorage.getItem("goal")) || 100
  );

  const [timeLeft, setTimeLeft] = useState(
    Number(localStorage.getItem("timeLeft")) || 0
  );
  const [lastActiveDate, setLastActiveDate] = useState(
  localStorage.getItem("lastActiveDate") || ""
);

  const [alarm] = useState(new Audio(alarmSound));

  const progress = Math.min((steps / goal) * 100, 100);

  const level = Math.floor(xp / 50) + 1;
  const currentXP = xp % 50;
const levelProgress = (currentXP / 50) * 100;
const [challengeCompleted, setChallengeCompleted] = useState(false);

  const quotes = [
    "🚀 Small steps every day!",
    "💪 Keep moving forward!",
    "🔥 Discipline beats motivation!",
    "🏆 One step closer to success!",
  ];

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  const buttonStyle = {
  padding: "14px 24px",
  border: "none",
  borderRadius: "16px",
  background: "linear-gradient(to right, #22c55e, #16a34a)",
  color: "white",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 0 15px rgba(34,197,94,0.4)",
  transition: "0.3s",
};

  useEffect(() => {
    localStorage.setItem("steps", steps);
    localStorage.setItem("xp", xp);
    localStorage.setItem("streak", streak);
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("goal", goal);
    localStorage.setItem("timeLeft", timeLeft);
    localStorage.setItem("lastActiveDate", lastActiveDate);
    localStorage.setItem("coins", coins);
    localStorage.setItem("history", JSON.stringify(history));
  }, [steps, xp, streak, darkMode, goal, timeLeft, history, lastActiveDate, coins]);

  useEffect(() => {
    let timer;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 60000);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  function addSteps(amount) {
    const newSteps = steps + amount;
    if (newSteps >= 200 && !challengeCompleted) {
  setXp((prev) => prev + 50);

  setChallengeCompleted(true);

  setHistory((prev) => [
    "🎯 Daily Challenge Completed (+50 XP)",
    ...prev,
  ]);
}

    setSteps(newSteps);

    setXp((prev) => prev + amount);
    setHistory((prev) => [
  `👣 Added ${amount} steps`,
  ...prev,
]);

    if (newSteps >= goal && steps < goal) {
      setStreak((prev) => prev + 1);

      setTimeLeft((prev) => prev + 20);

      setGoal((prev) => prev + 50);

      setCoins((prev) => prev + 20);

      alert("🎉 Goal Completed! +20 Coins");

      alarm.play();

      alarm.play();
      setHistory((prev) => [
  "🏆 Goal completed",
  ...prev,
]);
    }
  }

  function resetSteps() {

  function resetSteps() {
  const confirmReset = window.confirm(
    "🔄 Reset current steps?"
  );

  if (!confirmReset) return;

  setSteps(0);
  setTimeLeft(0);

  setHistory((prev) => [
    "🔄 Steps reset",
    ...prev,
  ]);
}
  }

  function claimReward() {
    setXp((prev) => prev + 20);
    setHistory((prev) => [
  "🎁 Claimed daily reward",
  ...prev,
]);

    alarm.play();
  }
  function buyReward(item, cost) {
  if (coins < cost) {
    setShopMessage("❌ Not enough conis");
    return;
  }
    setCoins((prev) => prev - cost);

    setShopMessage(`✅ Bought ${item}`);

    setHistory((prev) => [
      `🛒 Bought ${item}`,
      ...prev,
    ]);
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
        onMouseEnter={(e) => {
  e.target.style.transform = "scale(1.05)";
}}

onMouseLeave={(e) => {
  e.target.style.transform = "scale(1)";
}}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          background: darkMode ? "#facc15" : "#111827",
          color: darkMode ? "black" : "white",
          cursor: "pointer",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h2>🔥 Level: {level}</h2>

      <h2>⚡ XP: {xp}</h2>

      <h2>🏆 Streak: {streak}</h2>

      <h2>👣 Steps: {steps}</h2>

      <h3>🎯 Goal: {goal} Steps</h3>

      <input
        type="number"
        value={goal}
        onChange={(e) => setGoal(Number(e.target.value))}
        style={{
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          marginTop: "10px",
          width: "150px",
          textAlign: "center",
          fontSize: "16px",
        }}
      />

      <h2 style={{ marginTop: "20px" }}>
        ⏱️ Remaining Time: {timeLeft} mins
      </h2>

      <div
        style={{
          width: "320px",
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
            transition: "0.3s",
          }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => addSteps(10)}
          onMouseEnter={(e) => {
  e.target.style.transform = "scale(1.05)";
}}

onMouseLeave={(e) => {
  e.target.style.transform = "scale(1)";
}}
          style={buttonStyle}
        >
          +10 Steps
        </button>

        <button
          onClick={() => addSteps(50)}
          onMouseEnter={(e) => {
  e.target.style.transform = "scale(1.05)";
}}

onMouseLeave={(e) => {
  e.target.style.transform = "scale(1)";
}}
          style={buttonStyle}
        >
          +50 Steps
        </button>

        <button
          onClick={() => addSteps(100)}
          onMouseEnter={(e) => {
  e.target.style.transform = "scale(1.05)";
}}

onMouseLeave={(e) => {
  e.target.style.transform = "scale(1)";
}}
          style={buttonStyle}
        >
          +100 Steps
        </button>

        <button
          onClick={resetSteps}
          onMouseEnter={(e) => {
  e.target.style.transform = "scale(1.05)";
}}

onMouseLeave={(e) => {
  e.target.style.transform = "scale(1)";
}}
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "12px",
            background: "crimson",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Reset
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "25px",
          marginTop: "35px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: timeLeft > 0 ? "#064e3b" : "#1f2937",
            padding: "20px",
            borderRadius: "20px",
            width: "170px",
            textAlign: "center",
            boxShadow:
              timeLeft > 0
                ? "0 0 20px limegreen"
                : "0 0 10px rgba(0,0,0,0.5)",
            transform:
              timeLeft > 0 ? "scale(1.05)" : "scale(1)",
            transition: "0.3s",
          }}
        >
          <h2>📸 Instagram</h2>

          {timeLeft > 0 ? (
            <p style={{ color: "lightgreen", fontWeight: "bold" }}>
              🔓 Unlocked
            </p>
          ) : (
            <p style={{ color: "red", fontWeight: "bold" }}>
              🔒 Locked
            </p>
          )}
        </div>

        <div
          style={{
            background: timeLeft > 0 ? "#064e3b" : "#1f2937",
            padding: "20px",
            borderRadius: "20px",
            width: "170px",
            textAlign: "center",
            boxShadow:
              timeLeft > 0
                ? "0 0 20px limegreen"
                : "0 0 10px rgba(0,0,0,0.5)",
            transform:
              timeLeft > 0 ? "scale(1.05)" : "scale(1)",
            transition: "0.3s",
          }}
        >
          <h2>▶️ YouTube</h2>

          {timeLeft > 0 ? (
            <p style={{ color: "lightgreen", fontWeight: "bold" }}>
              🔓 Unlocked
            </p>
          ) : (
            <p style={{ color: "red", fontWeight: "bold" }}>
              🔒 Locked
            </p>
          )}
        </div>
      </div>
      <div
  style={{
    width: "90%",
    maxWidth: "700px",
    marginTop: "30px",
    textAlign: "center",
  }}
>
  <h2>⚡ Level Progress</h2>

  <div
    style={{
      width: "100%",
      height: "25px",
      background: "#cbd5e1",
      borderRadius: "20px",
      overflow: "hidden",
      marginTop: "15px",
    }}
  >
    <div
      style={{
        width: `${levelProgress}%`,
        height: "100%",
        background: "linear-gradient(to right, #22c55e, #3b82f6)",
        transition: "0.5s",
      }}
    ></div>
  </div>

  <p style={{ marginTop: "10px", fontWeight: "bold" }}>
    {currentXP} / 50 XP to next level
  </p>
</div>
<div
  style={{
    marginTop: "35px",
    background: challengeCompleted
      ? "#22c55e"
      : "#f59e0b",
    padding: "20px",
    borderRadius: "18px",
    textAlign: "center",
    width: "90%",
    maxWidth: "700px",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  }}
>
  {challengeCompleted
    ? "🏆 Daily Challenge Completed! +50 XP"
    : "🎯 Today's Challenge: Walk 200 Steps"}
</div>
<div
  style={{
    marginTop: "30px",
    background: darkMode ? "#1e293b" : "#facc15",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)"
  }}
>
  <h2>💰 Coins Wallet</h2>

  <h1>{coins} Coins</h1>

  <button
    onClick={() => {
  if (coinsClaimed) return;

  setCoins((prev) => prev + 10);

  setCoinsClaimed(true);

  setHistory((prev) => [
    "💰 Claimed bonus coins",
    ...prev,
  ]);
}}
onMouseEnter={(e) => {
  e.target.style.transform = "scale(1.05)";
}}

onMouseLeave={(e) => {
  e.target.style.transform = "scale(1)";
}}
    style={{
      padding: "12px 20px",
      border: "none",
      borderRadius: "12px",
      background: "#22c55e",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "10px"
    }}
  >
    Claim 10 Coins
  </button>
</div>
<div
  style={{
    marginTop: "30px",
    background: darkMode ? "#1e293b" : "#ffffff",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)"
  }}
>
  <h2>🛒 Coin Shop</h2>

  <button
    onClick={() => buyReward("10 Extra Minutes", 20)}
    onMouseEnter={(e) => {
  e.target.style.transform = "scale(1.05)";
}}

onMouseLeave={(e) => {
  e.target.style.transform = "scale(1)";
}}
    style={{
      padding: "12px",
      margin: "10px",
      border: "none",
      borderRadius: "10px",
      background: "#3b82f6",
      color: "white",
      cursor: "pointer"
    }}
  >
    ⏳ Buy 10 mins — 20 Coins
  </button>

  <button
    onClick={() => buyReward("Golden Theme", 50)}
    disabled={coins < 50}
    onMouseEnter={(e) => {
  e.target.style.transform = "scale(1.05)";
}}

onMouseLeave={(e) => {
  e.target.style.transform = "scale(1)";
}}
    style={{
      padding: "12px",
      margin: "10px",
      border: "none",
      borderRadius: "10px",
      background: "#eab308",
      color: "white",
      opacity: coins < 50 ? 0.5 : 1,
cursor: coins < 50 ? "not-allowed" : "pointer",
    }}
  >
    👑 Golden Theme — 50 Coins
  </button>

  <p style={{ marginTop: "15px", fontWeight: "bold" }}>
    {shopMessage}
  </p>
</div>

      <div style={{ marginTop: "40px" }}>
        <h2>🏅 Achievements</h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {steps >= 10 && (
            <div
              style={{
                background: "#f59e0b",
                padding: "15px",
                borderRadius: "15px",
                width: "160px",
                fontWeight: "bold",
              }}
            >
              🚶 Beginner Walker
            </div>
          )}

          {steps >= 50 && (
            <div
              style={{
                background: "#10b981",
                padding: "15px",
                borderRadius: "15px",
                width: "160px",
                fontWeight: "bold",
              }}
            >
              🔥 Step Master
            </div>
          )}

          {xp >= 100 && (
            <div
              style={{
                background: "#3b82f6",
                padding: "15px",
                borderRadius: "15px",
                width: "160px",
                fontWeight: "bold",
              }}
            >
              ⚡ XP Champion
            </div>
          )}

          {streak >= 5 && (
            <div
              style={{
                background: "#8b5cf6",
                padding: "15px",
                borderRadius: "15px",
                width: "160px",
                fontWeight: "bold",
              }}
            >
              🏆 Streak Legend
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: darkMode ? "#1e293b" : "#ffffff",
          padding: "25px",
          borderRadius: "20px",
          width: "320px",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        }}
      >
        <h2>🎁 Daily Reward</h2>

        <p style={{ marginTop: "10px" }}>
          Claim your free XP reward today!
        </p>

        <button
          onClick={claimReward}
          onMouseEnter={(e) => {
  e.target.style.transform = "scale(1.05)";
}}

onMouseLeave={(e) => {
  e.target.style.transform = "scale(1)";
}}
          style={{
            marginTop: "15px",
            padding: "12px 20px",
            border: "none",
            borderRadius: "12px",
            background: "#f59e0b",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Claim +20 XP
        </button>
      </div>

      <div
        style={{
          marginTop: "40px",
          width: "90%",
          maxWidth: "700px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          📊 Your Stats
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#2563eb",
              padding: "20px",
              borderRadius: "18px",
              width: "150px",
            }}
          >
            <h3>👣 Steps</h3>
            <h1>{steps}</h1>
          </div>

          <div
            style={{
              background: "#10b981",
              padding: "20px",
              borderRadius: "18px",
              width: "150px",
            }}
          >
            <h3>⚡ XP</h3>
            <h1>{xp}</h1>
          </div>

          <div
            style={{
              background: "#7c3aed",
              padding: "20px",
              borderRadius: "18px",
              width: "150px",
            }}
          >
            <h3>🔥 Level</h3>
            <h1>{level}</h1>
          </div>

          <div
            style={{
              background: "#ea580c",
              padding: "20px",
              borderRadius: "18px",
              width: "150px",
            }}
          >
            <h3>🏆 Streak</h3>
            <h1>{streak}</h1>
          </div>
        </div>
      </div>
      <div
  style={{
    marginTop: "40px",
    width: "90%",
    maxWidth: "700px",
    background: darkMode ? "#1e293b" : "#ffffff",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  }}
>
  <h2 style={{ marginBottom: "20px" }}>
    🏆 Leaderboard
  </h2>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    }}
  >
    <div
      style={{
        background: "#facc15",
        padding: "15px",
        borderRadius: "15px",
        fontWeight: "bold",
        color: "black",
        fontSize: "18px",
      }}
    >
      🥇 Top XP Player — {xp} XP
    </div>

    <div
      style={{
        background: "#38bdf8",
        padding: "15px",
        borderRadius: "15px",
        fontWeight: "bold",
        color: "black",
        fontSize: "18px",
      }}
    >
      🔥 Best Streak — {streak} Days
    </div>

    <div
      style={{
        background: "#34d399",
        padding: "15px",
        borderRadius: "15px",
        fontWeight: "bold",
        color: "black",
        fontSize: "18px",
      }}
    >
      👣 Master Walker — {steps} Steps
    </div>
  </div>
</div>
<div
  style={{
    marginTop: "40px",
    width: "90%",
    maxWidth: "700px",
    background: darkMode ? "#1e293b" : "#ffffff",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  }}
>
  <h2>📜 Activity History</h2>

  <div
    style={{
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }}
  >
    {history.length === 0 ? (
      <p>No activity yet 😴</p>
    ) : (
      history.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#334155",
            padding: "12px",
            borderRadius: "12px",
          }}
        >
          {item}
        </div>
      ))
    )}
  </div>
</div>

      {timeLeft > 0 && (
        <div
          style={{
            marginTop: "35px",
            background: "#065f46",
            padding: "20px",
            borderRadius: "18px",
            boxShadow: "0 0 20px rgba(0,255,0,0.4)",
          }}
        >
          <h2>🎉 Goal Completed!</h2>

          <p
            style={{
              fontSize: "18px",
              marginTop: "10px",
            }}
          >
            Instagram & YouTube unlocked 😎🔥
          </p>
        </div>
      )}
    </div>
  );
}

export default App;