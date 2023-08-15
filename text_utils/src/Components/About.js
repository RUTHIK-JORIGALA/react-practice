function About(){
    return(
        <div >
            <div className="accordion container my-5" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                        OVERVIEW
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>TextXpert:</strong> It is a simple project developed using react.js.
                            This takes input from the user then the user can perform functionalities like changing the text to uppercase, lowerCase, removing extra spaces around the text, and copying text.
                            This enables a user-friendly UI that has a different background color and with dark mode feature. 
                            I have provided it with alert feature, that pop up when the provided function is completed.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                            TECH STACK
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>React.js, Bootstrap</strong> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;