export default function Premium() {
  return (
    <main style={{
      backgroundColor: "#0B0B0B",
      color: "white",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Inter, sans-serif",
      textAlign: "center"
    }}>

      {/* HEADER */}
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        AlignIQ System Access
      </h1>

      {/* NAV */}
      <div style={{ marginBottom: "20px", marginTop: "10px" }}>
        <a href="/" style={{ marginRight: "15px", color: "#4ade80" }}>Home</a>
        <a href="/results" style={{ color: "#4ade80" }}>Results</a>
      </div>

      {/* DESCRIPTION */}
      <p style={{ color: "#888", marginTop: "10px" }}>
        Unlock full access to data-driven system signals and analytics.
      </p>

      {/* PRICING CARD */}
      <div style={{
        backgroundColor: "#1a1a1a",
        padding: "25px",
        borderRadius: "12px",
        marginTop: "30px"
      }}>
        <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
          $9 / Month
        </h2>

        <p style={{ color: "#888", marginTop: "10px" }}>
          Full access to all qualified system signals
        </p>

        <p style={{ color: "#4ade80", marginTop: "10px", fontSize: "14px" }}>
          Early access pricing — subject to increase as performance grows
        </p>

        {/* STRIPE BUTTON */}
        <a href="https://buy.stripe.com/test_fZu00k2ch6VzfHBbuvfAc00">
          <button style={{
            marginTop: "20px",
            padding: "14px",
            width: "100%",
            backgroundColor: "#4ade80",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px"
          }}>
            Continue to Checkout
          </button>
        </a>
      </div>

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
