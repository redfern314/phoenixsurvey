var mongoose = require('mongoose');

var surveySchema = mongoose.Schema(
    {
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        description: String,
        dateCreated: Date,
        dateExpire: Date,
        active: Boolean,
        responses: [{ text: String, votes: Number }]
      }
);

var userSchema = mongoose.Schema(
    {
        surveys: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schema' }]
    }
);

mongoose.model('Survey', surveySchema);
mongoose.model('User', userSchema);