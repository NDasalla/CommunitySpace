import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM events ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const selectQuery = `SELECT name, location, image, description, submittedBy, submittedOn FROM events WHERE id = ${eventId}`;
    const results = await pool.query(selectQuery);

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export { getEvents, getEventById };
