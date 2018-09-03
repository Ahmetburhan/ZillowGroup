import React, {
    Component
} from 'react';
import request from 'superagent';
import Cards from './components/Cards';
import SubmitForm from './components/SubmitForm';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "world"

        }
     this.onSubmit = this.onSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);


    }
    // https://api.unsplash.com/search/collections?page=1&query=office



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



    onSubmit (filteredUsers) {
     this.setState ({
         filteredUsers,

     })
    }
    handleChange (e){
        e.preventDefault;
        this.setState({
            query: e.target.value,
        })
        console.log(this.state.query)
    }


    render() {

        return ( <div className = "App" >

            <form onSubmit={this.handleSubmit}>
                    <label>
                Search for Photos:
          <input type="text" name="photos"  onChange={this.handleChange} />
            </label>
            </form>


             <SubmitForm onSubmit = {this.onSubmit} users = {
                this.state.users
            }
            />

            <Cards handleClick = {
                this.handleClick
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