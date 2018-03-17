import React, {Component} from 'react';
import "./home.css";


// AJAX REQUESTS 

import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
            this.state ={
                userInput: "",
                planned:[],
                visited:[],

            }
                this.handleSubmit = this.handleSubmit.bind( this );
                this.handleGone = this.handleGone.bind ( this );
                this.handleDelete = this.handleDelete.bind ( this );
    }

    handleInput(userInput){
        this.setState({
         userInput
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            userInput: '',
            planned: [...this.state.planned, this.state.userInput],
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

    render(){
        return(
            <div>

                {/* HOME SECTION */}

                <header id="home">
                    <h3 className="animated fadeInDown">my<span>A</span>way</h3>
                        <h4>It is Your Future<span>...</span> Your Escape<span>...</span> Your Time <span className="animated flash">Away</span></h4> 
                </header>


                {/* PLAN SECTION */}

                <div className="plan-section">
                    <div className="content1" id="plan">
                        <div className="input-div1"> 
                            <div className="titleWhere"> Where would you like to go?</div>
                            <form  onSubmit={e => {this.handleSubmit(e, this.state.userInput); this.setState({userInput: ''})}}>
                            <input className="input"
                                   placeholder="Where to?"
                                   type="text" 
                                   value={this.state.userInput} 
                                   name="Future Destinations" 
                                   onChange={(e) => {this.handleInput(e.target.value)}}>
                            </input>
                            </form>
                            <div className="btnParent">
                                <div className="btn-submit" 
                                     onClick={(e) => {this.handleSubmit(e, this.state.userInput)}}>Add to Plan
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content2">
                        <div className="input-div2"> <div className="titles">Planned Vacations</div>
                            <div className="want">
                                <div>
                                    {
                                        this.state.planned.map((elem) => {
                                            return  <div className="elemParent">
                                                        <div className="elem">{elem}</div>
                                                        <div className="newTrip" onClick={(e) => { this.handleGone(elem)}}>+</div>
                                                    </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
        

                        <div className="input-div2">
                            <div className="titles">Places Visited</div>
                            <div className="want">
                                <div>
                                    {
                                        this.state.visited.map((elem) =>{
                                            return  <div className="elemParent">
                                                        <div className="elem">{elem.visited}</div>
                                                        <div className="clearTrip" onClick={(e) => { this.handleDelete(elem.id)}}>X</div>
                                                    </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>

            </div>
        )
    }
}

export default Home;