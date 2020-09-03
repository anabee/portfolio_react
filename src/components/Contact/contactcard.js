import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ContactCard = ()=> {

    return (
        <div>
            <Card>
                <CardContent>
                    <ul>
                        <li>email: ana.valdivia112@gmail.com</li>
                        <li>github</li>
                        <li>linkedIn</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
};

export default ContactCard;