const mymongo = require("mongoose");

const memberSchema = mymongo.Schema({
   
    regno: {
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                const re= /^\d{10}$/;
                return value.match(re);
            },
            message: 'Please enter a valid 10-digit registration number',
        }
    },
    password: {
        required: true,
        type: String,
        validator: (value) => {
            
            return value.lenght == 6;
        },
        message: 'Please enter valid password',
    },
});

const member = mymongo.model("Member", memberSchema);

module.exports = member;