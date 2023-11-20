// Written by Elijah Simmons

import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const paystubSchema = new Schema({
    employeeID: {
        type: String,
        required: true,
    },
    hoursWorked: {
        type: Number,
        required: true,
    },
    hourlyRate: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    });

const Paystub = models.Paystub || model('Paystub', paystubSchema);

export default Paystub;