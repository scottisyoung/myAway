import React, { Component } from 'react';
import './navHeader.css';

    class NavHeader extends Component {
    
        

    render() {
        return (

<div>
        <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">myAway</a>
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbarHeaderCollapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
       
        <div className="collapse navbar-collapse navHeaderCollapse">
              <ul className="nav navbar-nav navbar-right">
                  <li className="active"><a href="#home">Home</a></li>
                  <li><a href="#plan">Plan</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"> Social Media <b className="caret"></b></a>
                      <ul className="dropdown-menu">
                        <li><a href="http://www.instagram.com"target="_blank">Instagram</a></li>
                        <li><a href="http://www.facebook.com"target="_blank">Facebook</a></li>
                        <li><a href="http://www.pintrest.com"target="_blank">Pintrest</a></li>
                      </ul>
                  </li>
              </ul>
        </div>
        </div>
    </div>
</div>

        );
    }
}

export default NavHeader;