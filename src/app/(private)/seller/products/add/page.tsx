import PageTitle from '@/components/ui/page-title'
import React from 'react'
import ProductsForm from '../_common/products-form'

function AddProductPage() {
  return (
    <div className='md:px-8' >
        <PageTitle title='Add Product'/>
        <ProductsForm formType='add'/>
    </div>
  )
}

export default AddProductPage