import { useState } from "react";

const AddNewBook = () => {

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: "",
        language: "",
        publishedYear: "",
        rating: "",
        summary: "",
        country: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => ({
            ...prevState, [name]: name === "publishedYear" || name === "rating" ? parseInt(value) : value
        }))
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:3001/books', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if(!response.ok){
                throw ' Failed to Book Details'
            }

            const data = await response.json()

            if(data){
                console.log('Added Book data successfully', data)
            }

        } catch (error) {
            throw error
        }
    }


  return (
    <>
    <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title: </label>
        <br />
        <input type="text" name="title" value={formData.title} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Author: </label>
        <br />
        <input type="text" name="author" value={formData.author} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Genre: </label>
        <br />
        <input type="text" name="genre" value={formData.genre} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Language: </label>
        <br />
        <input type="text" name="language" value={formData.language} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Published Year: </label>
        <br />
        <input type="number" name="publishedYear" value={formData.publishedYear} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="">Rating: </label>
        <br />
        <input type="number" name="rating" value={formData.rating} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Summary: </label>
        <br />
        <input type="text" name="summary" value={formData.summary} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Country: </label>
        <br />
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
        <br />
        <br />
        <button type={handleSubmit}>Submit Button</button>
      </form>
    </>
  );
};

export default AddNewBook;
