// SSR
const onGetTodos = async () => {
  const response = await fetch('http://localhost:3001/todos', {
    method: 'GET',
    cache: 'force-cache',
  });

  const todos = await response.json();

  return todos;
};

export default async function DataFetchingPage() {
  const todos = await onGetTodos();

  return (
    <>
      <h1>Belajar Data Fetching Strategy</h1>
      {todos?.map((todo, index) => {
        return <p key={index}>{todo?.name}</p>;
      })}
    </>
  );
}
