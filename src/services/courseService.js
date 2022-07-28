const Course = require("../models/Course");

exports.getAll = async (query) => {
    if (query) {
        const courseId = query.split("=")[1].slice(1, -1);
        return Course.find({ _courseId: courseId });
    }
    return Course.find({});
};

exports.create = async (course) => Course.create(course);

exports.getById = async (id) => {
    return Course.findOne({_id: id});
};

exports.updateById = (id, course) => Course.findByIdAndUpdate({ _id: id._id }, course);

exports.deleteById = (id) => Course.findByIdAndDelete(id);
