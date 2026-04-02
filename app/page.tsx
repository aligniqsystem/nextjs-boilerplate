export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Homepage ✅</h1>

      <a href="/members">
        <button style={{
          marginTop: "20px",
          padding: "12px",
          fontSize: "16px"
        }}>
          Go to Members Page
        </button>
      </a>
    </main>
  );
}
