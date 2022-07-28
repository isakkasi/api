const Question = require("../models/Question");
const QuestionComments = require("../models/QuestionComments");

exports.getAll = async (query) => {
    if (query) {
        const questionId = query.split("=")[1].slice(1, -1);
        return Question.find({ _questionId: questionId }).populate('ata');
    }
    // console.log('get')

    // return Question.find({}).populate('ata');
    return Question.find({}).populate('ata');
};

exports.create = async (question) => Question.create(question);

exports.getById = async (id, populated) => {
    return Question.findOne({_id: id}).populate('ata').populate('author');
};

exports.updateById = (id, question) => Question.findByIdAndUpdate({ _id: id._id }, question);

exports.deleteById = (id) => Question.findByIdAndDelete(id);


exports.createComment = (questionId, comment) => QuestionComments.create(
    {
        questionId: questionId,
        comment: comment.comment,
        author: comment.author,
    });

exports.getAllComments = (id) => QuestionComments.find({questionId: id}).populate('author')