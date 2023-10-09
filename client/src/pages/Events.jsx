import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./Gifts.css";
// import Card from "../components/Card";

const Events = (data) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(data.data);
  }, [data]);

  return (
    <div className="Events">
      <main>
        {events && events.length > 0 ? (
          events.map((event, index) => (
            <div
              className="card"
              style={{ backgroundColor: `#000000`, borderStyle: `solid` }}
            >
              <div
                className="top-container"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
              <div className="bottom-container">
                <h3>{event.name}</h3>
                <p>{"Location: " + event.location}</p>
                <p>{"Description: " + event.description}</p>
                <Link to={`/${event.id}`}>
                  <a>Read More →</a>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h3 className="noResults">{"No Events Yet 😞"}</h3>
        )}
      </main>
    </div>
  );
};

export default Events;
