import * as React from 'react';
import Task from './Task';

export default class Tasks extends React.Component {
  state = {
    data: [
      { id: '123', label: 'this is my first task' },
      { id: '124', label: 'this is my second task' },
      { id: '125', label: 'this is my third task' }
    ]
  };
  input: HTMLInputElement | null;

  uuid() {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  addTask = (e) => {
    if (e.which === 13 && this.input) {
      this.setState({
        data: this.state.data.concat({
          id: this.uuid(),
          label: this.input.value
        })
      }, () => {
        if (this.input) {
          this.input.value = '';
        }
      });
    }
  };

  removeTask = (id) => {
    this.setState({
      data: this.state.data.filter(task => task.id !== id)
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="tasks">
        <div className="header">
          <input
            type="text"
            placeholder="task description"
            ref={el => this.input = el}
            onKeyUp={this.addTask}
          />
        </div>

        <div className="grid">
          {data.map(task => <Task key={task.id} {...task} removeTask={this.removeTask} />)}
        </div>
      </div>
    );
  }
}
