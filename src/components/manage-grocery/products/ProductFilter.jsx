import React, { useState } from 'react'
import Select from 'react-select'

function ProductFilter() {
  const ctg = [
    { value: 'Fruits & Vegetables', label: 'Fruits & Vegetables' },
    { value: 'Cakes & bakery', label: 'Cakes & bakery' },
    { value: 'Drink', label: 'Drink' },
]
const subctg = [
    { value: 'Apple', label: 'Apple' },
    { value: 'Mango', label: 'Mango' },
    { value: 'Cheeku', label: 'Cheeku' },
]
const [selectedSubCategory, setSelectedSubCategory] = useState(null)
    const placeholderSelectCategory = 'Select Category'
    const placeholderSelectSubCategory = 'Select Sub Category'
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: state.isFocused ? '1px solid #b5b5c3' : '1px solid #e4e6ef',
            borderRadius: '4px',
            boxShadow: 'none',
            '&:hover': {
                border: '1px solid #b5b5c3',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#ffffff' : '#ffffff',
            color: state.isFocused ? '#000000' : '#000000',
            '&:hover': {
                backgroundColor: '#f4fde5',
                color: '#9fc55e',
            },
        }),
    };
return (
    <>
     <div className="card">
                <div className='filter-header'>
                  <div className='filter-title'>
                    <h3>Filter</h3>
                  </div>
                </div>
                <div className="card-body">
                 <div className='row'>
                 <div className="mb-3 fv-row fv-plugins-icon-container">
                    <label className="required form-label">Select Category</label>
                    {/* <select className="form-select" data-control="select2" data-hide-search="true" data-placeholder="Select Restaurant Category">
                        <option></option>
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Refunded">Refunded</option>
                    </select> */}
                      <div className='slectbx-singel'>
                   <Select styles={customStyles} placeholder={placeholderSelectCategory} options={ctg} />
            </div>
                  </div>
                  <div className="mb-3 fv-row fv-plugins-icon-container">
                    <label className="required form-label">Select Sub Category</label>
                    {/* <select className="form-select" data-control="select2" data-hide-search="true" data-placeholder="Select Restaurant Category">
                        <option></option>
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Refunded">Refunded</option>
                    </select> */}
                      <div className='slectbx-singel'>
                   <Select styles={customStyles} placeholder={placeholderSelectSubCategory} options={subctg} />
            </div>
                  </div>
                 <div className="mb-3 fv-row fv-plugins-icon-container">
                    <label className="form-label">Form Date</label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="Form Date" />
                </div>
                <div className="mb-3 fv-row fv-plugins-icon-container">
                    <label className="form-label">Till Date</label>
                    <input type="text" name="Date" value="" className="form-control" placeholder="Till Date" />
                </div>
                <div className="d-flex justify-content-end mt-2">
                    <button type="button" className="btn btn-shadow btn-primary me-2">Filter</button>
                <button type="button" className="btn btn-shadow btn-secondary">Reset</button></div>
                 </div>
                </div>
              </div>
    </>
  )
}




export default ProductFilter