import React, { Component } from 'react';
import "./App.css"

// Components

import NavHeader from './components/navHeader/navHeader.js';
import Home from './components/home/home.js';
import Plan from './components/plan/plan.js';
import Advice from './components/advice/Advice.js';

// AJAX Requests

import axios from "axios";


class App extends Component {
    constructor(props) {
        super(props)
            this.state ={
                userInput: "",
                planned:[],
                visited:[]
            }
                this.handleSubmit = this.handleSubmit.bind( this );
                this.handleGone = this.handleGone.bind ( this );
                this.handleDelete = this.handleDelete.bind ( this );
    }

    handleSubmit(){
        this.setState({
          userInput: "",
            planned: [...this.state.planned, this.state.userInput]
        })
    }

    handleGone(visited){
        var newPlanned = [...this.state.planned]
        newPlanned.splice(newPlanned.indexOf(visited), 1)

        var newVisited = [...this.state.visited, visited];
        
         axios.post("http://localhost:3006/api/visited", {visited: visited}).then((res) => {
             this.setState({
                 visited: res.data,
                 planned: newPlanned
             })
          })
    }

    handleInput(userInput){
        this.setState({
         userInput
        })
    }

    componentDidMount(){
        axios.get("http://localhost:3006/api/visited").then((res) => {
            this.setState({
                visited: res.data
            })
        })

        {this.state.visited};
    }

    handleDelete(id) {
       axios.delete("http://localhost:3006/api/visited/" + id).then((res) => {
           this.setState({
               visited: res.data
           })
       })
    }


  render() {
        return (

            <div>
                <NavHeader />
                <Home/>


<div className="plan-section">
    <div className="content" id="plan">
        <div className="input-divs"> <h4 className="where"> Where would you like to go?</h4>
        <img className="plane" src="http://www.pngmart.com/files/4/Travel-PNG-Transparent-Image.png"/>
            <input type="text" value={this.state.userInput} name="Future Destinations" id="future-d" onChange={(e) => {this.handleInput(e.target.value)}}/>
            <div className="btn-box">
            <div id="btn-submit" className="btn-submit" onClick={(e) => {this.handleSubmit()}}>Submit</div>
            <div id="btn-clear" className="btn-clear" onClick={(e) => {this.handleClear()}}>Clear</div>
            </div>
        </div>
        <div className="input-divs"> <h4 className="titles-input-box"> Where I plan on going!</h4>
            <div type="text" name="Places I want to go" className="want">
                <ol>
                    {
                        this.state.planned.map((elem) => {
                            return <li onClick={(e) => { this.handleGone(elem)}}>{elem}</li>
                        })
                    }
                    
                </ol>
            </div>
        </div>
    </div>

    <div className="content2">
        <div className="input-divs2">
            <img className="reine" src="http://media6.trover.com/T/55a980328e7cb214790000c9/fixedw_large_4x.jpg"/>
        </div>
        <div className="input-divs2"><h4 className="titles-input-box"> Where I have been.</h4>
            <div type="text" rows="10" name="Places I've Been" className="been">
                <ol>
                    {
                        this.state.visited.map((elem) =>{
                            return <li onClick={(e) => { this.handleDelete(elem.id)}}> {elem.visited}</li>
                        })
                    }
                </ol>
            </div>
        </div>
    </div>        
</div>



                <Advice />
            </div>
    );
  }
}

export default App;
