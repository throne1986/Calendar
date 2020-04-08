import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// console.log("classes", classnames);
export default class CalendarDay extends React.Component {

    render () {

        let { day, isToday, events, onClick } = this.props;
        const dayClasses = classnames({
            'flexColumn': true,
            'day': true,
            'inactive': day.siblingMonth,
            'today': isToday,
        });


     //add daynames to caleday weekdayname
    //  console.log(eventData)

     let getWeekDay = day.weekDay;
     //console.log("weekday", getWeekDay);

     switch(getWeekDay) {
        case 0:
            getWeekDay ='SUN';
          break;
        case 1:
            getWeekDay ='MON';
          break;
        case 2:
            getWeekDay ='TUE';
          break;
        case 3:
            getWeekDay ='WED';
          break;
        case 4:
            getWeekDay ='THUS';
          break;
        case 5:
            getWeekDay ='FRI';
          break;
        case 6:
            getWeekDay ='SAT';
          break;
        default:
        
      }
      // add zero to all dates below 10
       if (day.day < 10) {
            day.day = "0" + day.day;
        };
        let bgStyle = {};

        if(typeof day.eventSlots !== 'undefined' && day.eventSlots.length > 0 ) {

          let getEventData = Object.values(day.eventSlots)[0].eventClasses;
    
          switch (getEventData) {
              case 'event1':
                 bgStyle.backgroundImage = "url('../images/eventbg1.png')";
                 // console.log(getEventData);
                  break;
          
              default:
                  break;
          }
        } 


        
        return (
            <div 
                onClick={onClick.bind(null, this, day)}
                className={dayClasses}>
                <div style={bgStyle} className="inner-grid">
                    <div className="date">
                        {day.day}
                    </div>
                    <div className="dayName">
                        {getWeekDay}
                    </div>
                    {events}
                </div>
            </div>
        );
    }
}

CalendarDay.propTypes = {
    day: PropTypes.object.isRequired,
    isToday: PropTypes.bool,
    events: PropTypes.array,
    onClick: PropTypes.func,
};

CalendarDay.defaultProps = {
    onClick: () => {},
}