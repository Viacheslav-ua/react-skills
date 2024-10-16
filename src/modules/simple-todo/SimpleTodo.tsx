import { InputPlus } from "./components/InputPlus"
import { TaskItem } from "./components/TaskItem"
import { useTodoStore } from "./store/useTodoStore"

export const SimpleTodo = () => {
  const entities = useTodoStore(state => state.entities)
  const addTask = useTodoStore(state => state.addTask)
  // const updateTask = useTodoStore(state => state.updateTask)
  // const removeTask = useTodoStore(state => state.removeTask)

  const handleAddTask = (title: string) => {
    if (title) {
      addTask(title)
    }
  }

  const forRemoveTask = (id: string) => {
    
  }

  
  return (
    <article className="bg-white min-w-[600px] rounded-[20px] px-14 pt-5 pb-8 flex flex-col items-center justify-center">
      <h1 className="text-[40px] mb-[0.3em]">To Do App</h1>
      <section className="w-full pb-4">
        <InputPlus addTask={handleAddTask} />
      </section>
      <section className="w-full">
        {!entities.length && <p>There is no one task yet...</p>}
        {entities.map(entity => {
          const task = Object.values(entity)[0]
          return <TaskItem key={task.id} title={task.title} id={task.id} 
            // removeTask={removeTask} 
            // updateTask={updateTask}
            forRemove={forRemoveTask} />
        }
        )}
      </section>
    </article>
  )
}