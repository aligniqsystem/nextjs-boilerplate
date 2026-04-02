import { data } from "../data";

export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0B0B0B",
      color: "white",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Inter, sans-serif"
    }}>

      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        AlignIQ System
      </h1>

      <p style={{ color: "#888", marginBottom: "20px" }}>
        Data-driven market insights
      </p>

      {/* RECORD */}
      <div style={{
        backgroundColor: "#1a1a1a",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "30px"
      }}>
        <h2>Performance</h2>
        <p>Record: {data.record}</p>
        <p>Win Rate: {data.winRate}</p>
        <p>ROI: {data.roi}</p>
      </div>

      {/* TODAY */}
      <h2>Today’s Qualified Signals</h2>

      {data.todaysPlays.map((play, index) => (
        <div key={index} style={{
          backgroundColor: "#1a1a1a",
          padding: "15px",
          borderRadius: "12px",
          marginTop: "10px"
        }}>
          <p><strong>{play.matchup}</strong></p>
          <p style={{ filter: "blur(6px)" }}>
            Signal Locked
          </p>
          <p style={{ color: "#4ade80" }}>
            ✅ Qualified
          </p>
        </div>
      ))}

      <button style={{
        marginTop: "15px",
        padding: "12px",
        width: "100%",
        backgroundColor: "#4ade80",
        border: "none",
        borderRadius: "8px",
        fontWeight: "bold"
      }}>
        Unlock Today’s Signals
      </button>

      {/* RESULTS */}
      <h2 style={{ marginTop: "30px" }}>Recent Results</h2>

      {data.results.map((day, i) => (
        <div key={i} style={{
          backgroundColor: "#1a1a1a",
          padding: "15px",
          borderRadius: "12px",
          marginTop: "10px"
        }}>
          <p><strong>{day.date}</strong></p>

          {day.games.map((game, j) => (
            <p key={j}>
              {game.matchup} → 🔒 {game.result === "win" ? "✅" : "❌"}
            </p>
          ))}
        </div>
      ))}

    </main>
  );
}
