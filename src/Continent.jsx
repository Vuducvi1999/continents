import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Context } from "./Routers";

export const Continent = () => {
  const { name } = useParams();
  const data = useContext(Context).find((i) => i.name === name);
  useEffect(() => console.log(data), [data]);
  return (
    <>
      <header>
        <NavLink to="/" className="decoNone">
          <span>&larr;</span>
        </NavLink>
        <h1 className="alignCenter">Lục địa {name} </h1>
      </header>
      <ul className="countries">
        {data &&
          data.countries.map((i, number) => (
            <li key={number} className="country flexCenter">
              <div>
                <h2>
                  {i.native} ({i.name})
                </h2>
                <p>
                  <span className="bold">Thủ đô: </span>{" "}
                  <span>{i.capital}</span>
                </p>
                <p>
                  <span className="bold">Đơn vị tiền tệ: </span>
                  <span>{i.currency}</span>
                </p>
                <p>
                  <span className="bold">Ngôn ngữ: </span>
                  <span>
                    {i.languages
                      .reduce((pre, cur) => pre + cur.name + ", ", "")
                      .slice(0, -2)}
                  </span>
                </p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
