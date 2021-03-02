import {
  TextField,
  Fab,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useState, useCallback, useEffect, useMemo } from "react";
import {
  ThemeProvider,
  useTheme,
  createMuiTheme,
} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useParams, useRouteMatch } from "react-router-dom";

import MessagesList from "../MessagesList";
import Input from "../Input";
import { AUTHORS } from "../../utils/constants";
import ChatList from "../ChatList";
import { usePrev } from "../../utils/hooks";
import AddChatDialog from "../AddChatDialog";
import { useSelector, useDispatch } from "react-redux";
import { addChat } from "../../store/chats/actions";

export default function Chats() {
  const params = useParams();
  const match = useRouteMatch();

  const chats = useSelector(state => state.chats.chatList);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const addNewChat = useCallback((name) => {
    dispatch(addChat(name));
    setVisible(false);
  }, [dispatch]);

  // const [chats, setChats] = useState([
  //   {
  //     id: "id1",
  //     name: "Chat 1",
  //     messageList: ["id1"],
  //   },
  //   {
  //     id: "id2",
  //     name: "Chat 2",
  //     messageList: [{ author: AUTHORS.ME, text: "message 2" }],
  //   },
  //   {
  //     id: "id3",
  //     name: "Chat 3",
  //     messageList: [
  //       { author: AUTHORS.ME, text: "message 3" },
  //       { author: AUTHORS.BOT, text: "how you doin" },
  //     ],
  //   },
  // ]);

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);
  const handleOpen = useCallback(() => {
    console.log("-0-0-0-0-0--0");
    setVisible(true);
  }, []);

  const selectedChat = useMemo(
    () => chats.find((chat) => chat.id === params.chatId),
    [params, chats]
  );

  const selectedChatIndex = useMemo(
    () => chats.findIndex((chat) => chat.id === params.chatId),
    [params, chats]
  );

  const onAddChatPress = useCallback(() => {}, []);

  // const addMessage = useCallback(
  //   (text, author) => {
  //     const newChats = [...chats];
  //     newChats[selectedChatIndex] = {
  //       ...selectedChat,
  //       messageList: [...selectedChat.messageList, { text, author }],
  //     };

  //     setChats(newChats);
  //   },
  //   [chats, selectedChat, selectedChatIndex]
  // );

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
        <ChatList chats={chats} chatId={null} onAddChat={handleOpen} />
        <AddChatDialog
          onClose={handleClose}
          onSubmit={addNewChat}
          visible={visible}
        />
      </>
    );
  }

  return (
    <>
      <header>Header</header>
      <ChatList chats={chats} chatId={params.chatId} onAddChat={handleOpen} />
      <MessagesList messages={selectedChat?.messageList || []} />
      {/* <Input onAddMessage={addMessage} /> */}
      <AddChatDialog
        visible={visible}
        onClose={handleClose}
        onSubmit={addNewChat}
      />
    </>
  );
}
