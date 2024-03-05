export default function Container() {

  const isLogged = true

  return (
    <div>
      <h1>Welcome on BooksHalla</h1>
      {/* {isLogged ? <button>Show collection</button> : ""} */}
      {isLogged && <button>Show collection</button>}

    </div>
  )
}
