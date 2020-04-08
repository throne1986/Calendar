import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CalendarDay = props => {
  const sharedArguments = [null, this, props.eventData, props.day];

        let { day, isToday, events, onClick } = props;
        const dayClasses = classnames({
            'flexColumn': true,
            'day': true,
            'inactive': day.siblingMonth,
            'today': isToday,
        });

     //add daynames to caleday weekdayname eg sun, wed etc
     let getWeekDay = day.weekDay;
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

        // add background to event all events contain  eventClasses eg event1 , in total there just 5
        if(typeof day.eventSlots !== 'undefined' && day.eventSlots.length > 0 ) {

          let getEventData = Object.values(day.eventSlots)[0].eventClasses;
    
          switch (getEventData) {
            case 'event1':
                 bgStyle.backgroundImage = "url('../images/eventbg1.svg')";
        
            break;
            case 'event2':
                bgStyle.backgroundImage = "url('../images/eventbg2.svg')";
       
            break;
            case 'event3':
              bgStyle.backgroundImage = "url('../images/eventbg3.svg')";
     
            break;
            case 'event4':
              bgStyle.backgroundImage = "url('../images/eventbg4.svg')";
     
            break;
            case 'event5':
              bgStyle.backgroundImage = "url('../images/eventbg5.svg')";
     
            break;
              default:
                  break;
          }
        } 

        
        return (
            <div 
                onClick={onClick.bind(null, this, day)}
                className={dayClasses}>
                <div style={bgStyle}  className="inner-grid"
                                onMouseOut={props.onMouseOut.bind(...sharedArguments)}
                                onMouseOver={props.onMouseOver.bind(...sharedArguments)}
                >
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
CalendarDay.propTypes = {
    day: PropTypes.object.isRequired,
    isToday: PropTypes.bool,
    events: PropTypes.array,
    eventData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
  ]),
    onClick: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver:PropTypes.func

};

CalendarDay.defaultProps = {
    onClick: () => {},
    onMouseOut: () => {},
    onMouseOver: () => {},
}
export default CalendarDay