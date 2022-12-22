import { useMemo, useState } from 'react'
import './App.css'
import { faker } from '@faker-js/faker';


function App() {


  const [mainRot, setMainRot] = useState<Rotation>(0)
  const [seed, setSeed] = useState(0)

  function rotateMain() {
    setMainRot(prev => ((prev + 1) % 3) as Rotation);
  }

  function newClover() {
    setSeed(p => p + 1)
  }
  return (
    <div className="App">
      <div className="bigButtons">
        <button className="rotateMainButton" onClick={rotateMain}>Rotate Main</button>
        <button className="newCloverButton" onClick={newClover} disabled>New Clover</button>
      </div>
      <CloverView rotation={mainRot} seed={seed} />
    </div>
  )
}

export default App

function CloverView(props: { rotation: Rotation, seed: number }) {
  const words1 = useMemo(() => [0, 1, 2, 3].map(() => faker.hacker.noun()), [props.seed])
  const words2 = useMemo(() => [0, 1, 2, 3].map(() => faker.hacker.noun()), [props.seed])
  const words3 = useMemo(() => [0, 1, 2, 3].map(() => faker.hacker.noun()), [props.seed])
  const words4 = useMemo(() => [0, 1, 2, 3].map(() => faker.hacker.noun()), [props.seed])

  const [rot1, setRot1] = useState<Rotation>(0)
  const [rot2, setRot2] = useState<Rotation>(3)
  const [rot3, setRot3] = useState<Rotation>(2)
  const [rot4, setRot4] = useState<Rotation>(1)

  const [outer1, setOuter1] = useState<string>(() => faker.company.catchPhraseNoun());
  const [outer2, setOuter2] = useState<string>(() => faker.company.catchPhraseNoun());
  const [outer3, setOuter3] = useState<string>(() => faker.company.catchPhraseNoun());
  const [outer4, setOuter4] = useState<string>(() => faker.company.catchPhraseNoun())


  return <div className={"oneClover " + rotClass(props.rotation)}>
    <OneCardView words={words1} rotation={rot1} onClick={() => setRot1(p => ((p + 1) % 4) as Rotation)} />
    <OneCardView words={words2} rotation={rot2} onClick={() => setRot2(p => ((p + 1) % 4) as Rotation)} />
    <OneCardView words={words3} rotation={rot3} onClick={() => setRot3(p => ((p + 1) % 4) as Rotation)} />
    <OneCardView words={words4} rotation={rot4} onClick={() => setRot4(p => ((p + 1) % 4) as Rotation)} />

    <div className="outerWords">
      <div className="outerWord"><input value={outer1} onChange={e => setOuter1(e.target.value)} /></div>
      <div className="outerWord"><input value={outer2} onChange={e => setOuter2(e.target.value)} /></div>
      <div className="outerWord"><input value={outer3} onChange={e => setOuter3(e.target.value)} /></div>
      <div className="outerWord"><input value={outer4} onChange={e => setOuter4(e.target.value)} /></div>
    </div>
  </div>
}
type Rotation = 0 | 1 | 2 | 3;

function rotClass(rot: Rotation): string {
  switch (rot) {
    case 0: return "rot0"
    case 1: return "rot1"
    case 2: return "rot2"
    case 3: return "rot3"
  }
}
interface OneCardViewProps {
  words: string[];
  rotation: Rotation;
  onClick: () => void;
}
function OneCardView(props: OneCardViewProps): JSX.Element {
  return (
    <div
      className={"oneCard " + rotClass(props.rotation)}
      onClick={props.onClick}
    >
      {props.words.map(w => <div key={w}>{w}</div>)}
    </div>
  )
}