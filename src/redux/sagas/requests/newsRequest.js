import axios from "axios";

export function requestGetNews() {
  return axios.request({
    method: "post",
    url: "https://run.mocky.io/v3/ab295c4a-95e8-4045-b730-50a81f3955b9"
  });
}
