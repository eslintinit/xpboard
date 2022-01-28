import { createContext, useState, useEffect } from 'react'
import { useImmer } from 'use-immer'
import { tasks as initialTasks } from '../data'
import randomIndex from 'random-index'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useImmer(
    window.localStorage.tasks
      ? JSON.parse(window.localStorage.tasks)
      : initialTasks,
  )
  const [selectedTask, setSelectedTask] = useState(undefined)
  const [doubleSelectedTask, setDoubleSelectedTask] = useState(undefined)

  const [totalXP, setTotalXP] = useState(undefined)

  const [faqOpened, setFaqOpened] = useState(false)

  const iterateTask = (tasks, addXp) => {
    tasks.forEach((task) => {
      if (task.status === 'done' && task.xp) addXp(task.xp)
      if (task.tasks) {
        iterateTask(task.tasks, addXp)
      }
    })
  }

  useEffect(() => {
    let total = 0

    iterateTask(tasks, (xp) => {
      total += +xp
    })

    setTotalXP(total)
  }, [tasks])

  useEffect(() => {
    if (selectedTask !== doubleSelectedTask) {
      setDoubleSelectedTask(undefined)
    }
    // if singleClick comes after doubleClick - remove doubleclick
    // if doubleClick comes after singleClick
  }, [selectedTask, doubleSelectedTask])

  const changeTask = (indexArray, key, value) => {
    setTasks((tasks) => {
      let neededTask
      let parentList = tasks

      for (let i = 0; i < indexArray.length; i++) {
        let index = indexArray[i]
        neededTask = parentList[index]
        parentList = neededTask.tasks
      }

      neededTask[key] = value
    })
  }

  const changeTaskStatus = (indexArray) => {
    setTasks((tasks) => {
      let neededTask
      let parentList = tasks

      for (let i = 0; i < indexArray.length; i++) {
        let index = indexArray[i]
        neededTask = parentList[index]
        parentList = neededTask.tasks
      }

      if (neededTask.status === 'todo') {
        neededTask.status = 'progress'
      } else if (neededTask.status === 'progress') {
        neededTask.status = 'done'
      } else if (neededTask.status === 'done') {
        neededTask.status = 'todo'
      }
    })
  }

  const addTask = (indexArray) => {
    const id = randomIndex()
    const newTask = {
      id,
      name: 'New task',
      xp: 10,
      status: 'todo',
    }

    setTasks((tasks) => {
      if (indexArray.length === 0) {
        tasks.push(newTask)
        setSelectedTask(id)
        return
      }

      let neededTask
      let parentList = tasks

      for (let i = 0; i < indexArray.length; i++) {
        let index = indexArray[i]
        neededTask = parentList[index]
        parentList = neededTask.tasks
      }

      if (parentList) {
        neededTask.expanded = true
        parentList.push(newTask)
      } else {
        neededTask.tasks = [newTask]
        neededTask.expanded = true
      }
    })

    setSelectedTask(id)
  }

  const deleteTask = (indexArray) => {
    setTasks((tasks) => {
      if (indexArray.length === 1) {
        tasks.splice(indexArray[0], 1)
        return
      }

      let neededTask
      let parentList = tasks

      for (let i = 0; i < indexArray.length - 1; i++) {
        let index = indexArray[i]
        neededTask = parentList[index]
        neededTask.name && console.log(neededTask.name)
        parentList = neededTask.tasks
      }

      neededTask.tasks.splice(indexArray[indexArray.length - 1], 1)
    })
  }

  const toggleTaskView = (indexArray, viewState) => {
    setTasks((tasks) => {
      let neededTask
      let parentList = tasks

      for (let i = 0; i < indexArray.length; i++) {
        let index = indexArray[i]
        neededTask = parentList[index]
        parentList = neededTask.tasks
      }

      neededTask.expanded = viewState
    })
  }

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,

        selectedTask,
        setSelectedTask,
        doubleSelectedTask,
        setDoubleSelectedTask,
        changeTask,
        changeTaskStatus,
        addTask,
        deleteTask,
        toggleTaskView,

        totalXP,
        setTotalXP,

        faqOpened,
        setFaqOpened,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
