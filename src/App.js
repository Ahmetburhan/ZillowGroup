import React, { Component } from 'react';
import request from 'superagent';
import Cards from './components/Cards';
import { Button, Form, Label, Input, FormText } from 'reactstrap';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "house",
            pagenumber: 1,

        }
     this.onSubmit = this.onSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);

    }



    componentDidMount() {
        request
            .get(`https://api.unsplash.com/search/photos/?client_id=b32091e8b92b6bb1f30f2409ef141dc0c31ffc30cc7dfa5ad46308738fe4c1f0&query=${this.state.query}&per_page=30`).then(res => {
                if (res.ok) {
                    // console.log(res.body)
            
                    this.setState({
                        pictures : res.body.results
                    
                    })
                } else {

                    console.log('We found nothing')

                }
            })
    };



    handleChange(event) {
        this.setState({ query: event.target.value });
        // console.log(this.state.query)
    }

    onSubmit(event) {
        console.log('New photo search was submitted: ' + this.state.query);
        event.preventDefault();
        this.setState({ query: event.target.value });
        request
            .get(`https://api.unsplash.com/search/photos/?client_id=b32091e8b92b6bb1f30f2409ef141dc0c31ffc30cc7dfa5ad46308738fe4c1f0&query=${this.state.query}&per_page=30&page=${this.state.pagenumber}`).then(res => {
                if (res.ok) {
                    console.log("new handle click",res.body)

                    this.setState({
                        pictures: res.body.results

                    })
                } else {
                    console.log('We found nothing')
                }
            })

    }

    render() {

        return ( <div className = "App" >


            <Form onSubmit={this.onSubmit}>
                <Label> 
                    <Input type="text" placeholder="search photos" value={this.state.value} onChange={this.handleChange} />
                </Label>
                <Button type="submit" value="Submit">Submit </Button>
            </Form>


            <Cards handleChange = {
                this.handleChange
            }
                pictures = {
                    this.state.pictures
            }
          />

            </div>
        )
    }
}
export default App;