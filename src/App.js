import { useState } from 'react';
import './App.css';
import swift from './swift.png';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

const buttons = [
  "fart",
  "eat",
  "poop",
  "cry",
]

const names = [
  ["Swift","Death"],
  ["Face","Masher"],
  ["Beef","Goulash"]
]

const buttonObjects = buttons.map((button, i) => ({name:button, id:i}))
const nameObjects = names.map((name, i) => ({forename:name[0], surname:name[1], id:i}))

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

function TestTable() {
  return (
    <div>
      <style>{
        "th{border:1px dotted black;}"
      }</style>
      <table>
        <thead>
          <tr>
            <th onClick={() => console.log("Hi")}>Forename</th>
            <th>Surname</th>
          </tr>
        </thead>
        <tbody>
          {nameObjects.map((user, i) => {
            return <tr key={user.id}><td>{user.forename}</td><td>{user.surname}</td></tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [action, setAction] = useState(buttons[Math.floor(Math.random() * buttons.length)] + "ing");
  
  return (
    <>
      <h1>Swift is currently {action}.</h1>
      <BrowserView>
        <img src={swift} alt="The almighty Swift Death"/>
        <section>
          {buttonObjects.map((buttonObject) => {
            return <button key={buttonObject.id} onClick={() => setAction(buttonObject.name + "ing")}>{toTitleCase(buttonObject.name)}</button>
          })}
        </section> 
      </BrowserView>
      <MobileView>
        <img src={swift} width={window.innerWidth} alt="The almighty Swift Death"/>
        <section>
          {buttonObjects.map((buttonObject) => {
            return <button key={buttonObject.id} onClick={() => setAction(buttonObject.name + "ing")}>{toTitleCase(buttonObject.name)}</button>
          })}
        </section>     
      </MobileView>
        <>
          <TestTable />
        </>
    </>
  );
}

export default App;
