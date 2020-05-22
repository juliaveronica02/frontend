import React, { useState } from "react";
import "./categories.json";
import "./search.css";

function TesSearch() {
  const category = [
    "Woman",
    "Man",
    "Electronic",
    "Accessories",
    "Beauty",
    "Bag",
    "Home and Garden",
    "Kids",
    "Sale",
  ];
  const [filter, setFilter] = useState("");
  return (
    <div className="TesSearch">
      <header className="Search-header">
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
        <ul>
          {category.map((name) => {
            if (filter.length !== 0) {
              if (name.toLowerCase().startWith(filter.toLowerCase())) {
                return <li>{name}</li>;
              } else {
                return null;
              }
            }
            return <li>{name}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default TesSearch;
