import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // Fake API
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 10))) // Pehle 10 records
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Posts from API</h2>
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-md-6 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>{item.title}</h5>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default API;
