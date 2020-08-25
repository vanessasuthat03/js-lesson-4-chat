import React from "react"

const MessageList = ({ chatRoom }) => {
  return (
    <div>
      <h1>Headeing</h1>

      {chatRoom &&
        chatRoom.messages &&
        Object.entries(chatRoom.messages)
          .reverse()
          .map(item => {
            const key = item[0]
            const payload = item[1]
            return <li key={key}>{payload.message}</li>
          })}
    </div>
  )
}

export default MessageList
