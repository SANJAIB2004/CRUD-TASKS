import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      await api.post('tasks/', {
        title,
        description,
        status: 'PENDING',
      });
      navigate('/tasks');
    } catch (err) {
      alert('Error creating task');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-xl mb-4">Create Task</h2>
      <input
        className="border p-2 mb-2 block w-full"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 mb-4 block w-full"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <textarea
        className="border p-2 mb-4 block w-full"
        placeholder="status"
        value={status}
        onChange={e => setStatus(e.target.value)}
      />
      <button onClick={handleCreate} className="bg-green-500 text-white px-4 py-2">
        Submit
      </button>
    </div>
  );
}

export default CreateTask;
