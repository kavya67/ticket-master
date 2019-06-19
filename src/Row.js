import React from 'react'

class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.ticket.ticket_code}</td>
                <td>{this.props.ticket.name}</td>
                <td>{this.props.ticket.department}</td>
                <td>{this.props.ticket.priority}</td>
                <td>{this.props.ticket.message}</td>
                <td>{this.props.ticket.status}</td>
            </tr>
        )
    }
}

export default TableRow