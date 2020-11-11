import React from 'react';
import UserService from './UserService';

class FoodComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getFood().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> User List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Email</td>
                            <td> User Gender</td>
                            <td> User Age</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                     <td> {user.firstName}</td>
                                     <td> {user.lastName}</td>
                                     <td> {user.userEmail}</td>
                                     <td> {user.gender}</td>
                                     <td> {user.age}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default FoodComponent