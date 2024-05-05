import { useState, useEffect } from "react";
import qa from "./assets/robot.png";
import NavBar from "./NavBar.jsx";
import Button from '@mui/material/Button';

export default function LandingPage() {
    return (
        <>
            {/*<NavBar/>*/}
            <div className="landing-page">
                <div className="landing-container">
                    <div className="brand-name">
                        <div className="heading">
                            <div className="main-heading">Unlock Knowledge with <span className="span-1">Ease</span></div>
                            <div className="main-heading">Let <span className="main-heading span-2">AutoQA</span> Create Your Questions</div>
                        </div>
                        <div className="sub-heading" style={{ margin: '1.5rem 0 2rem 0' }}>Revolutionize learning with automated question generation, simplifying question generation and boosting efficiency</div>
                        
                        <Button
                            className="btn-explore"
                        >
                            Start now
                        </Button>
                    </div>
                    
                    <div className="brand-img" style={{ position: 'relative' }}>
                        <div className="blob" />
                        <img className="main-img" src={qa} alt="Question Answer"/>
                    </div>
                </div>
            </div>
        </>
    )
}