import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App"
import GuestList from "./state/GuestList"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <div>
    <GuestList />
  </div>
)
