import React from 'react'
 
import TableRow from './Row'

const TicketTable = (props)=>{
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Priority</th>
                        <th>Message</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tickets.map(ticket=>{
                            return <TableRow id = {ticket.id} ticket={ticket}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TicketTable