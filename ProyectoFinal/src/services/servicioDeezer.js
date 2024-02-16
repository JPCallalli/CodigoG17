import axios from "axios";

const servicioDeezer = () => {
  
  
     return axios.get("https://deezerdevs-deezer.p.rapidapi.com/search", {
        headers: {
          "X-RapidAPI-Key":
            "0ebebcd5aemsh5c38631760e3de6p1b5386jsn2351963e10ff",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
        params: { q: "soda stereo" },
      })
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });

        
  }

export {
    servicioDeezer
}