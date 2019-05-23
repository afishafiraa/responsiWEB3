import React, { Component } from 'react';
import './style.css';


class Table extends Component {
    constructor(props){
        super(props);
        this.state= {
            items : []
        };
    }

componentDidMount(){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Yogyakarta,id&mode=json&appid=e1522e4dd8a16d7ada4bd39f22c57e4b&units=metric")
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.list.map(data => (
        {
            date : `${data.dt_txt}`,
            temp : `${data.main.temp}`,
            temp_min : `${data.main.temp_min}`,
            temp_max : `${data.main.temp_max}`,
            weather : `${data.weather[0].main}`
        }
    )))
    .then(items => this.setState({
        items,
        isLoaded : false
    }))
    .catch(error=>console.log('parsing failed', error)
    )
}

  render(){
    const {items}= this.state;
    return(
      <div>
          <div>
              <h2 className="ctr" >Prakiraan Cuaca Yogyakarta</h2>
              
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" >Date</th>
                        <th scope="col">Temp</th>
                        <th scope="col">Temp Min</th>
                        <th scope="col">Temp Max</th>
                        <th scope="col">Weather</th>
                    </tr>
                </thead>
                <tbody>
                {
                items.length > 0 ? items.map(item => {
                        const {date, temp, temp_min, temp_max, weather} = item;
                        return(
                            <tr>
                                <th>{date}</th>
                                <td>{temp}</td>
                                <td>{temp_min}</td>
                                <td>{temp_max}</td>
                                <td>{weather}</td>
                            </tr>
                        );
                    }) : null
                }
                </tbody>
            </table>
        </div>
         
      </div>
    );
  }
}

export default Table;