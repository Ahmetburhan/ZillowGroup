import React from 'react';
import {
    Col, Card, CardImg, CardText, CardBody, CardImgOverlay,
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
        // console.log("props coming here", this.props)
        const pictures = this.props.pictures;
        

        return (

            <div>
            

                <h2>{pictures && pictures.length} Photos Found</h2>
            <div className="card-columns">
                {pictures && pictures.map((picture, index) => {
                    // console.log(picture)
                    // console.log(index)
                    return (

                    
                             <Col>

                            <Card id="photoCard" inverse style={{
                                fontFamily: 'Helvetica Neue',
                                marginBottom: "1em"
                            }} >
                                <CardImg width="100%" onClick={this.toggle} style={{ marginBottom: '1rem' }} className="photo" src={picture.urls.regular} alt="Card image cap" />
                                <CardImgOverlay>
                                    <CardTitle>{picture.user.name}</CardTitle>
                                    <CardSubtitle>
  <i className="fab fa-instagram">   {picture.user.username}</i>

                                  </CardSubtitle>
                                    <CardText>#{picture.tags[0].title}  #{picture.tags[1].title}  
  #{picture.tags[2].title} 
                                    </CardText>
                                    <CardText>
                                        <i className="fas fa-heart" style={{fontSize:"1.5rem",color:"white", float: "right"}}> #{picture.likes}</i>                      
                                    </CardText>
                                    <ModalUser picture={picture} />

                                </CardImgOverlay>
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