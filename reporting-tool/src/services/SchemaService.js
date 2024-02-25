import axios from 'axios';

const Base_URL = "http://localhost:8137/admin/schema";

class SchemaService {

    getSchema(){
        return axios.get(`${Base_URL}/`).then(response => response.data)
    }
}

export default new SchemaService;