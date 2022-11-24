import React from 'react';
import DatePicker from 'react-datepicker'
import { CalendarIcon } from '@heroicons/react/20/solid';

const AddHomeForm = ({handleSubmit,arrival,setArrival,departure,setDeparture}) => {
    return (
        <div className='h-[800px] flex items-center justify-center '>
            <div className='w-96 p-7'>
                <h2 className='text-xl  text-center ' >Add Home</h2>

                <form onSubmit={handleSubmit}  >


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">location</span>

                        </label>
                        <input type="text" 
                        name='location'
                        className="input input-bordered w-full " />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Title</span>

                        </label>
                        <input type="text" 
                         name='title'
                        className="input input-bordered w-full " />

                    </div>

                    <div className='flex justify-between'>
          <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
            <div>
              <p className='block text-sm text-gray-500'>Arrival</p>
              <DatePicker
                selected={arrival}
                onChange={(date) => setArrival(date)}

                className='w-2/3'
              />
            </div>

            <CalendarIcon className='h5 w-5' />
          </div>
          <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
            <div>
              <p className='block text-sm text-gray-500'>Departure</p>
              <DatePicker
                selected={departure}
                onChange={(date) => setDeparture(date)}

                className='w-2/3'
              />
            </div>

            <CalendarIcon className='h5 w-5' />
          </div>
        </div>
             




                    <div className='flex justify-between gap-2'>
                        <div className="form-control w-full mb-3 ">
                            <label className="label">
                                <span className="label-text">Price</span>

                            </label>
                            <input type="number" 
                             name='price'
                             className="input input-bordered w-full " />


                        </div>
                        <div className="form-control w-full mb-3 ">
                            <label className="label">
                                <span className="label-text">Total guest</span>

                            </label>
                            <input type="number"
                             name='totalguest'
                              className="input input-bordered w-full " />


                        </div>
                    </div>

                    <div className='flex justify-between gap-2'>
                        <div className="form-control w-full mb-3 ">
                            <label className="label">
                                <span className="label-text">Bedrooms</span>

                            </label>
                            <input type="number" 
                             name='bedrooms'
                             className="input input-bordered w-full " />


                        </div>
                        <div className="form-control w-full mb-3 ">
                            <label className="label">
                                <span className="label-text">Bathrooms</span>

                            </label>
                            <input type="number" 
                             name='bathrooms'
                             className="input input-bordered w-full " />


                        </div>
                    </div>
                    <div className="form-control mb-3 ">
                        <label className="label">
                            <span className="label-text">Description</span>
                           
                        </label>
                        <textarea 
                        name='description'
                        
                        className="textarea textarea-bordered h-24" ></textarea>
                       
                    </div>

                    <input 
                    type="file" 
                    name='image'
                    className="file-input w-full max-w-xs" />



                    <input type="submit" value='Save & continue ' className="btn btn-accent input-bordered w-full mt-4 " />




                </form>
            </div>
        </div>
    );
};

export default AddHomeForm;