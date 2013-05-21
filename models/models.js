var mongoose = require('mongoose');

var surveySchema = mongoose.Schema(
    {
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        textcolor: String,
        textsize: String
      }
);

var userSchema = mongoose.Schema(
    {
        surveys: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schema' }],
        active: Boolean
    }
);

mongoose.model('Survey', surveySchema);
mongoose.model('User', userSchema);