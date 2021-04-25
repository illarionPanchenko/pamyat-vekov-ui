import React, { Component } from "react";
import { dataru } from "./provinces-data-ru";
import { dataen } from "./provinces-data-en";
import { dataua } from "./provinces-data-ua";
import '../Main/Main.css'
import './provinces.css'
import Map from './map.png'
import { connect } from 'react-redux'

class Provinces extends Component {
    state = {
        tableData: [],
        id: null,
        id2: null,
        id3: null,
        id4: null,
        dataArray: dataru,
        editId: {layer: null, id: null}
    };
    componentDidMount() {
        this.setState(() => {
            if(this.props.lang === 'RU'){
                return {dataArray: dataru}
            }else if(this.props.lang === 'EN'){
                return {dataArray: dataen}
            }else{
                return {dataArray: dataua}
            }
        })
    }
    componentDidUpdate(prevProps) {
        if(this.props.lang!==prevProps.lang)this.setState(() => {
            if(this.props.lang === 'RU'){
                return {dataArray: dataru}
            }else if(this.props.lang === 'EN'){
                return {dataArray: dataen}
            }else{
                return {dataArray: dataua}
            }
        })
    }
    onSave = () => {
        dataru = this.state.dataArray
    }

    render() {
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const data = this.state.dataArray.map((item, id) => {
            const onChange = (e) => {
                let newState = this.state
                newState.dataArray[id].name = e.currentTarget.value
                this.setState({newState})
                console.log(this.state.dataArray[id].name, 'asddssa')
            }
            const setEdit = (id) => {
                if (this.state.editId.id !== id || this.state.editId.layer !== 1) {
                    this.setState({editId: {layer: 1, id: id}})
                }else{
                    this.setState({editId: {layer: null, id: null}})
                    console.log(this.state, 'opo')
                }
            }
            return(
                <div key={id} className='provWidth'>
                <li key={id} className="list-group-item">
                <div key={id}>
                <div className="nameHolder general-second gub" key={id} onClick={() => {
                   if(this.state.id!==id) {this.setState(
                       {id: id, id2: null, id3: null, id4: null}
                       )}
                   else {
                       this.setState({ id: null, id2: null, id3: null, id4: null })
                   }
                   }
                    }>{item.name}</div>
                </div>
                </li>
                    <ul className='list-group' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {id===this.state.id && this.state.dataArray[this.state.id].data.map((item, id)=>{
                        return (
                            <div key={id} style={{width: '100%'}} onClick={() => {
                                if(this.state.id2!==id) {this.setState({id2: id, id3: null, id4: null})}
                            }
                            }>
                                <li className='list-group-item general-second gub' style={{background:'rgb(242,242,244)'}} key={id}>{item.name}</li>
                                <ul className='list-group' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    {id===this.state.id2
                                    && this.state.dataArray[this.state.id].data[this.state.id2].data
                                    && this.state.dataArray[this.state.id].data[this.state.id2].data.map((item, id)=>{
                                        return (
                                            <div key={id} style={{width: '100%'}} onClick={() => {
                                                if(this.state.id3!==id) {this.setState({id3: id, id4: null})}
                                               }
                                            }>
                                                <li className='list-group-item general-second gub' style={{background:'rgb(252, 245, 237)'}} key={id}>{item.name}</li>
                                                <ul className='list-group' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    {id===this.state.id3
                                                    && this.state.dataArray[this.state.id].data[this.state.id2].data[this.state.id3].data
                                                    && this.state.dataArray[this.state.id].data[this.state.id2].data[this.state.id3].data.map((item, id)=>{
                                                        return (
                                                            <div key={id} style={{width: '100%'}} onClick={() => {
                                                                if(this.state.id4!==id) {this.setState({ id4: id})}
                                                                else {
                                                                    this.setState({ id4: null })
                                                                }
                                                            }
                                                            }>
                                                                <li className='list-group-item general-second gub' style={{background:'rgb(242,242,244)'}} key={id}>{item.name}</li>
                                                                <ul className='list-group' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                                    {id===this.state.id4 &&
                                                                            <div key={id} style={{width: '100%'}}>
                                                                                <li className='list-group-item general-second gub' key={id}>
                                                                                    {this.state.dataArray[this.state.id].data[this.state.id2].data[this.state.id3].data[this.state.id4].data}
                                                                                </li>
                                                                            </div>
                                                                        }
                                                                </ul>
                                                            </div>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                    </ul>
                </div>
            )
        });
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        return(
            <div>
                <h1 className='provinces'>
                    {this.props.lang === 'RU' ? 'Губернии' : this.props.lang === 'EN' ? 'Governorates' : 'Губернії'}
                </h1>
                {/*<h3 className='provinces'>*/}
                {/*    {this.props.lang === 'RU' ? 'Границы губерний на 1900 г.' : this.props.lang === 'EN' ? 'Borders of the governorates in 1900' : 'Кордони губерній на 1900 р.'}*/}
                {/*</h3>*/}
                {/*<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>*/}
                {/*    <img style={{width: '40%'}} src={Map}/>*/}
                {/*</div>*/}
                <ul className='list-group' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {data}
                </ul>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        lang: state
    }
}

export default connect(mapStateToProps)(Provinces)