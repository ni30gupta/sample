import { Dropdown } from 'bootstrap'
import React from 'react'
import { Col, Container, Button, DropdownButton, Row, Table } from 'react-bootstrap'

import { tuterSchedule, timing } from '../API/tutorschedule'
import './BookingProcess.css'


export default class BookingProcess extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            batchId: null,
            dateRange: null,
            morningTimeRange: null,
            eveningTimeRange: null

        }
    }

    classesBooked = {}

    setClasses = () => {
        this.classesBooked = { ...this.state }
        console.log(this.classesBooked)

    }




    render() {
        return (
            <Container>
                <Row className="d-flex justify-between">
                    <Col >
                        <select onChange={(e) => this.setState({ dateRange: e.target.value })} >
                            <option value="none" selected>Batch Date</option>
                            {
                                tuterSchedule.map((data) => {
                                    return (
                                        <option value={data.batchDate} > {data.batchDate}</option>
                                    )
                                })
                            }
                        </select>
                    </Col>
                    <Col>
                        <div className="timing-chart">
                            <h2>Morning</h2>
                            {
                                timing.morningTime.map((time) => {
                                    return (
                                        <div>
                                            <Button onClick={(e) => this.setState({ morningTimeRange: e.target.innerHTML })} className="m-2 submit-btn" variant="outline-dark">{time}</Button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="timing-chart">
                            <h2>Evening </h2>
                            {
                                timing.eveningTime.map((time) => {
                                    return (
                                        <div>
                                            <Button onClick={(e) => this.setState({ eveningTimeRange: e.target.innerHTML })} className="m-2 submit-btn" variant="outline-dark">{time}</Button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>

                </Row>
                <div className="d-flex align-items-center justify-center">
                    <Button onClick={this.setClasses} >Confirm Your Slot</Button>

                </div>
            </Container>
        )
    }
}
