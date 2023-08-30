import React from "react"
import ReactDOM from "react-dom/client"

import UserSearch from "./state/UserSearch"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <div>
    <UserSearch />
  </div>
)
