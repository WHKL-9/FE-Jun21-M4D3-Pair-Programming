import './App.css'
import MyBadge from './Components/MyBadge'
import WarningSign from "./Components/WarningSign"
import SingleBook from './Components/SingleBook'


function App() {
  return (
    <div>
      <WarningSign name="Sara"/>
      <MyBadge name="Weoy" color="primary"/>
      <SingleBook/>
    </div>
  )
}

export default App;
