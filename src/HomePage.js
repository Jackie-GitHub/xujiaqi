import React from 'react';
import {NavLink} from 'react-router-dom';

import boot from '../src/Assets/global-styles/bootstrap.module.css';
import classes from './HomePage.module.scss';

const HomePage=() =>{
  return (
    <div className={[boot['container-fluid'],classes.container].join(" ")}>
    <div className={[boot.row,classes.content].join(" ")}>
      <div className={[boot['col-lg-4'],boot['col-md-12'],classes.textSide].join(" ")}>
        <h1>Jiaqi Xu</h1>
        <p className={boot.lead}>Front-end developer</p>
        <p>I'm naturally inquisitive and dedicated to my work. This page is showing two of my recent works. Please feel free to contact me anytime. I was an architect before moving into development.</p>
        <NavLink to="./resume">
          <button className={[boot.btn, boot['btn-outline-secondary'],classes.resumebutton].join(" ")}>Resume</button>
        </NavLink>
      </div>      
      <div className={[boot['col-lg-8'],boot['col-md-12'],classes.imageSide].join(" ")}>
        <div className={classes.project}>
          <div className={classes.ontheroad}>
          </div>
          <div className={classes.projectTextWrap}>
            <div className={classes.projectText}>
              <h3>On The Road</h3>
              <p>If you don't know where to travel. <br></br><span>On The Road</span> can help you find some ideas about your next destination.</p>
              <div>
                <a className={[boot.btn, boot['btn-outline-light'],classes.buttonoverimage].join(" ")} href="https://jackie-github.github.io/ontheroad/" role="button">Website</a>
                <a className={[boot.btn, boot['btn-outline-light'],classes.buttonoverimage].join(" ")} href="https://github.com/Jackie-GitHub/ontheroad" role="button">Code</a>
              </div>
            </div> 
          </div>
        </div>
        <div className={classes.project}>
          <div className={classes.memorygame}>
          </div>
          <div className={classes.projectTextWrap}>
            <div className={classes.projectText}>
              <h3>Find The Love</h3>
              <p>Unlike the typical memory game, players need to find same images behind plates. In this game players need to pair couples in famous paitings.</p>
              <div>
                <a className={[boot.btn, boot['btn-outline-light'],classes.buttonoverimage].join(" ")} href="https://jackie-github.github.io/memorygame/" role="button">PLAY</a>
                <a className={[boot.btn, boot['btn-outline-light'],classes.buttonoverimage].join(" ")} href="https://github.com/Jackie-GitHub/memorygame" role="button">Code</a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomePage;
