import React, { useState, useEffect } from "react";
import { getContestProblem } from "../../../service/contestProblemService";
import { Link, useParams } from "react-router-dom";
import { Card, CardBody, CardHeader } from "react-bootstrap";


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

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return(
        <div className="container mt-4">
            <div className="">
                <div className="card-body">
                    <div className="pt-2">
                        <Card>
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <div className="contest-details">
                                    <div>
                                        <h5 className="text-info"> {contestProblem.title} </h5>
                                    </div>
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
                                        <h5>Input</h5>
                                        <p>
                                            {contestProblem.input}
                                        </p>
                                    </div>
                                    <div className="pt-3">
                                        <h5>Output</h5>
                                        <p>
                                            {contestProblem.output}
                                        </p>
                                    </div>

                                    <h5 className="pt-2">Sample Test Case</h5>
                                    <div className="pt-1 d-flex w-100 ">
                                        <Card className="mt-3 col-lg-6 w-100">
                                        <CardHeader className="d-flex">
                                                <div className="col-lg-9"><p>Input</p></div>
                                                <div className=""><button className="btn bg-warning" onClick={() => copyToClipboard(contestProblem.testcaseInput)} style={{ marginLeft: "10px" }}> Copy</button></div>
                                            </CardHeader>
                                            <CardBody><pre>{contestProblem.testcaseInput}</pre></CardBody>
                                        </Card>
                                        <Card className="mt-3 col-lg-6 w-100">
                                            <CardHeader className="d-flex">
                                                <div className="col-lg-9"><p>Output</p></div>
                                                <div className=""><button className="btn bg-warning" onClick={() => copyToClipboard(contestProblem.testcaseOutput)} style={{ marginLeft: "10px" }}> Copy</button></div>
                                            </CardHeader>
                                            <CardBody><pre>{contestProblem.testcaseOutput} </pre></CardBody>
                                        </Card>
                                    </div>
                                    <div className="pt-4">
                                        <h5>Notes:</h5>
                                        <p>
                                            {contestProblem.notes}
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