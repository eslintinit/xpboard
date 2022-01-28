import { useState, useContext } from 'react'
import {
  CheckIcon,
  // ChevronDownIcon,
  // ChevronUpIcon,
  // PlusIcon,
  QuestionMarkCircleIcon,
  PlusIcon,
  PlusSmIcon,
} from '@heroicons/react/solid'
import {
  // CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  ChevronUpIcon,
  TrashIcon,
  // PlusIcon,
} from '@heroicons/react/outline'
import { AppContext } from './context'
import { useImmer } from 'use-immer'
import EasyEdit, { Types } from 'react-easy-edit'
import { useSingleAndDoubleClick } from './hooks'
import FAQ from './components/faq'
import ReactTooltip from 'react-tooltip'

export default () => {
  const {
    tasks,
    setTasks,
    setSelectedTask,
    setDoubleSelectedTask,
    addTask,
    totalXP,
    faqOpened,
    setFaqOpened,
  } = useContext(AppContext)

  return (
    <div
      className="flex justify-center pt-20 pb-32 bg-gray-50 h-full min-h-screen"
      onClick={(e) => {
        e.stopPropagation()
        if (e.target.id !== 'add-task') {
          setSelectedTask(undefined)
          setDoubleSelectedTask(undefined)
        }
      }}
    >
      <div className="fixed top-6 right-8">
        <span
          className="text-white bg-violet-600 rounded py-2 px-3 text-base font-bold select-none hover:bg-violet-700 cursor-pointer"
          onClick={() => alert('Keep up the good work 😂')}
        >
          {`${totalXP}XP`}
        </span>
        {/*
        <span className="text-violet-600 text-base font-bold select-none">
          {`${totalXP}XP`}
        </span>
        */}
      </div>
      <FAQ />
      {/*
       */}
      <div className="fixed bottom-6 right-8">
        <QuestionMarkCircleIcon
          className="w-8 h-8 text-gray-300 hover:text-gray-400 cursor-pointer"
          onClick={() => setFaqOpened(!faqOpened)}
        />
      </div>
      <div className="flex flex-col space-y-3 w-full max-w-xl">
        {tasks.map((task, index) => {
          return <Task task={task} indexArray={[index]} key={task.id} />
        })}

        <div
          className="flex items-center justify-center bg-gray-50 rounded border border-gray-300 w-full select-none px-4 py-5 border-dashed text-gray-400 cursor-pointer hover:text-gray-700"
          onClick={(e) => addTask([])}
          id="add-task"
        >
          {/*
          <PlusIcon className="w-4 h-4 text-gray-400" />
          */}
          Add task
        </div>
        {/*
        <button id="add-task" onClick={() => addTask([])}>
          Add task
        </button>
      */}
      </div>
    </div>
  )
}

