const express = require("express");
const CandidateInfo = require("../models/candidate");


const candidateRouter = express.Router();


candidateRouter.post("/api/candidates", async (req, res) => {

  const {  votestatus, year, candidateList } = req.body;


    try {

      const candidates = await CandidateInfo.findOne({ year });
      if (candidates) {
        return res.status(400).json({ error: "Candidates already listed" });
    }
     
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
  //http://localhost:3000/api/get-candidates?post=assistant_general_secretary&year=2024


  candidateRouter.get("/api/get-candidates", async (req, res) => {
    try {
     
      const post = req.query.post;
      const year =  req.query.year;

      if (!year || !post) {
        return res.status(400).json({ error: 'Both year and post parameters are required' });
      }

      const candidates = await CandidateInfo.find({
        year
      });
      const allCandidates = candidates.map(candidate => candidate.candidateList);
      const flattenedCandidates = allCandidates.flat();

      const filteredData = flattenedCandidates.filter(element => element.candidatePost === post);

  
      res.json({ candidateList: filteredData || [] });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  


module.exports = candidateRouter;


// {
//   "votestatus" : true,
//   "year" : "2024",
//   "candidateList": [
//       {
//        "candidateReg" : "2020831020",
//   "candidatePost" : "assistant_general_secretary",
//    "candidateName" : "Nixon",
//   "candidateImage" : "http://imageurl.com",
//    "candidateMarka" : "bamboo",
//   "candidateMarkaImage" : "http://imageurl.com"
//       },
//       {
//        "candidateReg" : "2020831022",
//   "candidatePost" : "assistant_general_secretary",
//    "candidateName" : "Arnob",
//   "candidateImage" : "http://imageurl.com",
//    "candidateMarka" : "bamboo",
//   "candidateMarkaImage" : "http://imageurl.com"
//       },
//       {
//        "candidateReg" : "2020831022",
//   "candidatePost" : "general_secretary",
//    "candidateName" : "Mehraj",
//   "candidateImage" : "http://imageurl.com",
//    "candidateMarka" : "bamboo",
//   "candidateMarkaImage" : "http://imageurl.com"
//       }
//   ]
// }