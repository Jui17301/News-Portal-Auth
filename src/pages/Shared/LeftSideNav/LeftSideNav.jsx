import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const LeftSideNav = () => {
  const [categories,setCategories] = useState([])

  useEffect(() => {
      fetch('../../../../public/data/categories.json')
      .then(res=>res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className='space-y-6'>
      <h2 className="text-2xl">All Categories : {categories.length}</h2>
      {
        categories.map((category) => <Link 
        className='block rounded-xl mx-4 text-xl font-semibold text-center py-2 text-gray-400 hover:bg-gray-300  hover:text-black'
        key={category.id}
        to={`/category/${category.id}`}
        >
{category.name}
        </Link>)
      }
    </div>
  )
}

export default LeftSideNav
