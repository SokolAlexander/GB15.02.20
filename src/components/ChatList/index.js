import { Link } from "react-router-dom";

export default function ChatList({ chats, chatId, onAddChat }) {
  console.log(chatId);
  return (
    <>
      {chats.map((chat, i) => (
        <div key={i}>
          <Link to={`/chats/${chat.id}`}>
            <b style={{ color: chat.id === chatId ? "#000000" : "grey" }}>
              {chat.name}
            </b>
          </Link>
        </div>
      ))}
      <div onClick={onAddChat} style={{cursor: 'pointer'}}>Add Chat</div>
    </>
  );
}
