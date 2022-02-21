import apiClient from "../helper/apiClient";

class UsersService {  
  getAllusers = () => apiClient().get("comments")
}

export default new UsersService();