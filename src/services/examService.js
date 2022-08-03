const Exam = require('../models/Exam');
const ExamHistory = require('../models/ExamHistory');

exports.getAll = async (query) => {
    if (query) {
        const examId = query.split('=')[1].slice(1, -1);
        return Exam.find({ _examId: examId });
    }
    return Exam.find({});
};

exports.create = async (question) => Exam.create(question);

exports.getById = async (id) => Exam.findOne({ _id: id });

exports.updateById = (id, exam) => Exam.findByIdAndUpdate({ _id: id._id }, exam);

exports.deleteById = (id) => Exam.findByIdAndDelete(id);

exports.getHistory = (id) => ExamHistory.find({ _examId: id });
