import React, { Component } from "react";
import { data } from "./provinces-data";
import '../Main/Main.css'

class Provinces extends Component {
    state = {
        tableData: [],
        table: '',
        id: null,
        dataArray: data
    };
    render() {
        const data = this.state.dataArray.map((item, id) => {
            return(
                <div key={id} style={{width: '60%'}}>
                <li key={id} className="list-group-item">
                <div key={id}>
                <div className="nameHolder general-second" key={id} onClick={() => {
                   if(this.state.id!==id) {this.setState({table: item.data, id: id})}
                   else {
                       this.setState({ id: null})
                   }
                   }
                    }>{item.name}</div>
                </div>
                </li>
                    <ul className='list-group' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {id===this.state.id && this.state.dataArray[this.state.id].data.map((item, id)=>{
                        return (
                            <div key={id} style={{width: '100%'}}>
                                <li className='list-group-item general-second' style={{background:'rgb(242,242,244)'}} key={id}>{item}</li>
                            </div>
                        )
                    })}
                    </ul>
                </div>
            )
        });
        return(
            <div>
                <h1 style={{fontFamily: 'Lobster'}}>Губернии</h1>
                <ul className='list-group' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {data}
                </ul>
            </div>
        )
    }
}

export default Provinces