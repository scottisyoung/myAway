import React, {Component} from 'react';
import "./home.css";

class Home extends Component {
    render(){
        return(
            <div>
                <header id="home">
                    <h3 className="animated fadeInDown">my<span>A</span>way</h3>
                        <h4>It is Your Future<span>...</span> Your Escape<span>...</span> Your Time <span className="animated flash">Away</span></h4> 
                </header>
            </div>
        )
    }
}

export default Home;