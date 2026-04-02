import { data } from "../../data";

export default function Results() {
  return (
    <main style={{
      backgroundColor: "#0B0B0B",
      color: "white",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Inter, sans-serif"
    }}>

      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        Results History
      </h1>

      <p style={{ color: "#888", marginBottom: "20px" }}>
        Historical performance of system signals
      </p>

      {data.results.map((day, i) => (
        <div key={i} style={{
          backgroundColor: "#1a1a1a",
          padding: "15px",
          borderRadius: "12px",
          marginTop: "15px"
        }}>
          <h3>{day.date}</h3>

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
