import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import {signOut} from "firebase/auth"
import { auth } from '../firebase'

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
