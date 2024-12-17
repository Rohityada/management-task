import { useState } from 'react';

interface TaskFormProps {
  onSubmit: (task: any) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [priority, setPriority] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, startTime, endTime, priority });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="datetime-local"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
        className="w-full p-2 border border-gray-300 rounded"
      >
        {[1, 2, 3, 4, 5].map((p) => (
          <option key={p} value={p}>
            Priority {p}
          </option>
        ))}
      </select>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
