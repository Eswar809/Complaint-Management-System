import axios from 'axios'
const USER_BASE_REST_API_URL = 'http://localhost:9000/api/users';

class UserService{

    getAllUsers(){
        return axios.get(USER_BASE_REST_API_URL)
    }

    createUser(user){
        return axios.post(USER_BASE_REST_API_URL, user)
    }

    getUserById(userId){
        return axios.get(USER_BASE_REST_API_URL + "/" + userId)
    }

    updateUser(userId, user){
        return axios.put(USER_BASE_REST_API_URL + "/" + userId, user)
    }

    deleteUser(userId){
        return axios.delete(USER_BASE_REST_API_URL + "/" + userId)
    }

    searchUser(name){
        return axios.get(USER_BASE_REST_API_URL + "/search/" + name)
    }

    searchUserByLname(lname){
        return axios.get(USER_BASE_REST_API_URL + "/search/lname/" + lname)
    }
}

export default new UserService()