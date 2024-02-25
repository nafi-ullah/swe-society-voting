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
      const votestatus = req.query.votestatus;
      //  console.log(messid);
      const candidates = await CandidateInfo.find({ votestatus  }); // jodi search functionality add korte hoy tobe ei find er moddhe search er character recieve korbe
  
      res.json(candidates);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  


module.exports = candidateRouter;


// {
//     "votestatus" : true,
//     "year" : "2024",
//     "candidateList": [
//         {
//          "candidateReg" : "2020831020",
//     "candidatePost" : "Assistant General Secretary",
//      "candidateName" : "Nixon",
//     "candidateImage" : "http://imageurl.com",
//      "candidateMarka" : "bamboo",
//     "candidateMarkaImage" : "http://imageurl.com"
//         },
//         {
//          "candidateReg" : "2020831020",
//     "candidatePost" : "Assistant General Secretary",
//      "candidateName" : "Arnob",
//     "candidateImage" : "http://imageurl.com",
//      "candidateMarka" : "bamboo",
//     "candidateMarkaImage" : "http://imageurl.com"
//         }
//     ]
// }