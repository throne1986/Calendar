import React, { Component } from 'react'
import EventCalendar from '../App';
import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Popover from 'react-bootstrap/PopOver';
import Overlay from 'react-bootstrap/Overlay';
import Modal from 'react-bootstrap/Modal';



const events =[
        {
            title: 'Womens History Month ',
            start: '2020-03-02',
            end: '2020-03-02',
            //description: '',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
            eventClasses: 'event1'

        },
        {
            title: 'New Years Day',
            start: '2020-01-01',
            end: '2020-01-01',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
            eventClasses:'event2',

        },
        {
            title: 'Grandmothers Day:',
            start: '2020-01-21',
            end: '2020-01-21',
            url: 'a71a4cabc0c8d03c1c903b63c226ef8661cf0726',
          eventClasses: 'event3'
        },
        {
            title: 'Orthodox Christmas:',
            start: '2020-01-07',
            end: '2020-01-07',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
            eventClasses: 'event4',

        },
        {
            title: 'Martin Luther King Jr. Day',
            start: '2020-01-20',
            end: '2020-01-20',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
           eventClasses: 'event5'

        },
        {
            title: 'Trzech Króli (Objawienie Pańskie)',
            start: '2020-01-06',
            end: '2020-01-06',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
            eventClasses: 'event1'

        },
        {
            title: 'Darwin Day',
            start: '2020-02-12',
            end: '2020-02-12',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses:'event2'

        },
        {
            title: 'Valentines Day',
            start: '2020-02-14',
            end: '2020-02-14',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event3'
        },
        {
            title: 'First Day of Black History Month',
            start: '2020-02-01',
            end: '2020-02-01',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event4'
        },

        {
            title: 'ST, Patricks Day',
            start: '2020-03-17',
            end: '2020-03-17',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
           eventClasses: 'event5'
        },
        {
            title: 'First Day of Spring ',
            start: '2020-03-20',
            end: '2020-03-20',
            url: 'bfa2bbb468f72b1d11d97a3bbf42a58a23abfa0f',
          eventClasses: 'event1'
        },
        {
            title: 'International Womens Day',
            start: '2020-03-08',
            end: '2020-03-08',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses:'event2'

        },
        {
            title: 'April Fools Day',
            start: '2020-04-01',
            end: '2020-04-01',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses:'event2'
        },
        {
            title: 'Autism Day',
            start: '2020-04-02',
            end: '2020-04-02',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event3'
        },
        {
            title: 'Good Friday:',
            start: '2020-04-12',
            end: '2020-04-12',
            url: 'ce42231cf7055b3ccad44f77cd21fe1ed7c2cfec',
          eventClasses: 'event4'
        },
        {
            title: 'Easter',
            start: '2020-04-13',
            end: '2020-04-13',
            url: 'fd9e504b3b1d036c3df5901e1206b30f3840a899',
          eventClasses: 'event5'
        },
        {
            title: 'International Workers Day',
            start: '2020-05-01',
            end: '2020-05-01',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event1'
        },
        {
            title: 'Poland Constitution Day',
            start: '2020-05-03',
            end:  '2020-05-03',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses:'event2'

        },
        {
            title: 'Star Wars Day',
            start: '2020-05-04',
            end: '2020-05-04',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
           eventClasses: 'event4'

        },
        {
            title: 'Poland Mothers day',
            start: '2020-05-26',
            end: '2020-05-26',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event5'

        },
        {
            title: 'Pentecost (Pentecost)',
            start: '2020-05-30',
            end: '2020-05-30',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event5'

        },
        {
        title: 'international mothers day ',
        start: '2020-05-10',
        end: '2020-05-10',
        url: '31a91df74e5d38deb7628c192eb55524c58540a6',
      eventClasses: 'event1'

        },
        {
        title: 'Poland Fathers Day',
        start: '2020-06-05',
        end: '2020-06-05',
        url: '31a91df74e5d38deb7628c192eb55524c58540a6',
      eventClasses:'event2'

        },
        {
        title: 'First day of the summer',
        start: '2020-06-20',
        end: '2020-06-20',
        url: '1b1a41a29d31da7e82a27340768f854141ca94b4',
      eventClasses:'event2'

        }, 
        {
            title: 'Boże Ciało',
            start: '2020-06-11',
            end: '2020-06-11',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event4'

        },
        {
            title: 'World Humanist Day',
            start: '2020-06-21',
            end: '2020-06-21',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event5'

        },
        {
            title: 'EID UL FITR',
            start: '2020-06-06',
            end:  '2020-06-06',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event5'

        },
        {
            title: 'Yulefest/Midwinter Christmas',
            start: '2020-07-06',
            end: '2020-07-06',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event1'

        },
        {
            title: 'Eid al-Adha:',
            start: '2020-08-11',
            end: '2020-08-11',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses:'event2'
        },
        {
            title: 'International Friendship Day',
            start: '2020-08-02',
            end: '2020-08-02',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event3'
        },
        {
            title: 'International Lefthanders Day',
            start: '2020-08-13',
            end: '2020-08-13',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event4'

        },
        {
            title: 'Back To School',
            start: '2020-09-01',
            end: '2020-09-01',
            url: '10c90eb32b83bb203d475582f81fb89c77f0acf6',
          eventClasses: 'event1'

        },
        {
            title: 'First day of fall',
            start: '2020-09-22',
            end: '2020-09-22',
            url: 'fb1dda4419e150438108050bc46e67d0f31a42a8',
          eventClasses: 'event1'

        },
        {
            title: 'International Talk Like a Pirate Day:',
            start: '2020-09-19',
            end: '2020-09-19',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses:'event2'

        },
        {
            title: 'International Day of Peace',
            start: '2020-09-21',
            end: '2020-09-21',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event3'

        },
        {
            title: 'Columbus Day',
            start: '2020-10-12',
            end: '2020-10-12',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event5'

        },
        {
            title: 'All Hallows Eve (Halloween)',
            start: '2020-10-31',
            end: '2020-10-31',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event1'

        },
        {
            title: 'All Saints Day:',
            start: '2020-11-01',
            end: '2020-11-01',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses:'event2'

        },
        {
            title: 'Poland Independence Day',
            start: '2020-11-11',
            end: '2020-11-11',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event3'

        },
        {
            title: 'Happy Turkey Day',
            start: '2020-11-25',
            end: '2020-11-25',
            url: '959e502b17d759a7a44cc311e8b4b0c1ceb07ebe',
          eventClasses: 'event4'

        },
        {
            title: 'Thanksgiving:',
            start: '2020-11-26',
            end: '2020-11-26',
            url: 'b7588913388de432b8c71f0ab702c833f8bc52d2',
          eventClasses: 'event5'

        },
        {
            title: 'International Day of Disabled Persons',
            start: '2020-12-03',
            end: '2020-12-03',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event1'

        },
        {
            title: 'Human Rights Day',
            start: '2020-12-10',
            end: '2020-12-10',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses:'event2'

        },
        {
            title: 'Christmas Eve:',
            start: '2020-12-24',
            end: '2020-12-24',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event3'

        },
        {
            title: 'Christmas Day',
            start: '2020-12-25',
            end: '2020-12-25',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event4'

        },
        {
            title: 'Boxing Day',
            start: '2020-12-26',
            end: '2020-12-26',
            url: 'dev91b558163211cf9d2e7d1efe6c3e32035973fdf9',
          eventClasses: 'event5'

        }
];

