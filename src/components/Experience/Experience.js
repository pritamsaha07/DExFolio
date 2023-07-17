import {useState,useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"


const Experience = ({state}) => {
    const [experience,setexperience]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const experienceDetails=async()=>{
            const experience = await contract.methods.allexperiences().call();
            setexperience(experience);
        }
        contract && experienceDetails();
    },[state])
    return (
        <section className="exp-section">
            <h1 className="title" ><u>Experience</u></h1>

            <div className="container">

                <div className="experience">
                  
                    {experience!=="" && experience.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.name}
                        </p>
                        <h3 className="card-text2">{edu.role}</h3>
                        <p className="card-text3">{edu.description}</p>
                        <p className="card-text4">
                        {edu.startdate} <h8>to</h8> {edu.enddate}  </p>
                        
                    </div>)
                    })}
                 
                   
                </div>
               </div>
        </section>
    )
}

export default Experience