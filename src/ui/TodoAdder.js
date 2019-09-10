import React, { useState, useRef, useEffect, useCallback } from 'react';
import { NOOP } from 'utils';

export function TodoAdder({ onAddTodo = NOOP, autoSubmit }) {
  const [text, setText] = useState('');
  const inputRef = useRef();
  const submit = useCallback(
    function submit(e) {
      console.log('submitting');
      if (e) {
        e.preventDefault();
      }
      if (text) {
        onAddTodo(text);
        setText('');
      }
    },
    [text, onAddTodo]
  );
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (autoSubmit) {
      const tid = setTimeout(submit, 3000);
      return () => clearTimeout(tid);
    }
  }, [submit, autoSubmit]);

  return (
    <form onSubmit={submit}>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button disabled={!text}>Add</button>
    </form>
  );
}

export class LegacyTodoAdder extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    this._startAutoSubmitTimer();
  }

  componentWillUnmount() {
    this._clearAutoSubmitTimer();
  }

  _startAutoSubmitTimer() {
    this._clearAutoSubmitTimer();
    this.tid = setTimeout(this.submit.bind(this), 3000);
  }

  _clearAutoSubmitTimer() {
    if (this.tid !== undefined) {
      clearTimeout(this.tid);
    }
  }

  setText(text) {
    this._startAutoSubmitTimer();
    this.setState({
      text,
    });
  }

  submit(e) {
    if (e) {
      e.preventDefault();
    }
    if (this.state.text) {
      this.props.onAddTodo(this.state.text);
      this.setText('');
    }
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input
          ref={this.inputRef}
          type="text"
          value={text}
          onChange={e => this.setText(e.target.value)}
        />
        <button disabled={!text}>Add</button>
      </form>
    );
  }
}
