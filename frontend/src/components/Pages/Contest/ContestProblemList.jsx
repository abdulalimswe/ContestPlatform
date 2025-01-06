import React, { useState, useEffect } from "react";
import { getContestProblems } from "../../../service/contestProblemService";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ContestProblemList =()=>{
    
    const { id } = useParams();
    const navigate = useNavigate();

    const [contestProblems, setProblems] = useState([])
    useEffect( () =>{
        getContestProblems(id)
        .then(response =>{
            setProblems(response.data);
        })
        .catch(err=>{
            console.log(err)
        })
    });

    return(
        <div class="container my-5 col-md-6">
            
		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th className="text-center" scope="col">Title</th>
				</tr>
			</thead>
			<tbody>
                {contestProblems.map((problem) =>{
                    return (
                        <tr>
                            <td className="p-3" onClick={() => navigate(`/${problem.id}/contestProblem`)} >{problem.title}</td>
                            <td>
                                {/* <Link to={`/viewProblem/${problem.id}`}  className="btn btn-success mx-2">view</Link> */}
                            </td>
                        </tr>
                    );
                })}
			</tbody>
		</table>
	</div>
    );
}

export default ContestProblemList;