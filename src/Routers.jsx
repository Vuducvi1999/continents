import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import { Continent } from "./Continent";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const query = gql`
  {
    continents {
      code
      name
      countries {
        name
        native
        phone
        capital
        currency
        languages {
          name
          native
        }
        emoji
        emojiU
      }
    }
  }
`;

export const Context = React.createContext();

function Routers(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(props.data.continents);
    if (props.data.continents) setData(props.data.continents);
  }, [props.data]);
  return (
    <Context.Provider value={data}>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/continent/:name">
            <Continent />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default graphql(query)(Routers);
