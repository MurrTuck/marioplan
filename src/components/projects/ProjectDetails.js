import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur iste delectus id voluptate corporis laudantium quis debitis dolores exercitationem quidem dolorem, optio culpa modi sed ab, magni reprehenderit. Odit, placeat.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Murr Tuck</div>
                    <div>15th October 11pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
