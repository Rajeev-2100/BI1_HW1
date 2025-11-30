import AllBooksData from './components/AllBooks'
import BookTitle from './components/BookTitle'
import BooksByAuthor from './components/BooksByAuthor.jsx'
import AddNewBook from './components/addNewBook.jsx'

function App() {

  return (
    <>
    <AddNewBook/>
      <AllBooksData/>
      <BookTitle bookTitle="Shoe Dog"/>
      <BooksByAuthor authorName="Harper Lee"/>
    </>
  )
}

export default App
