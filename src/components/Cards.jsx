import React from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Tooltip, UncontrolledTooltip, Popover, PopoverHeader, PopoverBody, Collapse
} from 'reactstrap';
import ModalUser from './ModalUser';

export default class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
             collapse: false
        };

    }
    state = {
        pictures: this.props.pictures,
    }
  
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen,
            collapse: !this.state.collapse
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
                                    
                                    <CardBody>
                                        <CardImg onClick={this.toggle} style={{ marginBottom: '1rem' }}className="photo" src={user.urls.regular} alt="Card image cap" />
                                        <CardTitle>{user.user.name} </CardTitle>
                                        <CardSubtitle>#{user.user.username}</CardSubtitle>
                                        <CardText>Age:
                                        {user.id}</CardText>
                                        <Collapse isOpen={this.state.collapse}>
                                            <Card>
                                                <CardBody>
                                                    Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
                                            </Card>
                                        </Collapse>

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