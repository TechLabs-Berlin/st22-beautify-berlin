import "./BoxImage.css";

export default function BoxImage() {
  return (
    <div className="aboutbox">
      <div className="boxinfo">
        <span className="boxid">Electric Box ID</span>
        <span className="boxAddress">Electric Box Address</span>
        <span className="status">Current status</span>
      </div>
      <img
        className="boximage"
        src="https://thumbs.dreamstime.com/z/electric-control-box-street-outdoor-city-142220222.jpg"
        alt=""
      />
    </div>
  );
}
