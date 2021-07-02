import { useCounter } from "./use-counter";

export const Counter = () => {
  const incident = 'Incident';
  const { count, increment, decrement, set } = useCounter();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => set(0)}>Reset</button>
        <button onClick={() => increment()}>Increment</button>
      </section>
      <setCounter/>
    </main>
  );
};

export default Counter;
