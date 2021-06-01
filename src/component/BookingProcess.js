import { Button, Dropdown } from 'bootstrap'
import React from 'react'
import { DropdownButton, Table } from 'react-bootstrap'



export default class BookingProcess extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            bookedClass: [],
            batch1Morning: "",
            batch1Evening: ""

        }
    }


    handleSubmit(event) {
        // event.preventDefault();
        console.log(event.target.value)

    }


    submitClass = () => {


        this.setState({ bookedClass: [...this.state.bookedClass, this.state.batch1Evening, this.state.batch1Morning] },
            () => console.log(this.state.bookedClass))

    }
    render() {
        const data = { batch: "01-jun to 07 Jun" }
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
                            <td>{data.batch}</td>
                            <td>
                                <select onChange={(e) => this.setState({ batch1Morning: e.target.value })} className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option value="" selected >Select Slot</option>
                                    <option value={`${data.batch}_Morning_6:00 to 7:00`} >6:00 to 7:00</option>
                                    <option value={`${data.batch}_Morning_7:00 to 8:00`} >7:00 to 8:00</option>
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => this.setState({ batch1Evening: e.target.value })} className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected >Select Slot</option>
                                    <option value={`${data.batch}_Evening_5:00 to 6:00`} >5:00 to 6:00</option>
                                    <option value={`${data.batch}_Evening_6:00 to 7:00`}>6:00 to 7:00</option>
                                </select>
                            </td>
                            <td>
                                <button className='btn btn-sm btn-block btn-success'>Submit</button>
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

                <button onClick={this.submitClass}> Submit Selected batch</button>
            </div>
        )
    }
}
