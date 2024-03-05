export default function Container() {
  const data = [
    { id: 1, name: "Abdullah" },
    { id: 2, name: "AbdelRahman" },
    { id: 3, name: "AbdelRahime" },
  ];
  return (
    <div>
      <h1>Create a list of items with React</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
        {/* <li>{data[0].name}</li>
        <li>{data[1].name}</li>
        <li>{data[2].name}</li> */}
      </ul>
    </div>
  );
}
