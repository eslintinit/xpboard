export const tasks = [
  {
    id: 1,
    name: 'Create XPBoard Prototype',
    xp: 100,
    status: 'progress',
  },
  {
    id: 2,
    name: 'Complete Dillan',
    xp: 200,
    status: 'todo',
    expanded: false,
    tasks: [
      {
        id: 3,
        name: 'Nest 1',
        status: 'todo',
        xp: 100,
        tasks: [
          {
            id: 4,
            name: 'Nest 2',
            status: 'todo',
            xp: 100,

            tasks: [
              {
                id: 5,
                name: 'Nest 3',
                status: 'todo',
                xp: 100,
              },
            ],
          },
          {
            id: 6,
            name: 'Nest 2: Task 2',
            status: 'todo',
            xp: 100,
          },
        ],
      },
      {
        id: 7,
        name: 'Nest 1: Task 2',
        status: 'todo',
        xp: 100,
      },
    ],
  },
  {
    id: 8,
    name: 'Get kush',
    xp: 200,
    status: 'todo',
  },
]
