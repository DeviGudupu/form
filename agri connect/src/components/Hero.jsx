export default function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <h2>Build awareness. Connect farmers with help & markets.</h2>
        <p>Prototype demo: explore resources, get expert guidance, share initiatives, and manage content as an admin.</p>
        <div className="search">
          <input type="search" placeholder="Search guides, crops, initiatives..." />
          <button className="primary">Search</button>
        </div>
      </div>
      <div style={{ width: "220px" }}>
        <img
          src="https://media.istockphoto.com/id/1465642013/photo/a-vibrant-green-soybean-field-nestled-in-a-natural-setting.jpg?s=1024x1024&w=is&k=20&c=iiVvAmlMLznJkCVdb5z0SjkvtwHAcu6MPjJ_dxq1VCM="
          alt="Soybean field"
          style={{ width: "100%", height: "100px", borderRadius: "10px", objectFit: "cover", display: "block" }}
        />
      </div>
    </div>
  );
}
