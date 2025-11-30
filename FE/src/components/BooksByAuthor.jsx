import useFetch from "../useFetch";

const BooksByAuthor = ({ authorName }) => {
  const { data, loading } = useFetch(
    `http://localhost:3001/books/author/${authorName}`
  );

  console.log("Data: ", data);
  if (loading) <p>Loading...</p>;

  return (
    <>
      <h2>Books By Harpee Lee</h2>
      <ul>
        <li>{data?.data.title}</li>
      </ul>
    </>
  );
};

export default BooksByAuthor;
