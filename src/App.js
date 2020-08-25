import React from "react"
import "./App.css"
import ChatRoom from "./components/ChatRoom"

function App() {
  return (
    <div className="App">
      <ChatRoom />
    </div>
  )
}

export default App

// Object.entries =  response från firebase(som object),
// får tillbaka som array= tar alla första key och lägger det som första index i en array

// payload (kan döpas till vad som helst) = data som skickas in till payload
