import axios from "axios";

export function requestGetNews() {
  return axios.request({
    method: "post",
    url: "https://run.mocky.io/v3/1e5bcf73-70f4-44a5-9676-11c9a072ddd5"
  });
}
