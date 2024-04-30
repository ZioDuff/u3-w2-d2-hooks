import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNavBar from "./Components/MyNavBar"
import MyFooter from "./Components/MyFooter"
import Welcome from "./Components/Welcome"
import BookList from "./Components/Booklist"

// import AllTheBooksFunction from "./Components/AllTheBooksFunction"
// import AllTheBooks from "./Components/AllTheBooks"
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavBar />
        <Welcome />

        <BookList />

        {/* <AllTheBooksFunction /> */}
        <MyFooter />
      </header>
    </div>
  )
}

export default App
