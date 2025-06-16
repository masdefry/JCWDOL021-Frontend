interface ITodoListProps {
  todo: string;
}

export default function TodoList({ todo }: ITodoListProps) {
  return (
    <div className='flex items-center gap-3 border-b-2 border-gray-200 p-3'>
      <input
        type='radio'
        className='radio'
      />
      <h3>{todo}</h3>
    </div>
  );
}
