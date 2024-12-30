import React, { useEffect, useState } from "react";
import axios from "axios";
import { Badge, Card } from "react-bootstrap";

const ContestList = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get("http://localhost:8080/contests");
        setContests(response.data);
      } catch (error) {
        console.error("Error fetching contests:", error);
      }
    };
    fetchContests();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          Contest
        </div>
        <div className="card-body">
            {contests.map((contest) => (
            <Card key={contest.id} className="mb-1 shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title className="mb-1 text-primary">{contest.name}</Card.Title>
                  <Card.Text className="text-muted mb-0">
                    <strong>Start:</strong> {contest.date} at {contest.time} <br />
                    <strong>Duration:</strong> {contest.duration} minutes
                  </Card.Text>
                </div>
                <div>
                  <Badge
                    bg={contest.status === "Finished" ? "secondary" : "success"}
                    className="p-2"
                  >
                    {contest.status}
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestList;
