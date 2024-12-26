import React from "react";


const viewProblem =()=> {
    <React.Fragment>
    return(
        <section class=" mb-5 vh-100 bg-white bg-image" style="background-color: #FFFF;">
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-9 col-lg-10 col-xl-10">
                            <div class="card" style="border-radius: 15px;">
                                <div class="card-body p-5">
                                    <h2 class="text-uppercase text-center mb-5">Problem Statement</h2>
                                    <div class="p-3">
                                        <h4>Title</h4>
                                        <p text="${view_title}">Title</p>
                                    </div>
                                    <div class="p-3">
                                        <h2>Body</h2>
                                            <p text="${view_body}">body</p>
                                    </div>
                                    <div class="p-3">
                                        <h2>Input</h2>
                                            <p text="${view_input}">Input</p>
                                    </div>
                                    <div class="p-3">
                                        <h2>Output</h2>
                                            <p text="${view_output}"></p>
                                    </div>
                                    <div class="row col-12 p-5">
                                        <div class="col-6">
                                            <label for="formFileSm" class="form-label">Choose Your file</label>
                                        </div>
                                        <div class="col-6 pt-4">
                                            <a type="submit" href="/submission/" class="btn btn-primary mb-3">Submit Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    )
    </React.Fragment>
}

export default viewProblem;