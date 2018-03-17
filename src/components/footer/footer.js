import React, { Component } from 'react';
import './footer.css';

    class Footer extends Component {
    
        

    render() {
        return (
                <div>
                    <div className="footerParent">
                        <div className="footerLogo">my<span>A</span>way</div>
                        <div className="dropdown2">
                            <div className="btn">Best Travel Websites</div>
                                <div className="dropdown2-contents">
                                    <a href="https://www.ricksteves.com" target="_blank">Rick Steves</a>
                                    <a href="http://seat61.com" target="_blank">Seat 61</a>
                                    <a href="https://www.lonelyplanet.com" target="_blank">Lonely Planet</a>
                                    <a href="https://www.travelblog.org" target="_blank">Travel Blog</a>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Footer;