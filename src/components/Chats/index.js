import React from "react";
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
// import { useState, useCallback, useEffect, useMemo } from "react";
import {
  ThemeProvider,
  useTheme,
  createMuiTheme,
} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { usePrev } from '../../utils/hooks';
import { AUTHORS } from "../../utils/constants";
import MessagesList from "../MessagesList";
import Input from "../Input";
import ChatList from "../ChatList";
import AddChatDialog from "../AddChatDialog";
import { addChat } from "../../store/chats/actions";
import { addMessage, addMessageThunk } from "../../store/messages/actions";
import './styles.css';

export default function Chats() {
  const params = useParams();

  const chats = useSelector(state => state.chats.chatList);
  const messages = useSelector((state) => state.messages.messageList);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const addNewChat = useCallback((name) => {
    dispatch(addChat(name));
    setVisible(false);
  }, [dispatch]);

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);
  const handleOpen = useCallback(() => {
    setVisible(true);
  }, []);

  const selectedChat = useMemo(
    () => chats.find((chat) => chat.id === params.chatId),
    [params, chats]
  );

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessageThunk(selectedChat?.id, { text, author }));
    },
    [selectedChat, dispatch]
  );

  const messageList = useMemo(() => messages?.[selectedChat?.id] || [], [
    messages,
    selectedChat,
  ]);
  // const prevMessageList = usePrev(messageList);


  // useEffect(() => {
  //   let timeout;

  //   if (
  //     prevMessageList?.length < messageList?.length &&
  //     messageList[messageList.length - 1]?.author !== AUTHORS.BOT
  //   ) {
  //     timeout = setTimeout(() => sendMessage("Hello", AUTHORS.BOT), 1000);
  //   }

  //   return () => clearTimeout(timeout);
  // }, [messageList, sendMessage, prevMessageList]);

  if (!params.chatId) {
    return (
      <>
        <ChatList chats={chats} chatId={null} onAddChat={handleOpen} />
        <AddChatDialog
          visible={visible}
          onClose={handleClose}
          onSubmit={addNewChat}
        />
      </>
    );
  }

  if (!selectedChat) {
    return <Redirect to='/chats' />
  }

  return (
    <>
      <header>Header</header>
      <div className="wrapper">
        <div>
          <ChatList chats={chats} chatId={params.chatId} onAddChat={handleOpen} />
        </div>
        <div>
          <MessagesList messages={messageList} />
          <Input onAddMessage={sendMessage} />
        </div>
      </div>
      <AddChatDialog
        visible={visible}
        onClose={handleClose}
        onSubmit={addNewChat}
      />
    </>
  );
}
