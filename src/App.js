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
            users: [],
            filteredUsers: []

        }
     this.onSubmit = this.onSubmit.bind(this);

    }




    componentDidMount() {
        request
            .get('https://api.unsplash.com/photos?client_id=b32091e8b92b6bb1f30f2409ef141dc0c31ffc30cc7dfa5ad46308738fe4c1f0&query=love&per_page=100').then(res => {
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


    render() {

        return ( <div className = "App" >
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
            user = {
                this.state.selectedUser
            }/>

            </div>
        )
    }
}
export default App;