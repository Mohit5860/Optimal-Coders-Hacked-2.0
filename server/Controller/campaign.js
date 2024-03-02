import Campaign from "../Model/Campaign.js";

const getCampaign = async (req,res) => {
    try {
        const campaign = await Campaign.find({completed: false})
        res.json(campaign);
    }catch (err) {
        console.log(err);
        res.status(403).json("internal server error")
    }
    const campaign = await Campaign.find({completed: false})
    res.json(campaign);
}
export default getCampaign;