import axios from "axios";
import { api } from "../config";
import PropertyCard from "./PropertyCard";
import Searchbar from "./Searchbar";

const getData = async () => {
  try{
    const response = await axios.get(api + '/property', {
      withCredentials: true, 
      headers: {
        //'Access-Control-Allow-Origin': 'http://127.0.0.1:3001/*'
      }
    })

  console.log(response)
  } catch (error){
    console.log(error)
  }
}

const Home = (props) => {
  getData();

  return (
    <div>
      <Searchbar />
      <PropertyCard />
    </div>
  );
};

export default Home;
