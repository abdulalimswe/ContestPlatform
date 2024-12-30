import React, { useState, useEffect } from "react";
import { getProblems } from "../../service/problemService";
import { Link } from "react-router-dom";

const Problem =()=>{
    
    const [problems, setProblems] = useState([])
    useEffect( () =>{
        getProblems()
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
					<th scope="col">Id</th>
					<th scope="col">Title</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
                {problems.map((problem) =>{
                    return (
                        <tr>
                            <td>{problem.id}</td>
                            <td>{problem.title}</td>
                            <td>
                                <Link to={`/viewProblem/${problem.id}`}  className="btn btn-success mx-2">view</Link>
                                <Link to={`/delete/${problem.id}`} className="btn btn-danger mx-2">Delete</Link>
                                <Link to={`/createProblem/${problem.id}`} state={{action:"update", problem:problem}} className="btn btn-warning mx-2">Update</Link>
                            </td>
                        </tr>
                    );
                })}
			</tbody>
		</table>
	</div>
    );
}

export default Problem;