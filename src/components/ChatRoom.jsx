import React from "react"
import { useEffect, useState } from "react"
import MessageList from "./MessageList"
import MessageForm from "./MessageForm"

const ChatRoom = () => {
  const MESSAGE_LISST_URL =
    "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json"

  const CHAT_ROOM_URL =
    "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"

  let [chatRoom, setChatRoom] = useState({}) // vad får man tillbaka från api:et. kolla i root objektet om det [], {} eller string.

  function handleGetChatRoom() {
    const url = CHAT_ROOM_URL
    fetch(url)
      .then(res => res.json())
      .then(data => setChatRoom(data))
  }

  useEffect(() => {
    handleGetChatRoom()
  }, [])

  function handlePostMessage(message) {
    const url = MESSAGE_LISST_URL

    const data = {
      message: message
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        handleGetChatRoom()
      })
  }
  return (
    <div>
      <h1>{chatRoom.name}</h1>
      <ul>
        <MessageForm handlePostMessage={handlePostMessage} />
        <MessageList chatRoom={chatRoom} />
      </ul>
    </div>
  )
}

export default ChatRoom
