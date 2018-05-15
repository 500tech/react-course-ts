import * as React from 'react';
import withSpinner from './withSpinner';

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

export default withSpinner(Task);
