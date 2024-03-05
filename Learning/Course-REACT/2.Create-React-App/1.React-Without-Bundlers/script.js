function title() {
  return React.creatElement("h1", { className: "title" }, "Hello world");
}

ReactDom.createRoot(document.getElementById("root")).render(title());
