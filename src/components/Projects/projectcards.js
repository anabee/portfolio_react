import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ProjectCard = ()=> {

    return (
        <div>
            <Card>
                <CardContent>
                    <p>
                        Project1
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <p>
                        Project2
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <p>
                        Project3
                    </p>
                </CardContent>
            </Card>
        </div>
    )
};

export default ProjectCard;