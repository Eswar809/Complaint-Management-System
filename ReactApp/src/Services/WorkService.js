import axios from 'axios'
const WORK_BASE_REST_API_URL = 'http://localhost:9000/api/work';

class WorkService{

    getAllWork(){
        return axios.get(WORK_BASE_REST_API_URL)
    }

    createWork(work){
        return axios.post(WORK_BASE_REST_API_URL, work)
    }

    getWorkById(workId){
        return axios.get(WORK_BASE_REST_API_URL + "/" + workId)
    }

    getWorkByUserId(userId){
        return axios.get(WORK_BASE_REST_API_URL + "/search/" + userId)
    }

    getWorkByIdName(idName){
        return axios.get(WORK_BASE_REST_API_URL+ "/search/idName/" + idName)
    }

    updateWork(workId, work){
        return axios.put(WORK_BASE_REST_API_URL + "/" + workId, work)
    }

    deleteWork(workId){
        return axios.delete(WORK_BASE_REST_API_URL + "/" + workId)
    }

    deleteWorkByUserId(userId){
        return axios.delete(WORK_BASE_REST_API_URL + "/delete/" + userId)
    }

}

export default new WorkService()