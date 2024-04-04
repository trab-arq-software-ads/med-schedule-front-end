'use client';
import { useState } from "react";
import './style.css'
import { GoTrash } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";


export default function ListDoctors(){
    
    const [doctor, setDoctor] = useState([{"id":"1","name": "Davy Eduardo Costa Dantas", "specialization": "Pediatra"}]);
    
    return(
        <div  className="elementsList">
            <h2>Lista de Médicos</h2>
            {doctor.map(doctor => (  
                <div key={doctor.id}> 
                    <span className="idElement">{doctor.id}</span>
                    <span>{doctor.name}</span>
                    
                    <div className="options">
                        <a href="" id="trash"><GoTrash/></a>
                        <a href="" id="edit"><MdOutlineModeEditOutline/></a>                   
                        <a href="" id="view"><FaRegEye/></a>                   
                    </div>

                </div>
            ))} 

        </div>
    )
}
