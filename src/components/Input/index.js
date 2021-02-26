import { useState, useCallback, useRef, useEffect } from "react"
import { AUTHORS } from "../../utils/constants";
import { TextField } from '@material-ui/core';


export default function Input({ onAddMessage }) {
  const [value, setValue] = useState('');
  const textField = useRef(null);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onAddMessage(value, AUTHORS.ME);

      setValue("");
    },
    [onAddMessage, value]
  );

  useEffect(() => {
    if (textField.current) {
      textField.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField inputRef={textField} value={value} onChange={handleChange} />
      <input type="submit" />
    </form>
  )
}
