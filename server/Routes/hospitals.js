import express from "express";
import getHospitals from "../Controller/hospitals.js";

const router =  express.Router();

router.post("/get", getHospitals);

export default router;

