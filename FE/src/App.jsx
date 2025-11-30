import AllBooksData from './components/AllBooks'
import BookTitle from './components/BookTitle'
import BooksByAuthor from './components/BooksByAuthor.jsx'

function App() {

  return (
    <>
      <AllBooksData/>
      <BookTitle bookTitle="Shoe Dog"/>
      <BooksByAuthor authorName="Harper Lee"/>
    </>
  )
}

export default App
