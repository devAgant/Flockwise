//Written by Isabella Pereira
import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const ShiftSchema = new Schema({
    clockIn: {
        type: Date, //maybe replace with string?
        required: true,
    },
    clockOut: {
        type: Date, 
        required: true,
    },
    shiftCode: {
        type: Number, 
        required: true,
    },
    belongsTo: {
        type: Number, //employeeID
        required: true,
    },
});

let Shift;
try{
    Shift = mongoose.model('Shift');
} catch (error){
    Shift = mongoose.model('Shift', ShiftSchema);
}
export default Shift;