import axios from "axios";
import BaseApiService from "./BaseApiService";

const DEFAULT_PATH = "/posts";

class DemoService extends BaseApiService {
  getPostList(start = 0, limit = 10, search = "") {
    let url = this.getDefaultApiUrl();
    url = `${url}${DEFAULT_PATH}?_start=${start}&_limit=${limit}${search}`;
    return this.getAxios().get(url);
  }
  save(obj) {
    let url = this.getDefaultApiUrl();
    url = `${url}${DEFAULT_PATH}`;
    return this.getAxios().post(url, { ...obj });
  }
}

export default new DemoService();