const Task = ({ task, className = '', parent = false, indexArray }) => {
  const [XPEditing, setXPEditing] = useState(false)
  const [nameEditing, setNameEditing] = useState(false)
  const {
    toggleTaskView,
    addTask,
    deleteTask,
    selectedTask,
    setSelectedTask,
    changeTask,
    changeTaskStatus,
  } = useContext(AppContext)
  const subtasks = task.tasks
  const hasSubtasks = subtasks && subtasks.length > 0

  if (hasSubtasks && task.expanded && !parent) {
    return (
      <div className="w-full flex flex-col space-y-3 items-end relative">
        <Task task={task} parent indexArray={indexArray} />
        <div className="flex flex-col w-11/12 space-y-3 items-end">
          {subtasks.map((subtask, subtaskIndex) => {
            const hasSubtasks = subtask.tasks && subtask.tasks.length > 0

            return (
              <Task
                indexArray={[...indexArray, subtaskIndex]}
                task={subtask}
                key={subtask.id}
                className=""
                hasSubtasks={hasSubtasks}
              />
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <SingleTask task={task} indexArray={indexArray} className={className} />
  )
}

const SingleTask = ({ task, indexArray, className }) => {
  const [XPEditing, setXPEditing] = useState(false)
  const [nameEditing, setNameEditing] = useState(false)
  const {
    toggleTaskView,
    addTask,
    deleteTask,
    selectedTask,
    setSelectedTask,
    doubleSelectedTask,
    setDoubleSelectedTask,
    changeTask,
    changeTaskStatus,
  } = useContext(AppContext)
  const subtasks = task.tasks
  const hasSubtasks = subtasks && subtasks.length > 0

  return (
    <div
      className={`flex items-center bg-white rounded justify-between border ${
        task.status === 'done'
          ? 'border-violet-400'
          : task.id === doubleSelectedTask
          ? 'border-red-500'
          : task.id === selectedTask
          ? 'border-teal-500'
          : 'border-gray-300'
      } w-full px-4 py-5 ${className} select-none`}
      onClick={(e) => {
        e.stopPropagation()
        if (selectedTask === task.id) {
          setDoubleSelectedTask(task.id)
        }
        if (selectedTask === doubleSelectedTask) {
          setDoubleSelectedTask(undefined)
        }
        setSelectedTask(task.id)
        // if (!task.expanded) {
        //   toggleTaskView(indexArray, true)
        // }
      }}
    >
      <div className="flex items-center">
        {task.status === 'todo' && (
          <Icon
            onClick={(e) => {
              if (selectedTask === task.id) {
                e.stopPropagation()
              }
              changeTaskStatus(indexArray)
            }}
            dataFor="todo"
          >
            <ReactTooltip
              id={'todo'}
              effect="solid"
              className="tooltip tooltip-todo"
            >
              <span>Todo</span>
            </ReactTooltip>
            <div className="w-3 h-3 p-1 rounded-full border-2 border-gray-300" />
          </Icon>
        )}
        {task.status === 'progress' && (
          <Icon
            onClick={(e) => {
              if (selectedTask === task.id) {
                e.stopPropagation()
              }
              changeTaskStatus(indexArray)
            }}
            dataFor="progress"
          >
            <ReactTooltip
              id={'progress'}
              effect="solid"
              className="tooltip tooltip-todo"
            >
              <span>In progress</span>
            </ReactTooltip>
            <div className="w-3 h-3 p-1 rounded-full border-2 border-teal-500" />
          </Icon>
        )}
        {task.status === 'done' && (
          <Icon
            onClick={(e) => {
              if (selectedTask === task.id) {
                e.stopPropagation()
              }
              changeTaskStatus(indexArray)
            }}
            dataFor="done"
          >
            <ReactTooltip
              id={'done'}
              effect="solid"
              className="tooltip tooltip-todo"
            >
              <span>Done</span>
            </ReactTooltip>
            <div className="w-3 h-3 p-1 rounded-full border-2 border-violet-500" />
          </Icon>
        )}

        {/*
            <CheckIcon className="w-4 h-4 text-violet-600" />
          */}
        <Icon
          onClick={(e) => {
            e.stopPropagation()
            addTask(indexArray)
          }}
        >
          <PlusIcon className="w-3 h-3 text-gray-400" />
        </Icon>
        {hasSubtasks && (
          <Icon
            onClick={(e) => {
              e.stopPropagation()
              toggleTaskView(indexArray, !task.expanded)
            }}
          >
            {task.expanded ? (
              <ChevronUpIcon className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDownIcon
                className="w-4 h-4 text-gray-400"
                style={{ paddingTop: 1 }}
              />
            )}
          </Icon>
        )}
        {task.id === doubleSelectedTask && (
          <Icon
            onClick={(e) => {
              // e.stopPropagation()
              deleteTask(indexArray)
            }}
            className="border-red-400 hover:border-red-500"
          >
            <TrashIcon className="w-4 h-4 text-red-400" />
          </Icon>
        )}

        {/*
        <span className="text-base font-regular text-gray-900 select-text">
        </span>
        */}
        <span
          onClick={(e) => {
            if (selectedTask === task.id) {
              e.stopPropagation()
            }
          }}
        >
          <EasyEdit
            type={Types.TEXT}
            hideSaveButton
            hideCancelButton
            saveOnBlur
            value={task.name}
            onHoverCssClass=""
            cssClassPrefix="text-base font-regular text-gray-900 select-text name-edit "
            onSave={(text) => {
              setNameEditing(false)
              changeTask(indexArray, 'name', text)
            }}
          />
        </span>
      </div>
      {/*
        <span className="text-violet-600 text-sm font-semibold select-text">{`+${task.xp}`}</span>
        */}
      {task.xp && (
        <span
          onClick={(e) => {
            if (selectedTask === task.id) {
              e.stopPropagation()
            }
          }}
        >
          <EasyEdit
            type={Types.TEXT}
            hideSaveButton
            hideCancelButton
            saveOnBlur
            value={`+${task.xp}`}
            onHoverCssClass=""
            cssClassPrefix={` ${
              task.status === 'done' ? 'text-violet-500' : 'text-violet-600'
            } text-sm font-semibold select-text text-right xp-edit `}
            onSave={(text) => {
              setNameEditing(false)
              changeTask(
                indexArray,
                'xp',
                text[0] === '+' ? text.substring(1) : text,
              )
            }}
          />
        </span>
      )}
    </div>
  )
}

const Icon = ({
  children,
  onClick = () => {},
  className = '',
  dataFor = '',
}) => (
  <div
    className={`w-5 h-5 rounded border border-gray-300 mr-2 flex items-center justify-center hover:border-teal-500 cursor-pointer ${className}`}
    onClick={onClick}
    data-tip
    data-for={dataFor}
    style={{ minWidth: '1.25rem' }}
  >
    {children}
  </div>
)
