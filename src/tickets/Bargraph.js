import React from 'react'
import {Chart} from 'react-google-charts'

class BarGraph extends React.Component{
    render(){
        let technical = 0, hr = 0, sales = 0
        return(
            <div>
            {this.props.tickets.forEach((ticket)=>{
                if(ticket.department === 'technical'){
                    technical++
                }else if(ticket.department === 'hr'){
                    hr++
                }else{
                    sales++
                }
            })}

            <Chart
            width={'500px'}
            height={'300px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
                ['Department','Number of tickets'],
                ['Techinical',technical],
                ['HR',hr],
                ['Sales',sales]
            ]}
            options={{
                // Material design options
                chart: {
                title: 'Company Performance',
                subtitle: 'Tickets raised by each department',
                },
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
            />
        </div>
    
        )
        
}
}

export default BarGraph