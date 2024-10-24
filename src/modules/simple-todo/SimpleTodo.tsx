import clsx from "clsx"
import { useTranslation } from 'react-i18next'
import { InputPlus } from "./components/InputPlus"
import { TaskItem } from "./components/TaskItem"
import { BtnFunc } from "./components/BtnFunc"
import { InputFilter } from "./components/InputFilter"
import { useState } from "react"
import { Task } from "./store/types"


export const SimpleTodo = ({className}: {className?: string}) => {
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
  const { t } = useTranslation()
  

  return (
    <article className={clsx(
      'bg-white min-w-[600px] px-14 pt-5 pb-8 flex flex-col',
      ' items-left justify-center', 
      className,
      )}>

      <div className="relative">
        <h1 className="text-[40px] mb-[0.3em] capitalize dark:text-lime-200">{t('ToDoList')}</h1>
        <p className="text-sm px-6 py-2 rounded-lg absolute top-[-10px] left-[450px]  bg-lime-200">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempore incidunt odio temporibus similique fuga, deserunt, veniam corporis modi suscipit error inventore, at quod quos facere expedita unde quas amet?
        </p>
      </div>
      
      <section className="w-full pb-4 flex gap-4">
        <BtnFunc />
        <InputPlus />
        <InputFilter setFilteredTasks={setFilteredTasks} className="w-[400px]" />
      </section>
      <section className="w-full">
        {!filteredTasks.length && <p className="dark:text-slate-200">{t('NoOneTask')}</p>}
        {filteredTasks.map(task => 
          <TaskItem key={task.id} title={task.title} id={task.id} done={task.isDone} />
        )}
      </section>
    </article>
  )
}