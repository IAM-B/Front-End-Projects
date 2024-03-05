import { useState, useEffect } from "react";
import "./Container.css";
import spinner from "./spinner.svg";

export default function Container() {
  const [APIState, setAPIState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setAPIState({ ...APIState, loading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setAPIState({ loading: false, error: false, data: data });
      })
      .catch(() => {
        setAPIState({ loading: false, error: true, data: undefined });
      });
  }, []);

  let content;
  if (APIState.loading) content = <img src={spinner} alt="loading icon" />;
  else if (APIState.error) content = <p>An error has occurred</p>;
  else if (APIState.data?.length > 0) {
    content = (
      <ul>
        {APIState.data.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.email}</span>
            <span>{item.phone}</span>
          </li>
        ))}
      </ul>
    );
  } else if (APIState.data?.length === 0) {
    content = <p>Your query does not return data.</p>;
  }
  return (
    <div>
      <h1>API Call</h1>
      {content}
    </div>
  );
}
