export default function TaskArea() {
  return (
    <div className="flex flex-1 p-6">
      <div className="flex-1 task-columns flex justify-start space-x-3 overflow-scroll">
        <TaskColumn title="Todo" laneId="todo" />
      </div>
    </div>
  );
}

interface TaskColumnProps {
  title: string;
  laneId: string;
}

export function TaskColumn({ title, laneId }: TaskColumnProps) {
  const data = getData(laneId);

  return (
    <div className="lane rounded-md border min-w-[300px]">
      <p>{title}</p>
      <div className="select-none flex flex-col w-full space-y-2">
        {data?.map((item) => (
          <div className="border cursor-grab active:cursor-grabbing" draggable>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

// =================================
//       DATA related things
// =================================

const todoLaneItems = [
  { title: "Task 1" },
  { title: "Task 2" },
  { title: "Task 3" },
];

const progressLaneItems = [
  { title: "Task 1" },
  { title: "Task 2" },
  { title: "Task 3" },
];

const getData = (laneId: string) => {
  switch (laneId) {
    case "todo":
      return todoLaneItems;
    case "progress":
      return progressLaneItems;
  }
};
