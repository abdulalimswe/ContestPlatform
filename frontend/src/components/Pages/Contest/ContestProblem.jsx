import React, { useState, useEffect } from "react";
import { getContestProblem } from "../../../service/contestProblemService";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";


const ContestProblem =()=>{
    
    const { id } = useParams();

    const [contestProblem, setProblem] = useState([])
    useEffect( () =>{
        getContestProblem(id)
        .then(response =>{
            setProblem(response.data);
        })
        .catch(err=>{
            console.log(err)
        })
    });

    return(
        <div className="container mt-4">
            <div className="card">
                <div className="card-header p-3 px-5">
                <strong className="text-info"> {contestProblem.title} </strong>
                </div>
                <div className="card-body">
                    <div className="pt-2">
                        <Card key={contestProblem.id}>
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <div className="contest-details">
                                    <div className="pt-3">
                                        <p>
                                        Time: 2 s <br/>
                                        Memory: 125 MB
                                        </p>
                                    </div>
                                    <div className="pt-3">
                                        <p>
                                            {contestProblem.body}
                                        </p>
                                    </div>
                                    <div className="pt-3">
                                        <h3>Input</h3>
                                        <p>
                                            {contestProblem.input}
                                        </p>
                                    </div>
                                    <div className="pt-3">
                                        <h3>Output</h3>
                                        <p>
                                            {contestProblem.output}
                                        </p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>       
    );
}

export default ContestProblem;