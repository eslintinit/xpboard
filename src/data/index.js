export const tasks = [
  {
    id: 1,
    name: 'Complete XPBoard Prototype',
    xp: '300',
    status: 'done',
    tasks: [
      {
        id: 2206721798,
        name: 'Foundation',
        xp: '300',
        status: 'done',
        tasks: [
          {
            id: 406331678,
            name: 'Create task (root, nested)',
            xp: '40',
            status: 'done',
          },
          {
            id: 2757829357,
            name: 'Content editable name and XP',
            xp: '40',
            status: 'done',
          },
          {
            id: 1778987436,
            name: 'Change status of the issue',
            xp: '30',
            status: 'done',
          },
          { id: 2057295721, name: 'Select issue', xp: '10', status: 'done' },
          {
            id: 2452553477,
            name: 'Double click to delete issue',
            xp: '30',
            status: 'done',
          },
          {
            id: 1313748302,
            name: 'Deselect when clicked outside of the issue',
            xp: 10,
            status: 'done',
          },
          {
            id: 2963554521,
            name:
              'Distinguish complete and uncomplete notes (with border color)',
            xp: '15',
            status: 'done',
          },
          { id: 3379821678, name: 'Total XP count', xp: '40', status: 'done' },
          {
            id: 1681749563,
            name: 'Add status tooltip',
            xp: '20',
            status: 'done',
          },
          { id: 2417543290, name: 'Add FAQ', xp: '25', status: 'done' },
        ],
        expanded: false,
      },
      {
        id: 1547695516,
        name: 'Organize github repo and publish to Producthunt',
        xp: '100',
        status: 'progress',
        tasks: [
          {
            id: 3650380379,
            name: 'Create github repo',
            xp: '10',
            status: 'done',
          },
          {
            id: 1728332893,
            name: 'Update README explaining idea behind the project',
            xp: '50',
            status: 'todo',
          },
          {
            id: 4050356383,
            name: 'Create feature requests (see in further improvements)',
            xp: '50',
            status: 'todo',
          },
          {
            id: 1988329409,
            name: 'Create contribution instructions',
            xp: '30',
            status: 'todo',
          },
        ],
        expanded: false,
      },
      {
        id: 3405404202,
        name: 'Further improvements',
        xp: 10,
        status: 'todo',
        tasks: [
          {
            id: 2876367821,
            name: 'Implement drag-n-drop to rearrange tasks',
            xp: 10,
            status: 'todo',
          },
          {
            id: 700101488,
            name:
              'Implement user sessions (to save the progress, right now localStorage is being used)',
            xp: 10,
            status: 'todo',
            tasks: [
              {
                id: 1043688744,
                name: 'Set up some backend and database',
                xp: 10,
                status: 'todo',
              },
              {
                id: 1092565466,
                name: 'Basic user sessions (login-password)',
                xp: 10,
                status: 'todo',
              },
              { id: 3390353258, name: 'OAuth', xp: 10, status: 'todo' },
            ],
            expanded: false,
          },
          {
            id: 1508839862,
            name: "Implement responsiveness (so it's easy to use from mobile)",
            xp: 10,
            status: 'todo',
          },
          {
            id: 3819905319,
            name: 'Organize tasks into folders (All/Work/Life/Family)',
            xp: 10,
            status: 'todo',
          },
          {
            id: 2141445622,
            name: 'Filter tasks by day/week/month/etc',
            xp: 10,
            status: 'todo',
          },
          {
            id: 4062623115,
            name:
              'Add ability to add task description, include links and images',
            xp: 10,
            status: 'todo',
          },
          {
            id: 211742466,
            name: 'Modal when creating new task',
            xp: 10,
            status: 'todo',
          },
          {
            id: 2034972943,
            name:
              'Recurring tasks (have a breakfast, do sport exercise, keep you place clean)',
            xp: 10,
            status: 'todo',
          },
          {
            id: 461269213,
            name:
              'Implement mobile application (use react-native or capacitor.js)',
            xp: 10,
            status: 'todo',
          },
          {
            id: 770737823,
            name:
              'Create "Today" view where you can plan your actions for today. Each uncomplete task from yesterday goes to "Today" the next day xD',
            xp: 10,
            status: 'todo',
          },
          {
            id: 971801631,
            name:
              'Allow to see you progress from the past week, past month etc, see how much have your performance have imrpoved',
            xp: 10,
            status: 'todo',
          },
          {
            id: 2479124239,
            name: 'Add achievements to encourage people do their best',
            xp: 10,
            status: 'todo',
          },
        ],
        expanded: false,
      },
    ],
    expanded: false,
  },
  { id: 543672461, name: 'Go for a short walk', xp: '20', status: 'done' },
  { id: 2101346541, name: 'Go boxing', xp: '100', status: 'done' },
  {
    id: 1081546408,
    name: 'Clean the space',
    xp: '50',
    status: 'todo',
    tasks: [
      {
        id: 196567114,
        name: 'Clean kitchen',
        xp: '20',
        status: 'todo',
        tasks: [],
        expanded: true,
      },
      { id: 1007484419, name: 'Clean room', xp: '30', status: 'todo' },
      { id: 332792883, name: 'Wash clothes', xp: '30', status: 'todo' },
    ],
    expanded: false,
  },
  { id: 913277691, name: 'Go for a walk', xp: '40', status: 'todo' },
  {
    id: 2870917244,
    name: 'Complete Dillan (NFT board)',
    xp: '600',
    status: 'progress',
    tasks: [
      {
        id: 3981432143,
        name: 'Bootstrap canvas with konva.js',
        xp: '100',
        status: 'done',
        tasks: [
          { id: 496081442, name: 'Let zoom', xp: '30', status: 'done' },
          { id: 1616997238, name: 'Let scroll', xp: '30', status: 'done' },
          { id: 519682246, name: 'Define grid', xp: '40', status: 'done' },
        ],
        expanded: false,
      },
      {
        id: 309371560,
        name: 'Let people "buy land"',
        xp: '30',
        status: 'done',
      },
      {
        id: 2463434459,
        name: 'Let people drag an image',
        xp: '30',
        status: 'done',
      },
      {
        id: 1113810821,
        name:
          'If image resolution is higher than then land owned, reduce image size',
        xp: '50',
        status: 'done',
      },
      {
        id: 3347872005,
        name:
          'If bottom-right corner of the image exceeds land borders, reposition image',
        xp: '50',
        status: 'todo',
      },
      {
        id: 3414898619,
        name: 'Let upload custom image with drag-n-drop',
        xp: '30',
        status: 'done',
      },
      {
        id: 3338817466,
        name: 'Let add and modify text',
        xp: '80',
        status: 'todo',
      },
      {
        id: 3758588220,
        name: 'Let rotate the image',
        xp: '50',
        status: 'done',
      },
      {
        id: 1755824940,
        name: 'If image is placed in not the land you own - undo action',
        xp: '50',
        status: 'done',
      },
      {
        id: 3381067906,
        name:
          'Modify initial zooming and position of the canvas (artboard is centerred, whole artboard is visible)',
        xp: '20',
        status: 'todo',
      },
      {
        id: 292336481,
        name:
          'Remove bug where image dragging/rotating is confused with selection',
        xp: '30',
        status: 'todo',
      },
      {
        id: 299109266,
        name:
          'If image size is scaled, not right land square is being highlighted (when dragging) - bug',
        xp: '50',
        status: 'todo',
      },
    ],
    expanded: false,
  },
]
