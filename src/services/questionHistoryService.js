const QuestionHistory = require("../models/QuestionHistory");

exports.getAll = async (query) => {
    if (query) {
        const questionId = query.split("=")[1].slice(1, -1);
        return Question.find({ _questionId: questionId });
    }
    return Question.find({});
};

exports.create = async (data) => QuestionHistory.create(data);

// exports.getById = async (id) => {
//     return Question.findOne({_id: id});
// };

// exports.updateById = (id, question) => Question.findByIdAndUpdate({ _id: id._id }, question);

// exports.deleteById = (id) => Question.findByIdAndDelete(id);
