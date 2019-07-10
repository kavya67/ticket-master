import React from 'react'
import { Chart } from "react-google-charts"

class PieChart extends React.Component{
    
    render(){
        let high =0, low = 0, medium  = 0
        return (
            <div>
               
                {
                     this.props.tickets.forEach((ticket)=>{
                        if(ticket.priority === 'high'){
                           high++
                        }else if(ticket.priority === 'low'){
                           low++
                       }else{
                        medium++
                       }
                    })
                }

               <Chart
               width={'500px'}
               height={'300px'}
               chartType="PieChart"
               loader={<div>Ticket Priority %</div>}
               data={[
                 ['Task Priority', 'levels'],
                 ['High', high],
                 ['Medium', medium],
                 ['Low', low],
                 
               ]}
               options={{
                 title: 'Ticket Priority %',
               }}
               rootProps={{ 'data-testid': '2' }}
               />
                
            </div>
        )
    }
}

export default PieChart