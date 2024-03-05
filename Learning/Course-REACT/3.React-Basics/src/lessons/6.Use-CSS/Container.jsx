import "./Container.css";

export default function Container() {
  const bgColor = "#333";

  return (
    <div>
      <h1 style={{ color: "crimson", backgroundColor: bgColor }}>Use CSS</h1>
      <p className="txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        provident ipsum a magnam suscipit placeat minus, ab amet quos explicabo
        quas vel quaerat sit accusamus veritatis fugit voluptatibus dignissimos
        iure!
      </p>
    </div>
  );
}
