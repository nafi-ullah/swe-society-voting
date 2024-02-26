const express = require("express");
const VoterInfo = require("../models/voter");
const CandidateInfo = require("../models/candidate");


const voterRouter = express.Router();


voterRouter.post("/api/votecast", async (req, res) => {

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



//http://localhost:3000/api/vote-count?year=2024
  voterRouter.get("/api/vote-count", async (req, res) => {
    try {

        const year = req.query.year;
        const candidates = await CandidateInfo.find({year}); 
        const allCandidates = candidates.map(candidate => candidate.candidateList);
        const flattenedCandidates = allCandidates.flat();

        const candIds = flattenedCandidates.map(individual => individual.candidateId);

        for (let idno = 0; idno < candIds.length; idno++) {
            let post = candIds[idno].slice(10);

            const votes = await VoterInfo.find({ candidatePost: post, candidateId: candIds[idno] } );
            console.log(votes);

        }
        

     
     
      
    //  const candidates = await VoterInfo.find({ votestatus  }); // jodi search functionality add korte hoy tobe ei find er moddhe search er character recieve korbe
  
      res.json({candIds});
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  


module.exports = voterRouter;


