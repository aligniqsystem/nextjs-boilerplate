import { data } from "../../data";

export default function Members() {
  return (
    <main style={{
      backgroundColor: "#0B0B0B",
      color: "white",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Inter, sans-serif"
    }}>

      {/* HEADER */}
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        Members Access
      </h1>

      {/* NAV */}
      <div style={{ marginBottom: "20px", marginTop: "10px" }}>
        <a href="/" style={{ marginRight: "15px", color: "#4ade80" }}>Home</a>
        <a href="/results" style={{ color: "#4ade80" }}>Results</a>
      </div>

      {/* DESCRIPTION */}
      <p style={{ color: "#888" }}>
        Full access to today’s data-driven system signals.
      </p>

      {/* SIGNALS */}
      <h2 style={{ marginTop: "20px" }}>Today’s Signals</h2>

      {data.todaysPlays.length === 0 ? (
        <p style={{ color: "#888" }}>No qualified signals today</p>
      ) : (
        data.todaysPlays.map((play, index) => (
          <div key={index} style={{
            backgroundColor: "#1a1a1a",
            padding: "15px",
            borderRadius: "12px",
            marginTop: "10px"
          }}>
            <p><strong>{play.matchup}</strong></p>
            <p style={{ color: "#4ade80" }}>
              ✔️ Full Signal Access
            </p>
          </div>
        ))
      )}

      {/* DISCLAIMER */}
      <div style={{ marginTop: "30px" }}>
        <p style={{ color: "#888", fontSize: "14px" }}>
          This platform provides data-driven sports analytics for informational and educational purposes only. 
          We do not offer gambling services or guarantee outcomes. Users are responsible for their own decisions.
        </p>
      </div>

    </main>
  );
}
