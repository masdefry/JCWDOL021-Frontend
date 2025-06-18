import { ITodos } from '../types';

interface ITodoListProps extends Pick<ITodos, 'id' | 'name'>{
  onDeleteTodo: (id: string) => void;
}

export default function TodoList({
  name,
  id,
  onDeleteTodo
}: ITodoListProps) {
  return (
    <div className='flex items-center gap-3 border-b-2 border-gray-200 p-3'>
      <input
        type='radio'
        className='radio'
        onClick={() => onDeleteTodo(id)}
      />
      <h3>{name}</h3>
    </div>
  );
}
