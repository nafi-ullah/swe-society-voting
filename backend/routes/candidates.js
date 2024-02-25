const express = require("express");
const CandidateInfo = require("../models/candidate");


const candidateRouter = express.Router();


candidateRouter.post("/api/candidates", async (req, res) => {
    try {
     
      const {  votestatus, year, candidateList } = req.body;

      let pushCandidate = new CandidateInfo({
        votestatus,
        year,
        candidateList
      });
      
      pushCandidate = await pushCandidate.save();
      console.log(pushCandidate);


      return res.json(pushCandidate);
      
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  });

  candidateRouter.get("/api/get-candidates", async (req, res) => {
    try {
      const messid = req.query.messid;
      //  console.log(messid);
      const meals = await MealInfo.find({ messid: messid, date: formattedDate }); // jodi search functionality add korte hoy tobe ei find er moddhe search er character recieve korbe
  
      res.json(meals);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  //------------------------------------------------------------------------
  // Auto meal post api in a time
  mealRouter.post("/api/scheduled-meal", async (req, res) => {
    try {
      // ekhane name messID mealMenu mealCount recieve korbo jst,
      // pore seta MealInfo er sathe time onujayi align kore nibo.
      const { name, messid, mealMenu, count, comment } = req.body;
  
      let pushMeal = new MealInfo({
        name,
        messid,
        lunchMeal: mealMenu,
        lunchCount: count,
        lunchComment: comment,
        date: formattedDate,
      });
  
      pushMeal = await pushMeal.save();
      return res.json(pushMeal);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  });


module.exports = candidateRouter;