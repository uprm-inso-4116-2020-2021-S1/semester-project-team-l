import axios from 'axios'

const FOOD_REST_API_URL = 'http://localhost:8080/food';

class FoodService {

    getFood(){
        return axios.get(FOOD_REST_API_URL);
    }
}

export default new FoodService();