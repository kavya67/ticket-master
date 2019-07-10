import React from 'react'
import axios from 'axios'

class TicketForm extends React.Component{
    constructor(){
       super() 
        this.state = {
            name:'',
            department:'',
            departmentOptions:[{id:1,name:'technical'},
                              {id:2,name:'hr'},{id:3,name:'sales'}],
            priority:'',
            message:'',
            errors:{}
        }

        this.handleDepartmentChange = this.handleDepartmentChange.bind(this) //#2
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    //3 ways of writing event handlers in react


    //#1 Arrow functions
    handleNameChange = (e)=>{
        const name = e.target.value
        this.setState(()=>({name}))
    }


    //#2 Regular method defnition inside class 
    //this is undefined inside a event handler hence need bind the methid inside a constructor
    handleDepartmentChange(e){
        const department = e.target.value
        this.setState(()=>({
            department
        }))
    }

    //#3 bind when calling function - least popular method
    handlePriorityChange(e){
        const priority = e.target.value
        this.setState(()=>({priority}))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            name : this.state.name,
            department:this.state.department,
            priority:this.state.priority,
            message:this.state.message
        }
        console.log(formData)

        axios.post(`http://dct-api-data.herokuapp.com/tickets?api_key=a38936b112c525fb`,formData)
        .then(response=>{
            console.log(response)
           if(response.data.hasOwnProperty('errors')){
               //console.log('show form errors')
               //console.log(response.data.errors)
               this.setState(()=>({errors:response.data.errors}))
           }else {
            this.props.handleTicketSubmission(response.data)
            this.setState(()=>({
            name : '',
            department:'',
            priority:'',
            message:'',
            
            }))
           }
        })
    }

    handleReset(){
        this.setState(()=>({
            name : '',
            department:'',
            priority:'',
            message:'',
        }))
            

    }




    render(){
         console.log(this.state)
        return(
            
            <div>
            
                <br/>
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group"> 
                    <fieldset>
                        <legend>Add Ticket</legend>
                        <label>
                            Name :
                            <input type = 'text' className="form-control" value ={this.state.name} onChange = {this.handleNameChange} />

                            {this.state.errors.name && <span> {this.state.errors.name.join(',')} </span>}
                        </label><br/> <br/>

                        <label> {/*dynamic select tag*/}
                            Department :
                            <select className="form-control" onChange = {this.handleDepartmentChange} value = {this.state.department}>
                            <option>Select</option>
                                {
                                    this.state.departmentOptions.map(dept=>{
                                        return <option key={dept.id} value ={dept.name}>{dept.name.toUpperCase()}</option>
                                    })
                                }
                            </select>
                            {this.state.errors.department && <span> {this.state.errors.department.join(',')} </span>}
                        </label><br/><br/>
                        
                        <label>
                            Priority :
                            <select className="form-control" value={this.state.priority} onChange = {this.handlePriorityChange.bind(this)}> {/*#3*/}
                                <option value = ""> select</option>
                                <option value= 'high'>High</option>
                                <option value= 'medium'>Medium</option>
                                <option value='low'>Low</option>

                            </select>
                            {this.state.errors.priority && <span> {this.state.errors.priority.join(',')} </span>}
                        </label><br/><br/>
                        <label>
                            Message :
                            <textarea className="form-control" value = {this.state.message} onChange = {(e)=>{
                                const message = e.target.value //# 4th way of writing event handlers
                                this.setState(()=>({message}))
                            }}></textarea>
                            {this.state.errors.message && <span> {this.state.errors.message.join(',')} </span>}
                        </label><br/>
                        <div>
                        <button type = 'submit' class="btn btn-primary">submit </button>

                        <button onClick = {this.handleReset} class="btn btn-primary"> Reset </button>

                        </div>
                       

                    </fieldset>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default TicketForm