import Hospital from "../Model/Hospital.js";

const getHospitals = async (req, res) => {
  try {
    const { bloodGroup, city } = req.body;
    const hospitals = await Hospital.find({
      city,
      blood: { $elemMatch: { type: bloodGroup } },
    });
    res.json(hospitals);
  } catch (err) {
    console.log(err);
    res.status(403).json("Internal server error");
  }
};

export default getHospitals;