const express = require("express");
const VoterInfo = require("../models/voter");


const voterRoter = express.Router();


voterRoter.post("/api/votecast", async (req, res) => {

    const {  
        regno, 
        year,
        vice_president,
        general_secretary,
        assistant_general_secretary,
        organizing_secretary,
        sports_secretary,
        publication_secretary,
        assistant_publication_secretary
    } = req.body;



    try {
     
        if (!regno || !year || !vice_president || !general_secretary || 
            !assistant_general_secretary || !organizing_secretary || !sports_secretary || !publication_secretary ||
            !assistant_publication_secretary ) {
            return res
              .status(400)
              .json({ error: "All field are required." });
          }

          const voterCredential = await VoterInfo.findOne({ regno , year });

          if (voterCredential) {
              return res.status(400).json({ error: "This voter already voted" });
          }


      let pushVote = new VoterInfo({
        regno,
        year,
        vice_president,
        general_secretary,
        assistant_general_secretary,
        organizing_secretary,
        sports_secretary,
        publication_secretary,
        assistant_publication_secretary
      });
      
      pushVote = await pushVote.save();

      return res.json(pushVote);
      
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  });

  voterRoter.get("/api/get-candidates", async (req, res) => {
    try {
      const votestatus = req.query.votestatus;
      //  console.log(messid);
      const candidates = await CandidateInfo.find({ votestatus  }); // jodi search functionality add korte hoy tobe ei find er moddhe search er character recieve korbe
  
      res.json(candidates);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  


module.exports = voterRoter;


