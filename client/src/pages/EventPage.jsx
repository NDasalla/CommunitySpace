import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EventPage = () => {
  const [event, setEvent] = useState({});
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await fetch(`/api/${eventId}`);
      const data = await response.json();
      setEvent(data);
    };
    fetchEvent();
  }, [eventId]);

  return (
    <div className="Event">
      <main>
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
            <Link to="/">
              <a>Back to Events</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventPage;
