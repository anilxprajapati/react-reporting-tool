import axios from 'axios';

const Base_URL = "http://localhost:8137/admin/table";

class TableService {

    getTables(schemaId){
        return axios.get(`${Base_URL}/${schemaId}`).then(response => response.data)
    }

}

export default new TableService;