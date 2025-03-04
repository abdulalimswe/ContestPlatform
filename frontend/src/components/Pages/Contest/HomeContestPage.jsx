import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { Badge, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const ContestHomePage = () => {
    const [contestInfo, setContests] = useState({
        name: "",
        date: "",
        time: "",
        duration: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchContests();
    }, [id]);

    const fetchContests = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/getContest/${id}`);
            setContests(response.data);
        } catch (error) {
            console.error("Error fetching contests:", error);
        }
    }


  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header p-3 px-5">
          <strong className="text-info"> {contestInfo.name} </strong>
        </div>
        <div className="card-body">
            <div className="pt-2">
                <Card key={contestInfo.id}>
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <div className="contest-details">
                            <div className="pt-3">
                                <h6>Schedule</h6>
                                <p>
                                    The contest will start on <b> {contestInfo.date} at {contestInfo.time} </b> and
                                    will run for <b>{contestInfo.duration}</b> minutes.
                                </p>
                            </div>
                            <div className="pt-3">
                                <h6>Authors</h6>
                                <p>
                                    The authors of this contest are <strong className="authorName ">abdulalimswe</strong>
                                </p>
                            </div>
                            <div>
                            <h6>Rules</h6>
                            <p> This contest is formatted as per the official rules of ICPC Regional Programming Contests.  
                                <a href="https://icpc.daffodilvarsity.edu.bd/onsite-contest-rules">See details</a>
                               
                                <br/><br/>
                                You can use Bash 5.2, Brainf*ck, C# Mono 6.0, C++17  GCC 13.2, and 26 other programming languages in this contest.Be fair, be honest. 
                                <br/><br/>
                                Plagiarism will result in disqualification. Judges’ decisions will be final. </p>
                            </div>
                            <div className="pt-3">
                                <h6>Disclaimer</h6>
                                <p>
                                    The contents of this contest, as prepared by its organizer.
                                </p>
                            </div>
                            <div className="pt-5">
                                <button className="btn btn-success mx-2" onClick={() => navigate(`/contestStanding`)}>Standings</button>
                                <button className="btn btn-info" onClick={() => navigate(`/contestproblemlist/${id}`)} >
                                   Contest Arena
                                </button>
                            </div>
                                                  
                            <p className="text-danger mt-5 ">⚑ Only invited user can participate.</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
      </div>
    </div>
    
  );
};

export default ContestHomePage;
