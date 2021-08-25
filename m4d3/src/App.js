import './App.css'
import MyBadge from './Components/MyBadge'
import WarningSign from "./Components/WarningSign"
import SingleBook from './Components/SingleBook'
import BookList from './Components/BookList'


function App() {
  return (
    <div>
      <WarningSign name="Sara"/>
      <MyBadge name="Weoy" color="primary"/>
      <SingleBook/>
      <BookList/>
    </div>
  )
}

export default App;
