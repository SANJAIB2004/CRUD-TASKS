import { useEffect, useState } from 'react';
import api from '../api/axios';
import {Link} from 'react-router-dom';
function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('tasks/').then(res => setTasks(res.data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-xl mb-4">Your Tasks</h2>
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id} className="mb-2 border p-2">
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    <Link to="/create-task" className="bg-blue-600 text-white px-3 py-1 mb-4 inline-block">
    + Add Task
    </Link>
    </div>
  );
}

export default TaskList;
