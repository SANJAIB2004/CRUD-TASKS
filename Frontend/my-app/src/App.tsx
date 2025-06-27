import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import TaskList from './tasks/TaskList';
import CreateTask from './tasks/CreateTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
