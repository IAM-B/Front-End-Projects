function Container() {

  const test = "text";

  function handleClick(){
    console.log("click");
  }
  
  return (
    <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <ul className="list">
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
      <button>Sublit</button>
      <p>{10 + 10}</p>
      <p>{"ab" + "c"}</p>
      <p>{"Nice to meet you!".toUpperCase()}</p>
      <p>{test}</p>
      {/* <p>{[<span>Hello World</span>]}</p> */}

      <input type="text" />
      <hr />
      <img src="" alt="" />

      <p className="txt">Lorem ipsum dolor sit amet.</p>
      <label htmlFor="">lorem</label>

      <button className="btn" onClick={e => handleClick(e, 585)}>Submit</button>



    </div>
  );
}

export default Container;
