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

      <div style={{
        backgroundColor: "#1a1a1a",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "30px"
      }}>
        <h2>Performance</h2>
        <p>Record: 0–0</p>
        <p>Win Rate: 0%</p>
        <p>ROI: 0%</p>
      </div>

      <h2>Today’s Qualified Signals</h2>

      <div style={{
        backgroundColor: "#1a1a1a",
        padding: "15px",
        borderRadius: "12px",
        marginTop: "10px"
      }}>
        <p><strong>Lakers vs Suns</strong></p>
        <p style={{ filter: "blur(6px)" }}>
          Spread: Lakers -4
        </p>
        <p style={{ color: "#4ade80" }}>
          ✅ Qualified
        </p>
      </div>

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

      <h2 style={{ marginTop: "30px" }}>Recent Results</h2>

      <div style={{
        backgroundColor: "#1a1a1a",
        padding: "15px",
        borderRadius: "12px",
        marginTop: "10px"
      }}>
        <p>April 1</p>
        <p>Lakers vs Suns → 🔒 ✅</p>
        <p>Celtics vs Heat → 🔒 ❌</p>
      </div>

    </main>
  );
}
