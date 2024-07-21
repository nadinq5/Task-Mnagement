import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';

function App() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
  const [editid, setEditid] = useState(null);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "medium");

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date();

    if (editid) {
      const updatedTasklist = tasklist.map(t =>
        t.id === editid ? { ...t, name: task, description, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : t
      );
      setTasklist(updatedTasklist);
      setEditid(null);
    } else if (task) {
      setTasklist([...tasklist, { id: date.getTime(), name: task, description, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`, completed: false }]);
    }

    setTask("");
    setDescription("");
  };

  const handleEdit = (id) => {
    const selectedTask = tasklist.find(t => t.id === id);
    setTask(selectedTask.name);
    setDescription(selectedTask.description);
    setEditid(id);
  };

  const handleDelete = (id) => {
    if (id === null) {
      setTasklist([]);
    } else {
      const updatedTasklist = tasklist.filter(t => t.id !== id);
      setTasklist(updatedTasklist);
    }
  };

  const handleComplete = (id) => {
    const updatedTasklist = tasklist.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasklist(updatedTasklist);
  };

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  }, [tasklist]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <Header setTheme={setTheme} theme={theme}>
          Task Management
        </Header>
        <AddTask 
          handleSubmit={handleSubmit} 
          editid={editid} 
          task={task} 
          setTask={setTask} 
          description={description} 
          setDescription={setDescription} 
        />
        <ShowTask 
          tasklist={tasklist} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete} 
          handleComplete={handleComplete} 
        />
      </div>
    </div>
  );
}

export default App;
