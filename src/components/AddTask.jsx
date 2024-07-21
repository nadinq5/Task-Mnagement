import React from 'react';

const AddTask = ({ handleSubmit, editid, task, setTask, description, setDescription }) => {
  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="task" 
          value={task} 
          placeholder="Add Task" 
          onChange={(e) => setTask(e.target.value)} 
        />
        <input 
          type="text" 
          name="description" 
          value={description} 
          placeholder="Description" 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <button type="submit">
          {editid ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};

export default AddTask;


//



/*export const AddTask = ({taskList, setTaskList}) => { 
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const date = new Date();
    const newTask = {
      id: date.getTime(), 
      name: e, 
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
  }
  
  setTaskList([...taskList, newTask]);
}
  
  
  return ( 
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength="25"/>
        <button type="submit">Add</button>
      </form>
    </section>
  )
}*/









/*import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;*/
