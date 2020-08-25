import React from "react"
import { useRef } from "react"

const MessageForm = ({ handlePostMessage }) => {
  const messageInputField = useRef()

  function handleOnClick() {
    const message = messageInputField.current.value
    handlePostMessage(message)
  }

  return (
    <div>
      <h2>Message form</h2>
      <input ref={messageInputField} type="text" />
      <button onClick={handleOnClick}>Send Message</button>
    </div>
  )
}

export default MessageForm
