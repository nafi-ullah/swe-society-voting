const mongoose = require('mongoose');
const { abbreviatePostName } = require("../generator");



const candidateSchema = new mongoose.Schema({
    candidateId: { type: String },
    candidateReg: { type: String, required: true },
    candidatePost: { type: String, required: true },
    candidateName: { type: String, required: true },
    candidateImage: { type: String },
    candidateMarka: { type: String },
    candidateMarkaImage: { type: String },
});

candidateSchema.pre('save', function (next) {
    if (!this.candidateId) {
        const abbreviatedName = abbreviatePostName(this.candidatePost);
        this.candidateId = this.candidateReg + abbreviatedName;
    }
    next();
});


const electionSchema = new mongoose.Schema({
    votestatus: { type: Boolean, default: true },
    year: { type: String, required: true },
    candidateList: [candidateSchema],
});

// Create a model based on the schema
const Candidates = mongoose.model('Candidates', electionSchema);

// Export the model
module.exports = Candidates;
