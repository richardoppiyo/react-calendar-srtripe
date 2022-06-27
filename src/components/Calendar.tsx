import React,  { useState, MouseEvent, useRef} from "react";
import  { Date } from '../../types';
import { Weekdays } from "../configs/Weekdays";
import { monthDates } from "../configs/MonthDays";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";


const Calendar : React.FC<{}> = ({}) => {
    const [selectedDate, setSelectedDate] = useState<string | null >();
    const inputRef = useRef(0);

    const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
        setSelectedDate(e.currentTarget.getAttribute('value'));
    }

      const scroll = (scrollOffset: number) => {
        // To handle scroll of the element
        inputRef.current += scrollOffset;
        console.log(inputRef);
      };


    const generateDates= (date: number) => {
        let selectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;
        for(let i=0 ; i< 7 ; i++) {
               console.log(<button className={`date ${date === 4 ? "today": ""} ${date === selectedDateNumber ? "selected" : ""}`} onClick={handleChange} value= {date}><p>{date}</p></button>);
                return <button className={`date ${date === 4 ? "today": ""} ${date === selectedDateNumber ? "selected" : ""}`} onClick={handleChange} value= {date}><p>{date}</p></button> 
        }
    }

    const generateWeeks = (dates: Array<Date>) => {
        let daysInWeek = 7;
        let tempArray = [];

        for  (let i= 0; i< dates.length; i+= daysInWeek) {
            tempArray.push (dates.slice(i, i+daysInWeek))
        }
        return tempArray;
    }

    return (
        <div className="calendar-container">
            <div className="datepicker-container">
                <BsChevronLeft  onClick={() => scroll(-7)}/>
                <span>Selected date: {selectedDate}</span>
                <BsChevronRight onClick={() => scroll(7)} />
            </div>

            <div className="weekdays-container">
                {Weekdays.map( day => (
                    <div className="week-day"> {day}</div>
                ))}
            </div>


            <div className="calendar">
                {generateWeeks(monthDates).map(week => (
                    <div className="week">
                        {week.map(day => (generateDates(day.day)))}
                    </div>
                ) )
                }
            </div>

        </div>
    )
}

export default Calendar;