import React, { useState } from 'react';
import axios from "axios"

const UploadBook = () => {
  const [formData, setFormData] = useState({
    authorName: '',
    imageURL: '',
    category: '',
    bookDescription: '',
    bookTitle: '',
    bookPDFURL: ''
  });

  const fields = [
    { label: 'Book Title', key: 'bookTitle', type: "text" },
    { label: 'Author Name', key: 'authorName', type: "text" },
    { label: 'Image URL', key: 'imageURL', type: "file" },
    { label: 'Category', key: 'category', type: "select" },
    { label: 'Book Description', key: 'bookDescription', type: "address" },
    { label: 'Book PDF URL', key: 'bookPDFURL', type: "text" }
  ];


  const categoryArray = ["Memoir", "Autobiography", "Memoir", "Autobiography", "Nonfiction", "Fiction", "Psychology"]


  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };


  const handleSubmit = (()=> {
    axios.post("http://localhost:5000/upload-book", formData).then(()=> {
      alert("Book Added Successfully")
      setFormData({
        authorName: '',
    imageURL: '',
    category: '',
    bookDescription: '',
    bookTitle: '',
    bookPDFURL: ''
      }) 
    }).catch((error)=>{
      alert("Error Occured while uploading book")
      console.log(error)
    })
  })

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload Book Here</h2>
      <div className="w-full md:w-[70vw]">
      <form className="bg-black/80 shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="lg:grid lg:grid-cols-2 lg:gap-8">
    {fields.slice(0, 4).map((field, index) => (
      <div key={index} className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor={field.key}>
          {field.label}
        </label>
        {field.type === "select" ? (
          <div className=''>
            <select
              name={field.key}
              id={field.key}
              value={formData[field.key]} 
              className="rounded outline-none w-full py-2 px-3"
              onChange={(e) => handleInputChange(field.key, e.target.value)}
            >
              {categoryArray.map((element, key) => (
                <option value={element} key={key}>{element}</option>
              ))}
            </select>
          </div>
        ) : field.type === "address" ? (
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            id={field.key}
            type={field.type}
            placeholder={field.label}
            value={formData[field.key]}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            rows={5}
          />
        ) : (
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            id={field.key}
            type={field.type}
            placeholder={field.label}
            value={formData[field.key]}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            required
          />
        )}
      </div>
    ))}
  </div>
  <div>
    {/* Render remaining fields without grid layout */}
    {fields.slice(4).map((field, index) => (
      <div key={index} className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor={field.key}>
          {field.label}
        </label>
        {field.type === "select" ? (
          <div className=''>
            <select
              name={field.key}
              id={field.key}
              value={formData[field.key]} 
              className="rounded outline-none w-full py-2 px-3"
              onChange={(e) => handleInputChange(field.key, e.target.value)}
            >
              {categoryArray.map((element, key) => (
                <option value={element} key={key}>{element}</option>
              ))}
            </select>
          </div>
        ) : field.type === "address" ? (
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            id={field.key}
            type={field.type}
            placeholder={field.label}
            value={formData[field.key]}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
            rows={5}
          />
        ) : (
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            id={field.key}
            type={field.type}
            placeholder={field.label}
            value={formData[field.key]}
            onChange={(e) => handleInputChange(field.key, e.target.value)}
          />
        )}
      </div>
    ))}
  </div>
</form>

        <div className='w-full flex justify-center'>
          <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all duration-300' onClick={handleSubmit}>Upload Book</button>
        </div>
      </div>
    </div>
  );
};

export default UploadBook;
