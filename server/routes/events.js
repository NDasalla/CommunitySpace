import express from "express";
// import controllers for events and locations
import { getEvents, getEventById } from "../controllers/events.js";

const router = express.Router();

// define routes to get events and locations

router.get("/", getEvents);

router.get("/:eventId", getEventById);

export default router;
