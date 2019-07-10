import React from 'react'

class TicketRow extends React.Component{

    
    
    render(){
        
        return(
            <tr>
                <td>{this.props.ticket.ticket_code}</td>
                <td>{this.props.ticket.name}</td>
                <td>{this.props.ticket.department}</td>
                <td>{this.props.ticket.priority}</td>
                <td>{this.props.ticket.message}</td>
                <td>{this.props.ticket.status}</td>
                <td><button onClick = {this.props.handleRemove} value = {this.props.ticket.ticket_code}> x </button></td>
            </tr>
        )
    }
}

export default TicketRow