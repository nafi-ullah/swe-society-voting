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
      console.log(pushVote);
      
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
        const candName = flattenedCandidates.map(individual => individual.candidateName);
        const candMarka = flattenedCandidates.map(individual => individual.candidateMarka);
        const candImage = flattenedCandidates.map(individual => individual.candidateImage);
        const candMarkaImage = flattenedCandidates.map(individual => individual.candidateMarkaImage);
        const candPost = flattenedCandidates.map(individual => individual.candidatePost);


        // let post = candIds[0].slice(10);
        //  post = "general_secretary";
        //  const id = "2019831029general_secretary";
        // let query = { [post]: id };
        
        // const votes = await VoterInfo.find(query );
        //     console.log(votes);

            let results = [];

        for (let idno = 0; idno < candIds.length; idno++) {
            let post = candIds[idno].slice(10);
           let query = { [post]: candIds[idno] };
           
           const votes = await VoterInfo.find(query );

           let candResult = {
                candidateName : candName[idno],
                candidateMarka : candMarka[idno],
                candidateImage : candImage[idno],
                candidateMarkaImage : candMarkaImage[idno],
                candidatePost: candPost[idno],
                vote : votes.length 
           };
          
          
          
           results.push(candResult);
              // console.log(`${candIds[idno]} got ====> ` + votes.length);

        }
      
      
    //  const candidates = await VoterInfo.find({ votestatus  }); // jodi search functionality add korte hoy tobe ei find er moddhe search er character recieve korbe
  
      res.json(results);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  voterRouter.get("/api/vote-verify", async (req, res) => {
    try {

        const regno = req.query.regno;


        const candidates = await VoterInfo.find({regno}); 
        let voted = [];

       const vp = candidates[0].vice_president;
       voted.push(vp);
       const gs = candidates[0].general_secretary;
       voted.push(gs);
       const ags= candidates[0].assistant_general_secretary;
       voted.push(ags);
       const os= candidates[0].organizing_secretary;
       voted.push(os);
       const ss = candidates[0].sports_secretary;
       voted.push(ss);
       const ps= candidates[0].publication_secretary;
       voted.push(ps);
       const aps=  candidates[0].assistant_publication_secretary;
       voted.push(aps);
          const votedName = [];
       

       const candidatesList = await CandidateInfo.find({}); 
       const allCandidates = candidatesList.map(candidate => candidate.candidateList);
        const flattenedCandidates = allCandidates.flat();


        const candIds = flattenedCandidates.map(individual => individual.candidateId);
        // console.log(candIds);
        const candName = flattenedCandidates.map(individual => individual.candidateName);

        for (let i = 0; i < voted.length; i++) {
          for (let j = 0; j <candIds.length ; j++) {
                  if(voted[i] === candIds[j]){
                    votedName.push(candName[j]);
                  }

          }
        }



     
      
      
    //  const candidates = await VoterInfo.find({ votestatus  }); // jodi search functionality add korte hoy tobe ei find er moddhe search er character recieve korbe
  
      res.json(votedName);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });



  


module.exports = voterRouter;


