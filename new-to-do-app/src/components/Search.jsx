import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const [inputData, changeInputData] = useState(
        {

            "id": ""
            

        }
    )
const inputHandler = (event) => {
    changeInputData({ ...inputData, [event.target.name]: event.target.value })
}
const readValue = () => {
    console.log(inputData)
  
}

  return (
    <div>
         <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">id</label>
                            <input type="text" className="form-control" name='title' value={inputData.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-info">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search