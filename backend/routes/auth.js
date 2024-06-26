const express = require("express");
const Member = require("../models/user");
const bcryption = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateString } = require("../generator");
const auth = require("../middlewares/auth");
const VoterInfo = require("../models/voter");


const authRouter = express.Router();


authRouter.post("/api/sign-reg", async (req, res) => {
  const pass = generateString(6);
  const { regno } = req.body;


  try {
    // Check if all fields are present
    

   
    const memberCredential = await Member.findOne({ regno });

    if (memberCredential) {
        return res.status(400).json({ error: "member already exist" });
      
    }
    

    let member = new Member({

      regno,
      password: pass

    });

    member = await member.save();

   
    return res.json(member);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

authRouter.post("/api/range-pass", async (req, res) => {
    
    const { from, to } = req.body;
  
    let numFrom = parseInt(from, 11);
    let numTo = parseInt(from, 11);
    try {
     
        for (let regroll = from; regroll <= to; regroll++) {
            let pass = generateString(6);
            let trimmed = pass.trim(); 
        
     
      const memberCredential = await Member.findOne({ regno: regroll });
  
      if (!memberCredential) {
        let member = new Member({
  
            regno: regroll,
            password: trimmed
      
          });
      
         
          member = await member.save();
    
          console.log(regroll);
        }
      
      }
      
    
     
      return res.json({"reg added ": `from ${from} to ${to}`});
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  });




authRouter.post("/api/signin", async (req, res) => {
  const { regno, password } = req.body;
  
  try {
   
    let isVoted = false;
    const memberCredential = await Member.findOne({ regno }); 
    const voted  = await VoterInfo.findOne({ regno  });
    if(voted){
      isVoted = true;
    }

    if (!memberCredential) {
      return res
        .status(400)
        .json({ error: "This regno is not found" });
    }

    const isPassMatch = password === memberCredential.password
     

    if (!isPassMatch) {
      return res.status(400).json({ msg: "password invalid" });
    }

    const token = jwt.sign({ id: memberCredential._id }, "passwordKey");


    // during signin now i want to check if any data exist today, if not, then post
 

    return res.json({ token, regno, isVoted });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});


authRouter.get("/api/allcredential", async (req, res) => {
  try {
    
    //  console.log(messid);
    const ids = await Member.find({}); // jodi search functionality add korte hoy tobe ei find er moddhe search er character recieve korbe

    res.json(ids);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});





authRouter.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = jwt.verify(token, "passwordKey");
    if (!verified) return res.json(false);

    const user = await Member.findById(verified.id);
    if (!user) return res.json(false);
    res.json(true);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// get user data
authRouter.get("/", auth, async (req, res) => {
  const member = await Member.findById(req.user);
  res.json({ ...member._doc, token: req.token });
});

//-----------mess name update--------------------



module.exports = authRouter;