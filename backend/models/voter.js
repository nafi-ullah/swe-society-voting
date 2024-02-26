const mymongo = require("mongoose");

const voterSchema = mymongo.Schema({
    regno: {
        required: true,
        type: String,
        trim: true,
       
    },
    year: {
        required: true,
        type: String,
    },
   
    vice_president : {
        required: true,
        type: String,
       
    },
    general_secretary: {
        required: true,
        type: String,
    },
    assistant_general_secretary: {
        required: true,
        type: String,
    },
    organizing_secretary : {
        required: true,
        type: String,
    },
    sports_secretary : {
        required: true,
        type: String,
    },
    publication_secretary : {
        required: true,
        type: String,
    },
    assistant_publication_secretary : {
        required: true,
        type: String,
    }
});

const voter = mymongo.model("Voter", voterSchema);

module.exports = voter;