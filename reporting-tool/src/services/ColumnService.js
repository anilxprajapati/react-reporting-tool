import axios from 'axios';

const Base_URL = "http://localhost:8137/admin/column";

class ColumnService {

    getColumn(tableId){
        return axios.get(`${Base_URL}/${tableId}`).then(response => response.data)
    }
}

export default new ColumnService;