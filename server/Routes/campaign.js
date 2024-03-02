import express from "express";
import getCampaign from "../Controller/campaign.js";

const router =  express.Router();

router.post("/get", getCampaign);

export default router;

