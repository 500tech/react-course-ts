import React, { useState, FormEvent } from "react";

interface IProps {
  onAddTodo: (text: string) => void;
}

interface IState {
  draft: string;
}

function useFormState<T>(initialState: string) {
  const [draft, setDraft] = useState(initialState);
  const setOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDraft(e.target.value);

  const controlled = { value: draft, onChange: setOnChange };
  return [draft, controlled, setDraft] as [
    string,
    typeof controlled,
    typeof setDraft
  ];
}

export const TodoAdder2: React.FC<IProps> = ({ onAddTodo }) => {
  const [draft, controlled, setDraft] = useFormState("");
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (draft) {
      onAddTodo(draft);
      setDraft("");
    }
  }

  return (
    <form onSubmit={submit}>
      <input type="text" {...controlled} />
      <button type="submit" disabled={!draft}>
        Add
      </button>
    </form>
  );
};

export class TodoAdder extends React.Component<IProps, IState> {
  state = {
    draft: ""
  };

  submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.state.draft) {
      this.props.onAddTodo(this.state.draft);
      this.setState({ draft: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          type="text"
          value={this.state.draft}
          onChange={e => this.setState({ draft: e.target.value })}
        />
        <button type="submit" disabled={!this.state.draft}>
          Add
        </button>
      </form>
    );
  }
}
