import { observer } from "mobx-react-lite";
import React from "react";
import { AppState } from "./AppState";

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState: AppState }) => {

  return (
    <div>
      {AppState.content}
    </div>
  )
})

