import axios from "axios";
import { api } from "../config";
import Searchbar from "./Searchbar";
import { Component } from "react";
import PropertiesList from "./PropertiesList";

class Home extends Component {
  state = {
    properties: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await axios.get(api + "/property", {
        withCredentials: true,
        headers: {
          //'Access-Control-Allow-Origin': 'http://127.0.0.1:3001/*'
        },
      });

      console.log(response);
      this.setState({ properties: response.data.properties });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Searchbar />
        <PropertiesList properties={this.state.properties} />
      </div>
    );
  }
}

export default Home;
