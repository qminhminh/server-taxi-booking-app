const Geofire = require("../models/geofire_model");

const getPositionDriver = async(req, res) =>{
  try{
      const postion = await Geofire.find({});
      return res.json(postion);
  }catch(e){
    return res.status(500).json(
        {
            error: e.message
        }
    );
  }
};

module.exports = { getPositionDriver};