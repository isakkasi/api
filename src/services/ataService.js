const Ata = require("../models/Ata");

exports.getAll = async (query) => {
    if (query) {
        const ataId = query.split("=")[1].slice(1, -1);
        return Ata.find({ _ataId: ataId });
    }
    return Ata.find({});
};

exports.create = async (ata) => Ata.create(ata);

exports.getById = async (id) => {
    return Ata.findOne({_id: id});
};

exports.updateById = (id, ata) => Ata.findByIdAndUpdate({ _id: id._id }, ata);

exports.deleteById = (id) => Ata.findByIdAndDelete(id);
