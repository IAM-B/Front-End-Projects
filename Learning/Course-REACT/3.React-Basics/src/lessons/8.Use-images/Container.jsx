import fuji from "./assets/fuji.jpg";
import triangle from "./assets/triangle.svg";

export default function Container() {
  console.log(fuji);

  const id = 3;

  return (
    <div>
      <h1>Use images</h1>

      <p>Image jpg/png/webp/...</p>
      <img src={fuji} alt="Mont fuji" />

      <p>Use public folder</p>
      <img src="/assets/forest-1.jpg" alt="" />
      <img src={`/assets/forest-${id}.jpg`} alt="" />

      <p>SVGs</p>
      <img src={triangle} alt="" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        fill="#f1f1f1"
        enableBackground="new 0 0 486.273 486.273"
        version="1.1"
        viewBox="0 0 486.273 486.273"
        xmlSpace="preserve"
      >
        <path d="M484.844 438.908L252.311 36.775c-2.905-5.125-9.414-6.925-14.539-4.021a10.67 10.67 0 00-4.021 4.021L1.431 438.908c-2.946 5.102-1.198 11.625 3.904 14.571a10.67 10.67 0 005.269 1.429h465.067c5.891-.035 10.638-4.84 10.602-10.731a10.66 10.66 0 00-1.429-5.269zm-455.04-5.12L243.138 63.441l213.333 370.347H29.804z"></path>
      </svg>
    </div>
  );
}
