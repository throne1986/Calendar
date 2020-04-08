import React, {useState, useEffect} from 'react';
import {Calendar} from 'calendar-base';
import PropTypes from 'prop-types';
import CalendarEvent from './components/CalendarEvent';
import CalendarDay from './components/CalendarDay';
import CalendarTitle from './components/CalendarTitle';

import moment from 'moment';


const EventCalendar =props=> {

const [today, setToday] = useState(getToday);
const calendar = new Calendar({siblingMonths: true, });

useEffect(() => {
    setToday(getToday());
    },[])


const  getToday =()=>{
    console.log(this);
    var today = new Date();
    return {
        day: today.getDate(),
        month: today.getMonth(),
        year: today.getFullYear(),
    };
}
   const  getCalendarDays = () => {
        return calendar.getCalendar(props.year, props.month).map((day) => {
            day.eventSlots = Array(props.maxEventSlots).fill(false); 
            return day;
        });
    }

    const getEventMeta =(days, eventStart, eventEnd) =>{
    
        const eventStartInView = calendar.isDateSelected(eventStart);
        const eventEndInView = calendar.isDateSelected(eventEnd);
        const firstDayOfMonth = days[0];
        const lastDayOfMonth = days[days.length - 1];

        const eventMeta = {
            // Asserts Event is visible in this month view
            isVisibleInView: false,
            visibleEventLength: days.length,
            // Returns the index (interval from first visible day) of [...days] of event's first "visible" day
            firstVisibleDayIndex: eventStartInView ? Calendar.interval(firstDayOfMonth, eventStart) - 1 : 0,
        };

        // Asserts Event is visible in this month view
        if (eventStartInView || eventEndInView) {
             // Asserts event's first or last day is visible in this month view
            eventMeta.isVisibleInView = true;
        } else if (eventStart.month < props.month && eventEnd.month > props.month) {
            // Asserts at least part of month is
            eventMeta.isVisibleInView = true;
        }

        // Determine the visible length of the event during the month
        if (eventStartInView && eventEndInView) {
            eventMeta.visibleEventLength = Calendar.interval(eventStart, eventEnd);
        } else if (!eventStartInView && eventEndInView) {
            eventMeta.visibleEventLength = Calendar.interval(firstDayOfMonth, eventEnd);
        } else if (eventStartInView && !eventEndInView) {
            eventMeta.visibleEventLength = Calendar.interval(eventStart, lastDayOfMonth);
        }

        return eventMeta;
    }

   const getDaysWithEvents =() =>{
        // Get all the days in this months calendar view
        // Sibling Months included
        const days = getCalendarDays();

        // Set Range Limits on calendar
        calendar.setStartDate(days[0]);
        calendar.setEndDate(days[days.length - 1]);

        // Iterate over each of the supplied events
        props.events.forEach((eventItem) => {

            const eventStart = getCalendarDayObject(eventItem.start);
            const eventEnd = getCalendarDayObject(eventItem.end);
            const eventMeta = getEventMeta(days, eventStart, eventEnd);
         

            if (eventMeta.isVisibleInView) {
                const eventLength = eventMeta.visibleEventLength;

                //console.log("Days", days); 
                const eventSlotIndex= eventMeta.firstVisibleDayIndex < days.length ? eventMeta.firstVisibleDayIndex : 0;

                let dayIndex = 0;

                // For each day in the event
                while (dayIndex < eventLength) {
                    // Clone the event object so we acn add day specfic data
                    const eventData = Object.assign({}, eventItem);

                    if (dayIndex === 0) {
                         // Flag first day of event
                        eventData.isFirstDay = true;
                    }
                    
                    if (dayIndex === eventLength - 1) {
                        // Flag last day of event
                        eventData.isLastDay = true;
                    }
                    
                    if (!eventData.isFirstDay || !eventData.isLastDay) {
                        // Flag between day of event
                        eventData.isBetweenDay = true;
                    }

                    // Apply Event Data to the correct slot for that day
                    if (days[eventMeta.firstVisibleDayIndex + dayIndex]) {
                       if (days[eventMeta.firstVisibleDayIndex + dayIndex].eventSlots) {
                            days[eventMeta.firstVisibleDayIndex + dayIndex].eventSlots[eventSlotIndex] = eventData;
                            
                       }
                    }
                    

                    // Move to next day of event
                    dayIndex++;
                }
            }
        });

        return days;
    }

  const  getCalendarDayObject =(date) => {
        const dateArray = date.split('-');
        
        var weekDayName =  moment(dateArray).format('dddd');
        // console.log("weekdayname", weekDayName);
        return {
            year: dateArray[0],
            month: dateArray[1] - 1,
            day: dateArray[2],
            weekDayName:weekDayName
        };
    }

  const  getLastIndexOfEvent =(slots) => {

        const lastIndexOfEvent = slots.map((slot, index) => {
            return slot !== false ? index : false;
        }).filter((element) => {
            return element;
        }).pop();

        return lastIndexOfEvent < 3 || lastIndexOfEvent === undefined ? 2 : lastIndexOfEvent;
    }

  const  getSerializedDay = (day) => {
        return [day.weekDay, day.day, day.month, day.year].join('');
    }

 const   renderDaysOfTheWeek = () =>{
        return props.daysOfTheWeek.map((title, index) => {
            return (
                <CalendarTitle 
                    key={'title_'+ index}
                    title={title} 
                />
            )   
        });
    }

  const  renderEvents =(day)=> {
        
        // Trim excess slots
        const eventSlots = day.eventSlots.slice(0, getLastIndexOfEvent(day.eventSlots) + 1);
        
        return eventSlots.map((eventData, index) => {
            return (
                <CalendarEvent 
                    key={'event_'+index+getSerializedDay(day)}
                    day={day}
                    eventData={eventData}
                    onClick={props.onEventClick}
                    wrapTitle={props.wrapTitle}
                    />
            );
        });
    }

  const  renderCalendarDays = ()=>{
        return getDaysWithEvents().map((day, index) => {
            const isToday = Calendar.interval(day, today) === 1;
            console.log(isToday)
            const events = renderEvents(day);
            
            return (
                <CalendarDay 
                    key={'day_'+getSerializedDay(day)}
                    day={day} 
                    events={events}
                    isToday={isToday} 
                    onClick={props.onDayClick}
                    onMouseOut={props.onEventMouseOut}
                    onMouseOver={props.onEventMouseOver}
                    />
                );
        });
    }



        return (
            <div className="flexContainer">
                {renderDaysOfTheWeek()}
                {renderCalendarDays()}
            </div>
        );
}

EventCalendar.propTypes = {
    daysOfTheWeek: PropTypes.array,
    events: PropTypes.array,
    maxEventSlots: PropTypes.number,
    month: PropTypes.number,
    onEventClick: PropTypes.func,
    onEventMouseOut: PropTypes.func,
    onEventMouseOver: PropTypes.func,
    onDayClick: PropTypes.func,
    wrapTitle: PropTypes.bool,
    year: PropTypes.number,

};

EventCalendar.defaultProps = {
    daysOfTheWeek: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ],
    events: [],
    wrapTitle: true,
    maxEventSlots: 10,
};

export default EventCalendar;