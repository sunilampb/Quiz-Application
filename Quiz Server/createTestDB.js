
const DataStore = require('nedb');
const quizDb = new DataStore({
    filename: __dirname + '/QuizDB',
    autoload: true
});

const questions = require('./questions.json');

const counterDb = new DataStore({
    filename: __dirname + '/counterDB',
    autoload: true
});

counterDb.insert({_id: "questionCount", value: 0}, function(err, doc) {
    "use strict";
    if (err) {
        console.log(err);
    } else {
        console.log(doc);
    }
});

counterDb.findOne({_id: "questionCount"}, function(err, doc){
    "use strict";
    let count = doc.value;
    let entries = questions.map(function(q, i) {
        return Object.assign({}, q, {_id: String(count + i)});
    });
    quizDb.insert(entries, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log(`Added ${docs.length} questions`);
            counterDb.update({_id: "questionCount"}, {$set: {value: count + questions.length}});
        }
    });
});



