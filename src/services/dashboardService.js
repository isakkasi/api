const Ata = require("../models/Ata");
const Course = require("../models/Course");
const Question = require("../models/Question");


exports.questionsCount = async (query) => {
    // if (query) {
    //     const ataId = query.split("=")[1].slice(1, -1);
    //     return Question.find({ _ataId: ataId });
    // }
    return Question.countDocuments({});
};

exports.ataCount = async (query) => Ata.countDocuments({});
exports.coursesCount = async (query) => Course.countDocuments({});

