import { Button, Dropdown } from 'bootstrap'
import React from 'react'
import { DropdownButton, Table } from 'react-bootstrap'



export default class BookingProcess extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: "time"
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('Your Session will be: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        console.log(this.state.value)
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Start - End Date</th>
                            <th>Morning Timing Slot</th>
                            <th>Evening Timing Slot</th>
                            <th>Submit</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>01-jun to 07 Jun</td>
                            <td>
                                <select value={this.state.value} onChange={(e) => this.handleChange(e)} className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option value="0" selected >Select Slot</option>
                                    <option value="1">6:00 to 7:00</option>
                                    <option value="2">7:00 to 8:00</option>
                                </select>
                            </td>
                            <td>
                                <select value={this.state.value} onChange={this.handleChange} className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected >Select Slot</option>
                                    <option value="1">5:00 to 6:00</option>
                                    <option value="2">6:00 to 7:00</option>
                                </select>
                            </td>
                            <td>
                                <button onClick={(e) => this.handleSubmit(e)} className='btn btn-sm btn-block btn-success'>Submit</button>
                            </td>
                        </tr>


                        <tr>
                            <td>2</td>
                            <td>08-jun to 14 Jun</td>
                            <td>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected >Select Slot</option>
                                    <option value="1">6:00 to 7:00</option>
                                    <option value="2">7:00 to 8:00</option>
                                </select>
                            </td>
                            <td>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected >Select Slot</option>
                                    <option value="1">5:00 to 6:00</option>
                                    <option value="2">6:00 to 7:00</option>
                                </select>
                            </td>
                            <td>
                                <button className='btn btn-sm btn-block btn-success'>Submit</button>
                            </td>
                        </tr>


                        <tr>
                            <td>3</td>
                            <td>15-jun to 21 Jun</td>
                            <td>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected >Select Slot</option>
                                    <option value="1">6:00 to 7:00</option>
                                    <option value="2">7:00 to 8:00</option>
                                </select>
                            </td>
                            <td>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected >Select Slot</option>
                                    <option value="1">5:00 to 6:00</option>
                                    <option value="2">6:00 to 7:00</option>
                                </select>
                            </td>
                            <td>
                                <button className='btn btn-sm btn-block btn-success'>Submit</button>
                            </td>
                        </tr>


                        <tr>
                            <td>4</td>
                            <td>22-jun to 28 Jun</td>
                            <td>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected >Select Slot</option>
                                    <option value="1">6:00 to 7:00</option>
                                    <option value="2">7:00 to 8:00</option>
                                </select>
                            </td>
                            <td>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected >Select Slot</option>
                                    <option value="1">5:00 to 6:00</option>
                                    <option value="2">6:00 to 7:00</option>
                                </select>
                            </td>
                            <td>
                                <button className='btn btn-sm btn-block btn-success'>Submit</button>
                            </td>
                        </tr>


                        <tr>
                            <td>5</td>
                            <td>29-jun to 05 Jul</td>
                            <td>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected >Select Slot</option>
                                    <option value="1">6:00 to 7:00</option>
                                    <option value="2">7:00 to 8:00</option>
                                </select>
                            </td>
                            <td>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected >Select Slot</option>
                                    <option value="1">5:00 to 6:00</option>
                                    <option value="2">6:00 to 7:00</option>
                                </select>
                            </td>
                            <td>
                                <button className='btn btn-sm btn-block btn-success'>Submit</button>
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        )
    }
}
