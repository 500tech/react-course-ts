import React, {
  useState,
  createRef,
  useRef,
  useEffect,
  useCallback
} from "react";

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

function useAutofocus() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current!.focus();
  }, []);
  return { ref: inputRef };
}

export const TodoAdder2: React.FC<IProps> = ({ onAddTodo }) => {
  const [draft, controlled, setDraft] = useFormState("");
  const autofocus = useAutofocus();

  const submit = useCallback(
    (e?: React.FormEvent) => {
      console.log("submit??");
      e && e.preventDefault();
      if (draft) {
        onAddTodo(draft);
        setDraft("");
      }
    },
    [draft, onAddTodo, setDraft]
  );

  useEffect(() => {
    const tid = setTimeout(submit, 1500);
    return () => clearTimeout(tid);
  }, [draft, submit]);

  return (
    <form onSubmit={submit}>
      <input type="text" {...autofocus} {...controlled} />
      <button type="submit" disabled={!draft}>
        Add
      </button>
    </form>
  );
};

export class TodoAdder extends React.Component<IProps, IState> {
  private tid?: number;

  state = {
    draft: ""
  };

  inputRef = createRef<HTMLInputElement>();

  componentDidMount() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
    this.startTimer();
  }

  clearTimer = () => {
    clearTimeout(this.tid);
  };

  componentWillUnmount() {
    this.clearTimer();
  }

  submit = (e?: React.FormEvent) => {
    console.log("submit??");
    e && e.preventDefault();
    if (this.state.draft) {
      this.props.onAddTodo(this.state.draft);
      this.setState({ draft: "" });
    }
  };

  startTimer = () => {
    this.clearTimer();
    this.tid = setTimeout(this.submit, 1500);
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ draft: e.target.value });
    this.startTimer();
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          ref={this.inputRef}
          type="text"
          value={this.state.draft}
          onChange={this.onChange}
        />
        <button type="submit" disabled={!this.state.draft}>
          Add
        </button>
      </form>
    );
  }
}
