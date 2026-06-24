import React from 'react'
import {initialProducts} from '../data/products'

const CategoryFilter = () => {
  const categories = [...new Set(initialProducts.map(product => product.category))]

  return (
    <><div>
      category filter
    </div></>
    
  )
}

export default CategoryFilter
