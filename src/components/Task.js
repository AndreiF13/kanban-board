import React from 'react';

const Task = ({ task: {title, description} }) =>
  <div className="task">
    <div className="task-header">
      <div>{title}</div>
    </div>
    <hr />
    <div className="task-body">{description}</div>
  </div>

export default Task