export default function Card({ id, state, changeState }) {
  console.log(id, state);
  return (
    <div>
      <p>User {id}</p>
      <p>State parent {state}</p>
      <button onClick={() => changeState("Salamu Alykum")}>Change State</button>
    </div>
  );
}
