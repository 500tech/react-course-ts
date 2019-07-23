import React, { useState, useRef, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";

interface IProps {
  onAddTodo: (text: string) => void;
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

const disabledStyle = css`
  border: none;
  box-shadow: none;
`;

const enabledStyle = css`
  background-color: pink;
`;

const Button = styled.button`
  margin: 0 10px;
  ${props => (props.disabled ? disabledStyle : enabledStyle)}
`;

const Input = styled.input`
  &:focus {
    outline-color: ${props => props.theme.colors.primary};
  }
`;

export const TodoAdder2: React.FC<IProps> = ({ onAddTodo }) => {
  const [draft, controlled, setDraft] = useFormState("");
  const autofocus = useAutofocus();

  const submit = useCallback(
    (e?: React.FormEvent) => {
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
      <Input
        placeholder="Thing to do..."
        type="text"
        {...autofocus}
        {...controlled}
      />
      <Button type="submit" disabled={!draft}>
        Add
      </Button>
    </form>
  );
};
