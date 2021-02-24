import { useContext } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { NavLink } from "react-router-dom";
import { Context } from "./Routers";

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

function App() {
  const data = useContext(Context);
  return (
    <div className="App">
      <header>
        <h1 className="alignCenter">Tất cả các lục địa trên thế giới</h1>
      </header>
      <div className="alignCenter continents">
        {data.length !== 0 &&
          data.map((i, number) => (
            <div className="continent" key={number}>
              <h3>
                {i.name} - {i.code} ({i.countries.length} countries)
              </h3>
              <span>
                <NavLink className="decoNone" to={`/continent/${i.name}`}>
                  Chi tiết
                </NavLink>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default graphql(query)(App);
