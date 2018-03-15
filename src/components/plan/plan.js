import React, {Component} from 'react';
import './plan.css';

class Plan extends Component {

    
    render() {
        return(
            <div>
                <div className="plan-section">
                    <div className="content" id="plan">
                        <div className="input-divs"> 
                            <h4 className="where"> Where would you like to go?</h4>
                            <img className="plane" src="http://www.pngmart.com/files/4/Travel-PNG-Transparent-Image.png"/>
                            <input type="text" 
                                   value={this.state.userInput} 
                                   name="Future Destinations" 
                                   id="future-d" onChange={(e) => {this.handleInput(e.target.value)}}>
                            </input>
           
                            <div className="btn-box">
                                <div id="btn-submit" 
                                     className="btn-submit" 
                                     onClick={(e) => {this.handleSubmit()}}>Submit
                                </div>
                                <div id="btn-clear" 
                                     className="btn-clear" 
                                     onClick={(e) => {this.handleClear()}}>Clear
                                </div>
                            </div>
                        </div>

                        <div className="input-divs"> 
                            <h4 className="titles-input-box"> Where I plan on going!</h4>
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
                        <div className="input-divs2">
                            <h4 className="titles-input-box"> Where I have been.</h4>
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

            </div>  
        );
    }
}

export default Plan;