const mymongo = require("mongoose");

const voterSchema = mymongo.Schema({
    regno: {
        required: true,
        type: String,
        trim: true,
       
    },
   
    vp: {
        required: true,
        type: String,
        trim: true,
       
    },
    gs: {
        required: true,
        type: String,
    },
    ags: {
        required: true,
        type: String,
    },
    gs: {
        required: true,
        type: String,
    },
    os: {
        required: true,
        type: String,
    },
    ss: {
        required: true,
        type: String,
    },
    ps: {
        required: true,
        type: String,
    },
    aps: {
        required: true,
        type: String,
    }
});

const member = mymongo.model("Voter", voterSchema);

module.exports = member;