import * as React from 'react';
import Timer = NodeJS.Timer;

interface ComponentState {
  count: number
}

class Timers extends React.Component<{}, ComponentState> {
  intervalId: Timer;

  state = {
    count: 0
  };

  start = () => {
    this.intervalId = setInterval(() => {
      this.setState((state) => ({
        count: state.count + 1
      }));
    }, 1000);
  };

  stop = () => {
    clearInterval(this.intervalId);
  };

  componentWillUnmount() {
    this.stop();
  }

  render() {
    return (
        <div>
          Counter: <span className="count">{this.state.count}</span>
          <button className="start" onClick={ this.start }>Start</button>
          <button className="stop" onClick={ this.stop }>Stop</button>
        </div>
    )
  }
}

export default Timers;
