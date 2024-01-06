'use client'


import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [homeChange, setHomeChange] = useState(false);
    const [profileChange, setProfileChange] = useState(false);
    const [skillsChange, setSkillsChange] = useState(false);
    const [projectsChange, setProjectsChange] = useState(false);
    const [contactChange, setContactChange] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const homeCheck = window.scrollY < 1500; 
            const profileCheck = (window.scrollY >= 1500 && window.scrollY < 2500);
            const skillsCheck = (window.scrollY >= 2500 && window.scrollY < 3500);
            const projectsCheck = (window.scrollY >= 3500 && window.scrollY < 4500);
            const contactCheck = window.scrollY >= 4500;

            setHomeChange(homeCheck);
            setProfileChange(profileCheck);
            setSkillsChange(skillsCheck);
            setProjectsChange(projectsCheck);
            setContactChange(contactCheck);
        };

        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [homeChange, profileChange, skillsChange, projectsChange, contactChange]);
    
    const scrollToYCoordinate = (yCoordinate) => {
        window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
    };
    
    return (
        <div className="flex flex-col w-1/6 pl-10">
            <div className="flex flex-col justify-around h-4/6 fixed">
                <div className="my-2" onClick={() => scrollToYCoordinate(0)}>
                    <FaHome className="icon-transition" size={homeChange ? "40px" : "30px"} style={{ color: homeChange ? '#333333' : 'grey' }}/>
                </div>
                <div className="my-2" onClick={() => scrollToYCoordinate(1550)}>   
                    <FaUser className="icon-transition" size={profileChange ? "40px" : "30px"} style={{ color: profileChange ? '#333333' : 'grey' }}/>
                </div>
                <div className="my-2" onClick={() => scrollToYCoordinate(2675)}>
                    <FaTools className="icon-transition" size={skillsChange ? "40px" : "30px"} style={{ color: skillsChange ? '#333333' : 'grey' }}/>
                </div>
                <div className="my-2" onClick={() => scrollToYCoordinate(3500)}>
                    <FaProjectDiagram className="icon-transition" size={projectsChange ? "40px" : "30px"} style={{ color: projectsChange ? '#333333' : 'grey' }}/>
                </div>
                <div className="my-2" onClick={() => scrollToYCoordinate(4500)}>                      
                    <FaEnvelope className="icon-transition" size={contactChange ? "40px" : "30px"} style={{ color: contactChange ? '#333333' : 'grey' }}/>
                </div>
            </div>
        </div>
    );
}