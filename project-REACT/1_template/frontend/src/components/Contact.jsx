import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <>
        <section id="contact" className='form-section mt-2'>
            <div className='container form-container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h3 className='text-center mt-5'>Contact Us</h3>
                    </div>
                </div>
                <div className='row form-row'>
                    <div className='col-md-5 image-col'>
                        <div className='image-area'>
                            <img src="./images/form_image.png" className='img-fluid' alt="form" />
                        </div>
                    </div>
                    <div className='col-md-7 form-col mt-5'>
{/* -----form start here-----*/}
                        <form >
                            <div className='row mb-4'>

                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                    <label className="form-label" htmlFor="fullname">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="fullname"
                                            name="fullname"
                                            placeholder="Full Name..."
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                    <label className="form-label" htmlFor="state">State</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            name="state"
                                            
                                            placeholder="State..."
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='col-md-12'>
                                    <div className='mb-3'>
                                    <label className="form-label" htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            
                                            placeholder="Email..."
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                    <label className="form-label" htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            
                                            placeholder="City..."
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                    <label className="form-label" htmlFor="pincode">Pin Code</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="pincode"
                                            name="pincode"
                                            
                                            placeholder="Pin Code..."
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                    <label className="form-label" htmlFor="phonenumber">Phone Number</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="phonenumber"
                                            name="phonenumber"
                                            
                                            placeholder="Phone Number..."
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                    <label className="form-label" htmlFor="altphnumber">Alternate Phone Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="altphnumber"
                                            name="altphnumber"
                                            
                                            placeholder="Alternate Phone Number..."
                                            autoComplete='off'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='col-md-12 text-center'>
                                <button type="submit" className='btn btn-primary'>Submit</button>
                                </div>

                            </div>
                        </form>
{/* -----form end here-----*/}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact