import axios from "axios";

export default {
  getData: (requestData) =>
    axios({
      method: "GET",
      url: `http://www.rrphp.com/api/photos2/${requestData}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "example.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      },
      params: {
        search: "parameter",
      },
    }),
};
