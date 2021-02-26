import { useCallback } from "react";

export default function MessagesList({ messages }) {
  const renderMessage = useCallback((message, i) => (
    <div key={i}>
      <span>{message.author}: </span>
      <span>{message.text}</span>
    </div>
  ), []);

  return messages.map(renderMessage);
}
