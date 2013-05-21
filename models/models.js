var mongoose = require('mongoose');

var surveySchema = mongoose.Schema(
    {id: String,
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        textcolor: String,
        textsize: String
      }
);

var userSchema = mongoose.Schema(
    {
        id: String,
        surveys: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schema' }]
    }
);

mongoose.model('Survey', surveySchema);
mongoose.model('User', userSchema);