import useFetch from "../useFetch.jsx";

const BookTitle = ({ bookTitle }) => {
  const { data, loading } = useFetch(`http://localhost:3001/books/title/${bookTitle}`);
    console.log(data);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {data && (
        <div>
          <h2>{data.data.title}</h2>
          <p><b>Author:</b> {data.data.author}</p>
          <p><b>Release Year:</b> {data.data.publishedYear}</p>
          <p><b>Genre: </b>{data.data.genre.join(', ')}</p>
        </div>
      )}
    </>
  );
};


export default BookTitle;
