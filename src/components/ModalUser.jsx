/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardText, CardImg } from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="secondary" onClick={this.toggle}>More info{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 200 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Hi! My name is {this.props.user.user.name} </ModalHeader>
                    <ModalBody>
                        <h4> You can reach me @ </h4>
                        <CardImg style={{
                            fontFamily: 'Helvetica Neue',
                            marginBottom: "1em",
                            float: "right",
                            display: "inline-flex"
                        }} className="photo" src={this.props.user.urls.regular} alt="Card image cap" />
                        <CardText>Instagram: {this.props.user.user.username}</CardText>
                      
          </ModalBody>
                    <ModalFooter>
                        <Button color="primary" href={`mailto:${this.props.user.links.self}?subject=Hi ${this.props.user.user.name} Let's chat!&body=Thanks to Lonely Hearts Dating Service, Lets schedule some time to meet up. Looking forward to talking to you.`}  onClick={this.toggle}>Send me e-Mail</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;