export class CalendarDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moment: moment(),
            showPopover: false,
            showModal: false,
            overlayTitle: null,
            overlayContent: null,
            popoverTarget: null,
        };

        this.handleNextMonth = this.handleNextMonth.bind(this);
        this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
        this.handleToday = this.handleToday.bind(this);
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleEventMouseOver = this.handleEventMouseOver.bind(this);
        this.handleEventMouseOut = this.handleEventMouseOut.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }


    handleNextMonth() {
        this.setState({
            moment: this.state.moment.add(1, 'M'),
        });
    }

    handlePreviousMonth() {
        this.setState({
            moment: this.state.moment.subtract(1, 'M'),
        });
    }

    handleToday() {
        this.setState({
            moment: moment(),
        });
    }

    handleEventMouseOver(target, eventData, day) {
      console.log("event data", target.props.eventData.url);
        this.setState({
          
        });
    }

    handleEventMouseOut(target, eventData, day) {
        this.setState({
            showPopover: false,
        });
    }

    handleEventClick(target, eventData, day) {
        this.setState({
            showPopover: false,
            showModal: true,
            overlayTitle: eventData.title,
            overlayContent: eventData.description,
        });
    }

    handleDayClick(target, day) {
        this.setState({
            showPopover: false,
            showModal: true,
            overlayTitle: this.getMomentFromDay(day).format('Do of MMMM YYYY'),
            overlayContent: 'User clicked day (but not event node).',
        });
    }

    getMomentFromDay(day) {
        return moment().set({
            'year': day.year,
            'month': (day.month + 0) % 12,
            'date': day.day,
    
        });
    }

    handleModalClose() {
        this.setState({
            showModal: false,
        })
    }

    getHumanDate() {
        return [moment.months('MM', this.state.moment.month()), this.state.moment.year(), ].join(' ');
    }
  
    render() {

        return (
            <div style={styles}>

                <Overlay
                    show={this.state.showPopover}
                    rootClose
                    onHide = {()=>this.setState({showPopover: false, })}
                    placement='top'
                    container={this}
                    target={this.state.popoverTarget}>
                    <Popover id='event'>{this.state.overlayTitle}</Popover>
                </Overlay>

                <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.overlayTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.overlayContent}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleModalClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

     
                    <Row className='topBar'>
                        <Col xs={6}>
                            <ButtonToolbar>
                                <Button onClick={this.handlePreviousMonth}>&lt;</Button>
                                <Button onClick={this.handleNextMonth}>&gt;</Button>
                                <Button onClick={this.handleToday}>Today</Button>
                            </ButtonToolbar>
                        </Col>
                        <Col xs={6}>
                            <div className='pull-right h2'>{this.getHumanDate()}</div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={12}>
                            <EventCalendar
                                month={this.state.moment.month()}
                                year={this.state.moment.year()}
                                events={events} 
                                onEventClick={this.handleEventClick}
                                onEventMouseOver={this.handleEventMouseOver}
                                onEventMouseOut={this.handleEventMouseOut}
                                onDayClick={this.handleDayClick}
                                maxEventSlots={0}
                            />
                        </Col>
                    </Row>
               
            </div>
        );
    }
}

export default CalendarDemo

    const styles = {
            position: 'relative',
        };