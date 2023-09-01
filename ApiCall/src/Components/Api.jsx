import axios from "axios";
const searchImages = async (q) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID mFx7MegHBHV9PTbOgtOQjyn3Wl4vWsSZSUaX0MHoGEU",
    },
    params: { query: q },
  });
  return res.data.results;
};

export default searchImages;
