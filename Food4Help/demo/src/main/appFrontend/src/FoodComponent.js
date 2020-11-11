import React from 'react';
import FoodService from './FoodService';

class FoodComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            food:[]
        }
    }

    componentDidMount(){
        FoodService.getFood().then((response) => {
            this.setState({ food: response.data})
        });
    }

    render (){
        return (
            <div>
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
                            this.state.food.map(
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