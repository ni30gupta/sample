import React, { Component } from 'react'
import './Booking2.css'
import { Container, Col, Row, Table, Button, Nav } from 'react-bootstrap'
import { schedule } from '../API/booking2Data'

const [getData] = schedule.filter((data) => data.profileId === "101")

export default class Booking2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sno: 1
        }
    }

    selected = (id) => {

        document.querySelector(`#\\31 02 > form > table > tbody > tr:nth-child(${id})`).forEach((row, td) => {
            console.log(row, td)
        })




    }

    // console.log( > td:nth-child(3) > p`).innerHTML);
    render() {
        return (
            <Container>
                <Row >
                    <Col lg={8} className="d-flex flex-row justify-content-between mb-3">
                        <Nav variant="pills" defaultActiveKey={`#${getData.batches[0].batchId}`}>
                            {
                                getData.batches.map((data) => {
                                    return (
                                        <Nav.Item>
                                            <Nav.Link onClick={() => this.setState({ sno: data.batchId - 1 })} href={`#${data.batchId}`}>  {data.dateRange}</Nav.Link>
                                        </Nav.Item>
                                    )
                                })
                            }
                        </Nav>
                    </Col>
                    <Col lg={4}></Col>
                </Row>
                <Row>
                    <Col id="102" lg={8}>
                        <form action="/action_page.php">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Select</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Days</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getData.batches[this.state.sno].time.map((time, i) => {
                                            return (
                                                <tr>
                                                    <td><input onChange={() => this.selected(i + 1)} type="radio" name="batch" /></td>
                                                    <td><p>{getData.batches[this.state.sno].dateRange}</p></td>
                                                    <td><p>{time}</p></td>
                                                    <td><p>{getData.batches[this.state.sno].days}</p></td>
                                                    <td><p> {`Rs.${getData.batches[this.state.sno].price}/-`} </p></td>
                                                </tr>
                                            )
                                        })
                                    }

                                    <Button className="btn btn-success my-3 "  >Book Class</Button>
                                </tbody>
                            </Table>
                        </form>
                    </Col>
                    <Col lg={4}>

                    </Col>
                </Row>
            </Container >
        )
    }
}
