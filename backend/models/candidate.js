const mongoose = require('mongoose');


const candidateSchema = new mongoose.Schema({
    candidateId: { type: String, required: true },
    candidatePost: { type: String, required: true },
    candidateName: { type: String, required: true },
    candidateImage: { type: String },
    candidateMarka: { type: String },
    candidateMarkaImage: { type: String },
});


const electionSchema = new mongoose.Schema({
    votestatus: { type: Boolean, default: true },
    year: { type: Number, required: true },
    candidateList: [candidateSchema],
});

// Create a model based on the schema
const Candidates = mongoose.model('Candidates', electionSchema);

// Export the model
module.exports = Candidates;
