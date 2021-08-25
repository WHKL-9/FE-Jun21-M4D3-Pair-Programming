import './App.css'
import MyBadge from './Components/MyBadge'
import WarningSign from "./Components/WarningSign"
import SingleBook from './Components/SingleBook'
import BookList from './Components/BookList'
import fantasybooks from './Components/Data/fantasy.json'

function App() {
  return (
    <div>
      <WarningSign name="Sara"/>
      <MyBadge name="Weoy" color="primary"/>
      <SingleBook book={fantasybooks[0]}/>
      <BookList/>
    </div>
  )
}

export default App;
