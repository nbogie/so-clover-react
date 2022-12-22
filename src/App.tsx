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
  const [rot1, setRot1] = useState<Rotation>(0)
  const [rot2, setRot2] = useState<Rotation>(3)
  const [rot3, setRot3] = useState<Rotation>(2)
  const [rot4, setRot4] = useState<Rotation>(1)
  return <div className={"oneClover"}>
    <OneCardView words={["one", "two", "three", "four"]} rotation={rot1} onClick={() => setRot1(p => ((p + 1) % 4) as Rotation)} />
    <OneCardView words={["one", "two", "three", "four"]} rotation={rot2} onClick={() => setRot2(p => ((p + 1) % 4) as Rotation)} />
    <OneCardView words={["one", "two", "three", "four"]} rotation={rot3} onClick={() => setRot3(p => ((p + 1) % 4) as Rotation)} />
    <OneCardView words={["one", "two", "three", "four"]} rotation={rot4} onClick={() => setRot4(p => ((p + 1) % 4) as Rotation)} />
  </div>
}

type Rotation = 0 | 1 | 2 | 3;
interface OneCardViewProps {
  words: string[];
  rotation: Rotation;
  onClick: () => void;
}
function OneCardView(props: OneCardViewProps): JSX.Element {
  function rotClass(rot: Rotation): string {
    switch (rot) {
      case 0: return "rot0"
      case 1: return "rot1"
      case 2: return "rot2"
      case 3: return "rot3"
    }
  }
  return (
    <div
      className={"oneCard " + rotClass(props.rotation)}
      onClick={props.onClick}
    >
      {props.words.map(w => <div key={w}>{w}</div>)}
    </div>
  )
}