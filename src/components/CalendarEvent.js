import React, {useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const CalendarEvent =props =>{
    const sharedArguments = [null, this, props.eventData, props.day];

    const handleClick =(e) =>{
        e.props.onClick(...sharedArguments.slice(1));
        e.stopPropagation();
    }
      
        // Return a placeholder element if there is no event data 
        if(!props.eventData) {
           return <div  className="event-slot"></div>;
        }

        const showLabel = props.eventData.isFirstDay || (props.day.weekDay === 0 && props.wrapTitle);
        const title = showLabel ? props.eventData.title : '';

        const eventClasses = classnames({
            'event-slot': true,
            'event': true,
            'event-first-day': props.eventData.isFirstDay,
            'event-last-day': props.eventData.isLastDay,
            'event-has-label': showLabel,
        }, props.eventData.eventClasses);


        return (
            <div data={props.eventData.eventClasses} className={eventClasses}
                onClick={handleClick}
                // onMouseOut={props.onMouseOut.bind(...sharedArguments)}
                // onMouseOver={props.onMouseOver.bind(...sharedArguments)}
            >
                <div className="event-title">
                    {title}    
                </div>
            </div>
        );
    }

CalendarEvent.propTypes = {
    day: PropTypes.object.isRequired,
    eventData: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    onClick: PropTypes.func,
    // onMouseOut: PropTypes.func,
    // onMouseOver: PropTypes.func,
    wrapTitle: PropTypes.bool,
};

CalendarEvent.defaultProps = {
    onClick: () => {},
    // onMouseOut: () => {},
    // onMouseOver: () => {},
}

export default CalendarEvent;