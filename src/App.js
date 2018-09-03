import React, { Component } from 'react';
import request from 'superagent';
import Cards from './components/Cards';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "world"

        }
     this.onSubmit = this.onSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);


    }



    componentDidMount() {
        request
            .get(`https://api.unsplash.com/photos/?client_id=b32091e8b92b6bb1f30f2409ef141dc0c31ffc30cc7dfa5ad46308738fe4c1f0&query=${this.state.query}&per_page=30`).then(res => {
                if (res.ok) {
                    console.log(res.body)
            
                    this.setState({
                        pictures : res.body
                    
                    })
                } else {

                    console.log('We found nothing')

                }
            })
    };



    handleChange(event) {
        this.setState({ query: event.target.value });
        console.log(this.state.query)
    }

    onSubmit(event) {
        console.log('New photo search was submitted: ' + this.state.query);
        event.preventDefault();
        this.setState({ query: event.target.value });

    }



    render() {

        return ( <div className = "App" >

            {/* <form onSubmit={this.handleChange}>
              <label>
                    Search for Photos:
                <input type="text" name="photos"  onChange={this.handleChange} pictures={
                        this.state.pictures
                    } />
              </label>
            </form> */}

            <form onSubmit={this.onSubmit}>
                <label>
                    Search:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>


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