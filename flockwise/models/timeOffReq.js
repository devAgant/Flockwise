//Written by Isabella Pereira
import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const TimeOffReqSchema = new Schema({
    begin: {
        type: Date, //maybe replace with string?
        required: true,
    },
    end: {
        type: Date, 
        required: true,
    },
    reqCode: {
        type: Number, 
        required: true,
    },
    belongsTo: {
        type: Number, //employeeID
        required: true,
    },
    approved: {
        type: Boolean,
        default: false,
    },
    notes: {
        type: String, 
        default: '',
    },
});

let TimeOffReq;
try{
    TimeOffReq = mongoose.model('TimeOffReq');
} catch (error){
    TimeOffReq = mongoose.model('TimeOffReq', TimeOffReqSchema);
}
export default TimeOffReq;