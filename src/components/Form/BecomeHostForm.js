import React from 'react';

const BecomeHostForm = ({handleSubmit}) => {

 
    return (
        <div>

            <form onSubmit={handleSubmit}  >

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                        
                    </label>
                    <input
                     type="text" 
                     name='location'
                     id="location"
                     placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">upload ID Document</span>
                        
                    </label>
                    <input
                     type="file" 
                     name='image'
                     id="image"
                     accept='image/*'
                     placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                   
                </div>
                <input type="checkbox" className="checkbox" />
                <span>Agree to Privacy</span>
                <button type='submit' className="btn">Submit Request</button>






            </form>





        </div>
    );
};

export default BecomeHostForm;