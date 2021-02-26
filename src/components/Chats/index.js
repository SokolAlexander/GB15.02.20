import { TextField, Fab, Button } from "@material-ui/core";
import { useState, useCallback, useEffect, useMemo } from "react";
import {
  ThemeProvider,
  useTheme,
  createMuiTheme,
} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MessagesList from "../MessagesList";
import Input from "../Input";
import { AUTHORS } from "../../utils/constants";
import ChatList from "../ChatList";
import { usePrev } from "../../utils/hooks";
import { useParams, useRouteMatch } from "react-router-dom";

export default function Chats() {
  const params = useParams();
  const match = useRouteMatch();

  console.log(match);

  const [chats, setChats] = useState([
    {
      id: "id1",
      name: "Chat 1",
      messageList: ['id1'],
    },
    {
      id: "id2",
      name: "Chat 2",
      messageList: [{ author: AUTHORS.ME, text: "message 2" }],
    },
    {
      id: "id3",
      name: "Chat 3",
      messageList: [
        { author: AUTHORS.ME, text: "message 3" },
        { author: AUTHORS.BOT, text: "how you doin" },
      ],
    },
  ]);

  const messages = {
    id1: { author: AUTHORS.ME, text: "message 1" },
  };

  const selectedChat = useMemo(
    () => chats.find((chat) => chat.id === params.chatId),
    [params, chats]
  );

  const selectedChatIndex = useMemo(
    () => chats.findIndex((chat) => chat.id === params.chatId),
    [params, chats]
  );
  // const [messages, setMessages] = useState([
  //   { author: AUTHORS.ME, text: "message 1" },
  //   { author: AUTHORS.ME, text: "message 2" },
  //   { author: AUTHORS.ME, text: "message 3" },
  // ]);

  // const prevMessages = usePrev(messages);

  const addMessage = useCallback(
    (text, author) => {
      const newChats = [...chats];
      newChats[selectedChatIndex] = {
          ...selectedChat,
          messageList: [ ...selectedChat.messageList, { text, author } ],
      }

      setChats(newChats);
    },
    [chats, selectedChat, selectedChatIndex]
  );

  // useEffect(() => {
  //   let timeout;

  //   if (
  //     prevMessages?.length < messages.length &&
  //     messages[messages.length - 1]?.author !== AUTHORS.BOT
  //   ) {
  //     timeout = setTimeout(() => addMessage("Hello", AUTHORS.BOT), 1000);
  //   }

  //   return () => clearTimeout(timeout);
  // }, [messages, addMessage, prevMessages]);

  if (!params.chatId || !selectedChat) {
    return (
      <>
        <span>Please select a chat</span>
        <ChatList chats={chats} chatId={null} />
      </>
    );
  }

  return (
    <>
      <header>Header</header>
      <ChatList chats={chats} chatId={params.chatId} />
      <MessagesList messages={selectedChat?.messageList || []} />
      <Input onAddMessage={addMessage} />
    </>
  );
}
