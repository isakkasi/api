const Type = require("../models/Type");

exports.getAll = async (query) => {
    if (query) {
        const typeId = query.split("=")[1].slice(1, -1);
        return Type.find({ _typeId: typeId });
    }
    return Type.find({});
};

exports.create = async (ata) => Type.create(ata);

exports.getById = async (id) => {
    return Type.findOne({_id: id});
};

exports.updateById = (id, ata) => Type.findByIdAndUpdate({ _id: id._id }, type);

exports.deleteById = (id) => Type.findByIdAndDelete(id);
