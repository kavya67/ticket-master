import React from 'react'
import axios from 'axios'



import TicketTable from './tickets/Table'
import TicketForm from  './tickets/Form'
import SearchForm from './tickets/Search'
import PieChart from  './tickets/PieChart'
import BarGraph from './tickets/Bargraph'

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            tickets:[],
            originalTickets:[]
        }

        this.handleTicketSubmission = this.handleTicketSubmission.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handlePriorityClick = this.handlePriorityClick.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidMount(){
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=a38936b112c525fb')
        .then(response =>{
            console.log(response.data)
            this.setState(()=>({
                tickets: response.data,
                originalTickets:response.data
            }))
        })
    }

    handleTicketSubmission(ticket){ //Form.js(child) //to update state in parent component
        //console.log('app',ticket)
        this.setState((prevState)=>({tickets:prevState.tickets.concat(ticket)}))
    }

    handleSearch(value){
        this.setState((prevState)=>({
            tickets:prevState.originalTickets.filter(ticket=>
                ticket.ticket_code.includes(value))
        }))
    }

    handlePriorityClick(value){
        if(value ==='all'){
            this.setState((prevState)=>({
                tickets:[].concat(prevState.originalTickets)
            }))
        }else{
                this.setState((prevState=>({
                    tickets:prevState.originalTickets.filter(ticket=>
                        ticket.priority === value)
                })))
        }
    }
    
    handleRemove(e){
         const removeTicket = e.target.value
         
        // this.setState((prevState)=>({
        //     tickets:prevState.tickets.filter(ticket=>ticket.ticket_code.includes(removeTicket)== false)
        // }))
        axios.delete(`http://cors-anywhere.herokuapp.com/dct-api-data.herokuapp.com/tickets/${removeTicket}?api_key=a38936b112c525fb`)
        .then(response =>{
            console.log(response.data)
           this.setState((prevState)=>({
            tickets:prevState.tickets.filter(ticket=>ticket.ticket_code.includes(removeTicket)== false)
        }))
        })
    }


    render(){
        return(
            <div className="container">
                <div className = "row">
                    <div className="col-md-7">
                    <h1>Ticket Master</h1>
                    <h2>Listing Tickets - {this.state.tickets.length}</h2>
                    <SearchForm handleSearch = {this.handleSearch} handlePriorityClick ={this.handlePriorityClick}/>
                    <TicketTable tickets = {this.state.tickets} handleRemove = {this.handleRemove}/>
                    </div>
                    <div className="col-md-5">
                    <TicketForm  handleTicketSubmission = {this.handleTicketSubmission} /> {/* passed as a prop */}
                    </div>
                    <PieChart tickets = {this.state.tickets}/> 
                    <BarGraph tickets = {this.state.tickets}/> 
                    
                
                    
                </div>
               
                
            </div>
        )
    }
}

export default App



