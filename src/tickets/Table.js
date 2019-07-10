import React from 'react'
import TicketRow from './Row'


const TicketTable = (props)=>{

    
    
    return(
        <table className="table table table-striped">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th> Department </th>
                    <th>Priority</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.tickets.map(ticket=>{
                        return <TicketRow key = {ticket.ticket_code} ticket = {ticket} handleRemove = {props.handleRemove}/>
                    })
                }
            </tbody>
        </table>
    )
}

export default TicketTable