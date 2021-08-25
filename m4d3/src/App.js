import './App.css'
import MyBadge from './Components/MyBadge'
import WarningSign from "./Components/WarningSign"


function App() {
  return (
    <div>
      <WarningSign name="Sara"/>
      <MyBadge name="Weoy" color="primary"/>
    </div>
  )
}

export default App;
