import React, { Component } from 'react';
import './advice.css';

    class Advice extends Component {
    
        

    render() {
        return (
                <div>

                    <div className="advice-section">
                        <div className="best-gear" id="advice">
                            <h1 className="bg-title">Best Gear</h1>
                                <ul className=" best-gear-list">
                                    <li className=" best-gear-list">Backpack</li>
                                    <li>Day Pack</li>
                                    <li>Good Shoes</li>
                                    <li>Light Clothing</li>
                                    <li>Power Converter</li>
                                    <li>Clothing Containers</li>
                                    <li>Go Pro</li>
                                </ul>
                        </div>

                        <div className="best-apps"> 
                            <div className="best-apps2">
                                <h1 className="ba-title">Best Apps</h1>
                                    <ul className=" best-apps-list">
                                        <li className="best-apps-list"> Google Translate </li>
                                        <li> Air BnB</li>
                                        <li> XE Currency Converter</li>
                                        <li> Whats App</li>
                                        <li> Skyscanner </li>
                                        <li> Trip Advisor </li>
                                        <li> Couch Surfing </li>
                                        <li> Hostel World </li>
                                    </ul>
                            </div>     
                        </div>

                        <div className="best-websites">
                            <h1 className="bw-title">Best Websites</h1>
                                <ul className=" best-website-list">
                                    <li className=" best-website-list">https://travel.state.gov/content/travel/en.html</li>
                                    <li>https://www.ricksteves.com/</li>
                                    <li>http://operationgroundswell.com</li>
                                    <li>http://www.rome2rio.com/</li>
                                    <li>https://www.lonelyplanet.com</li>
                                    <li>https://www.travelblog.org/</li>
                                    <li>http://seat61.com/</li>
                                </ul>
                        </div>
                    </div>

                </div>
        );
    }
}

export default Advice
