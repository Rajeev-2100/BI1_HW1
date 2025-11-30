import { useState } from "react"
import useFetch from "../useFetch"

const AllBooksData = () => {
    const [successMessage, setSuccessMessage] = useState('')

    const { data, loading } = useFetch('http://localhost:3001/books')
    console.log('data: ',data)
    if(loading) {
        <p>Loading...</p>
    }

    const handleDelete = async (bookId) => {
        try {
            const response = await fetch(`http://localhost:3001/books/${bookId}`, {
                method: 'DELETE',
            })

            console.log(response)
            if(!response.ok){
                throw new Error("Failed to delete book");
            }

            const data = await response.json()

            if(data){
                console.log('Book Data Deleted Successfully',data)
                setSuccessMessage('Book Data Deleted Successfully')
                window.location.reload()
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <h1>All Books</h1>
            <ul>
                {data?.data.map((book) => (
                    <li key={book._id}>{book.title} <button onClick={() => handleDelete(book._id)}>Delete</button></li>
                ))}
            </ul>
                <p>{successMessage}</p>
        </>
    )

}

export default AllBooksData