export default function Container() {

  function handleClick(e){
    console.log("click !");
  }

  function handleClickWithId(id){
    console.log(id);
  }

  function handleClickWithIdAndEventObjet(e,id){
    console.log(e,id);
  }

  return (
    <div>
      <h1>Use Events</h1>
      {/* You can add an event directly in JSX with an anonymous function, but it is not practical if there is a lot of code */}
      <button onClick={() => console.log("click !")}>Click</button>
      {/* Bad practice, not very maintainable */}
      <button onClick={() => {
        console.log("click !")
        console.log("click !")
        console.log("click !")
        console.log("click !")
        console.log("click !")
      }}>Click</button>

      {/* We generally prefer this */}
      <button onClick={handleClick}>Click</button>

      {/* Be careful, if you want to pass an argument, you must use an anonymous function */}
      <button onClick={() => handleClickWithId(123445)}>Click</button>

      {/* If we want the event object AND pass one or more arguments, we code this */}
      <button onClick={e => handleClickWithIdAndEventObjet(e, 1234)}>Click</button>

    </div>
  )
}
