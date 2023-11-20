//Written by Isabella Pereira
import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const EditReqSchema = new Schema({
    clockIn: {
        type: Date, //maybe replace with string?
        required: true,
    },
    clockOut: {
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
});

let EditReq;
try{
    EditReq = mongoose.model('EditReq');
} catch (error){
    EditReq = mongoose.model('EditReq', EditReqSchema);
}
export default EditReq;