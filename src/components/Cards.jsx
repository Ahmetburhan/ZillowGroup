import React from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Tooltip, UncontrolledTooltip, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';
import moment from 'moment';
import ModalUser from './ModalUser';

export default class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };

    }
    state = {
        pictures: this.props.pictures,
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        console.log("props coming here", this.props)
        const pictures = this.props.pictures;
        

        return (

            <div>
            

                <h2>{pictures && pictures.length} Photos Found</h2>
            <div className="card-columns">
                {pictures && pictures.map((user, index) => {
                    console.log(user)
                    console.log(index)
                    return (

                        // <Col className="col" sm="6" md="4" lg="3" mt="4">
                            <Col>

                            <Card style={{
                                fontFamily: 'Helvetica Neue',
                                marginBottom: "1em"
                            }} >
                                <div key={user.id}>
                                    <CardImg top width="100%" className="photo" src={user.urls.regular} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{user.user.name} </CardTitle>
                                        <CardSubtitle>#{user.user.username}</CardSubtitle>
                                        <CardText>Age:
                                        {user.id}</CardText>

                                        <ModalUser user={user} />

                                    </CardBody>
                                </div>
                            </Card>
                        </Col>
                    )
                })
                }
            </div>
            </div>

        )
    }
}