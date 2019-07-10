import React from 'react'


class SearchForm extends React.Component{
    constructor(){
    super()
    this.state={
    search:''
    }
    this.handleSearchChange=this.handleSearchChange.bind(this)
    }
    
    handleSearchChange(e){
    const search=e.target.value
    this.setState(()=>({
    search
    }))
    this.props.handleSearch(search)
    console.log(search)
    
    }
    render(){
    return(
    <div>
    <input type="text" placeholder="search by code"
    onChange={this.handleSearchChange}/>
    
    <button onClick={()=>{
    this.props.handlePriorityClick('all')
    }}>All</button>
    
    <button onClick={()=>{
    this.props.handlePriorityClick('high')
    }}>High</button>
    <button onClick={()=>{
    this.props.handlePriorityClick('low')
    }}>Low</button>
    <button onClick={()=>{
    this.props.handlePriorityClick('medium')
    }}>Medium</button>
    </div>
    )
    }
    }
    export default SearchForm
    
    