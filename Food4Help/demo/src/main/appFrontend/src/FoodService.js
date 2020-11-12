import axios from 'axios'

const FOOD_REST_API_URL = 'http://localhost:8080';

class FoodService {

    getFood(){
        return axios.get('/food', {
        })
        .then((response) => {
        console.log("API reached");
        }, (error) => {
        console.log("Error");
        });
    }
}

export default new FoodService();