import * as React from 'react';

const Task = ({ label, id, removeTask }) => (
  <div className="task">
    {label || "untitled"}
    <div
      className="button"
      onClick={() => removeTask(id)}>
      remove
    </div>
  </div>
);

export default Task;
