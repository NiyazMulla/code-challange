import axios from "axios";
import AuthService from "./AuthService";

const prod = true;

const DEFAULT_API_PATH = process.env.REACT_APP_BASE_API_URL;

class BaseApiService {
  constructor() {}

  getDefaultApiUrl() {
    return DEFAULT_API_PATH;
  }

  getAxios() {
    return axios;
  }
}

export default BaseApiService;
