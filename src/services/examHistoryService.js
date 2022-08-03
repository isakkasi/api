const ExamHistory = require("../models/ExamHistory");

exports.getAll = async (query) => {
    if (query) {
        const examId = query.split("=")[1].slice(1, -1);
        return ExamHistory.find({ _examId: examId });
    }
    return ExamHistory.find({});
};

exports.create = async (data) => ExamHistory.create(data);

// exports.getById = async (id) => {
//     return Question.findOne({_id: id});
// };

// exports.updateById = (id, question) => Question.findByIdAndUpdate({ _id: id._id }, question);

// exports.deleteById = (id) => Question.findByIdAndDelete(id);
