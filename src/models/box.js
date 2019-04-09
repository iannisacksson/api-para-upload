const mongoose = require('mongoose');

const box = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("box", box);