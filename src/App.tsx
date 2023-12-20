import './App.scss'
import { observer } from "mobx-react-lite";
import React from "react";
import { AppState } from "./AppState";


interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState: AppState }) => {

  return (
    <div className="content">
        <ul className='navigation'>
        {AppState.navigationItems.map(item => {
          return <li onClick={() => { AppState.handleScrollTo(item.hrefName) }} className='navigation__item'><a className='navigation__link' href={item.hrefName}>{item.linkName}</a></li>
        })}
        </ul>
        <div ref='work'>
          Testing work
        </div>
        <div ref='about'></div>
    </div>
  )
})

