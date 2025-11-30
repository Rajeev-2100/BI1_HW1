import useFetch from "../useFetch"

const AllBooksData = () => {

    const { data, loading } = useFetch('http://localhost:3001/books')
    console.log('data: ',data)
    if(loading) {
        <p>Loading...</p>
    }

    return (
        <>
            <h1>All Books</h1>
            <ul>
                {data?.data.map((book) => (
                    <li key={book._id}>{book.title}</li>
                ))}
            </ul>
        </>
    )

}

export default AllBooksData