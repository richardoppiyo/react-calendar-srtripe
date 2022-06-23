import React from "react";
import Calendar from "./Calendar";

const DatePicker: React.FC<{}> = ({}) => {
    return (
        <div className="date-picker-container">
            <div className="background-container">
                <Calendar />
            </div>
        </div>
    )
}
export default DatePicker;