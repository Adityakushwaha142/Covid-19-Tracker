import logo from "./logo.svg";
import "./App.css";

import { MenuItem, FormControl, Select } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

function App() {
  const [countries, setCountries] = React.useState([]);
  const url = "https://disease.sh/v3/covid-19/countries";
  useEffect(() => {
    async function fetchCountries() {
      const req = await axios.get(url);
      console.log(req);
      console.log(req.data[0].country);
      const res = JSON.parse(JSON.stringify(req));
      console.log(res);
      console.log("apple");
    }
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <div className="app_header">
        <h1>Lets build this covid-19 tracker</h1>
        <FormControl className="app_dropdown">
          {
            <Select variant="outlined">
              {countries.map((country) => (
                <MenuItem value={country}>{country}</MenuItem>
              ))}
            </Select>
          }
        </FormControl>
      </div>
    </div>
  );
}

export default App;
