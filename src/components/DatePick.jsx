import  { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function DatePick() {
    const [startDate, setStartDate] = useState(new Date());
    
  return (
       <DatePicker className="border border-[#FFFFFF] px-8 py-4 bg-[#292E36] max-w-48"  selected={startDate} onChange={(date) => setStartDate(date)} />
  )
}