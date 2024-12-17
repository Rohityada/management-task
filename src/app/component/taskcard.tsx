import { Task } from '../types/Task';

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mb-4">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p>Start Time: {new Date(task.startTime).toLocaleString()}</p>
      <p>End Time: {new Date(task.endTime).toLocaleString()}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <button
        onClick={() => onDelete(task._id)}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Delete Task
      </button>
    </div>
  );
};

export default TaskCard;
