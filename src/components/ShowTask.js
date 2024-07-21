import React from 'react';

const ShowTask = ({ tasklist, handleEdit, handleDelete, handleComplete }) => {
  return (
    <section className='showTask'>
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </span>
        <span className="clearAll" onClick={() => handleDelete(null)}>Clear All</span>
      </p>
      <ul>
        {tasklist.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <p>
              <span className="name">{task.name}</span>
              {task.description && <span className="description">{task.description}</span>}
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-check-circle" onClick={() => handleComplete(task.id)}></i>
            <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
            <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
