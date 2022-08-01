const { model, Schema } = require('mongoose');

const userRolesSchema = new Schema(
    {
        role: {
            type: String,
            enum: ['User', 'Examiner', 'Instructor', 'Invigilator', 'Admin'],
        },
        question: {
            create: {
                type: Boolean,
                default: false,
            },
            del: {
                type: Boolean,
                default: false,
            },
        },
        exam: {
            create: {
                type: Boolean,
                default: false,
            },
            del: {
                type: Boolean,
                default: false,
            },
        },
        configuration: {
            create: {
                type: Boolean,
                default: false,
            },
            del: {
                type: Boolean,
                default: false,
            },
        },
        settings: {
            edit: {
                type: Boolean,
                default: false,
            },
        },
    },
    {
        timestamps: true,
    }
);

const UserRoles = model('UserRoles', userRolesSchema);

module.exports = UserRoles;
