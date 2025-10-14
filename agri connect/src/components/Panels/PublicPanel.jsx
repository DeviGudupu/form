export default function PublicPanel() {
  return (
    <div className="panel active">
      <h3>Public: Learn & Engage</h3>
      <div className="row">
        <div className="panel-card">
          <h4>Featured Article</h4>
          <small>How small changes improve soil health</small>
          <p style={{ marginTop: "8px" }}>Simple techniques: mulching, composting, and water conservation.</p>
        </div>
        <div className="panel-card">
          <h4>Events</h4>
          <small>Local tree plantation — Sat, 10 AM</small>
          <p style={{ marginTop: "8px" }}>Join volunteer drives, awareness sessions and donate seeds.</p>
        </div>
        <div className="panel-card">
          <h4>Videos</h4>
          <small>Water-saving irrigation</small>
          <p style={{ marginTop: "8px" }}>Watch 3-min demo video on drip irrigation benefits.</p>
        </div>
      </div>
    </div>
  );
}
