import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      {CloverView()}
    </div>
  )
}

export default App

function CloverView() {
  return <div className={"oneClover"}>
    <OneCardView words={["one", "two", "three", "four"]} rotation={0} />
    <OneCardView words={["one", "two", "three", "four"]} rotation={3} />
    <OneCardView words={["one", "two", "three", "four"]} rotation={2} />
    <OneCardView words={["one", "two", "three", "four"]} rotation={1} />
  </div>
}

type Rotation = 0 | 1 | 2 | 3;
interface OneCardViewProps {
  words: string[];
  rotation: Rotation;
}
function OneCardView(props: OneCardViewProps): JSX.Element {
  return (
    <div className="oneCard">
      {props.words.map(w => <div key={w}>{w}</div>)}
    </div>
  )
}