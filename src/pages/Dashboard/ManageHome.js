import React, { useState } from 'react';
import DatePicker from 'react-datepicker'

const ManageHome = () => {
    const[startDate,setStartDate]=useState( new Date())


    
    return (
        <DatePicker style={{ padding: "16px", background: "#216ba5", color: "#fff" }}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      
    />
    );
};

export default ManageHome;