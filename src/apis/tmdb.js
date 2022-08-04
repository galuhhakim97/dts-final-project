import axios from "axios";

const tmdbInstance = axios.create({
  baseURL: "https://api-berita-indonesia.vercel.app/cnn/",
  
  }
  );

export default tmdbInstance;
