export default function Container() {

  const isLogged = false
  let content

  if(isLogged) content = "Welcome to your the dashboard"
  else content = "Logging please"

  return <div>
    <h1>Make conditional if</h1>
    <p>{content}</p>
  </div>
}
