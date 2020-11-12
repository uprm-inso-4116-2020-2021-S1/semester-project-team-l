import React from 'react';
import axios from 'axios';

class FoodComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            food:[]
        };
    }

//    componentDidMount(){
//        fetch('api/food').then(response => response.json())
//        .then(data => this.setState({food: data}));
//    }
//     async getFood() {
//        await fetch(`/api/food/`, {
//          method: 'GET',
//          headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//          }
//        });
//     }
     componentDidMount(){
            axios.get('http://localhost:8080/api/food').then((response) => {
                    console.log("API reached");},
                    (error) => {
                    console.log("Error");
                    });
    }

    render (){
    const {food} = this.state;
    return (
                    <div className="FoodComponent">
                        <h1 className = "text-center"> Food List</h1>
                        <table className = "table table-striped">
                            <thead>
                                <tr>
                                    <td> Food Name</td>
                                    <td> Food Type</td>
                                    <td> Food Amount</td>
                                    <td> Food SKU</td>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    food.map(
                                        foods =>
                                        <tr key = {foods._id}>
                                             <td> {foods.name}</td>
                                             <td> {foods.type}</td>
                                             <td> {foods.amount}</td>
                                             <td> {foods.SKU}</td>
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