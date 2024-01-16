import { Age } from "./Age";

export function Welcome({name}) {
    return (
      <>
        <p>Welcome, {name}</p>
        <Age age={33} />
      </>
    );
}