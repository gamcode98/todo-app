import { Itodo } from '../../interfaces/Itodo'
import DeleteButton from '../DeleteButton/DeleteButton'
import DoneButton from '../DoneButton/DoneButton'

function Todo({ todo }: { todo: Itodo }) {
  return (
    <>
      <div className='flex items-center gap-4'>
        <DoneButton done={todo.done} id={todo.id} />
        <span
          className={`${
            todo.done
              ? 'line-through text-dark-grayish-blue-lt dark:text-very-dark-grayish-blue-dt'
              : 'text-very-dark-grayish-blue-lt dark:text-light-grayish-blue-dt'
          }`}
        >
          {todo.task}
        </span>
      </div>
      <DeleteButton id={todo.id} />
    </>
  )
}

export default Todo
