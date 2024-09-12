const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId
    },
    lens_type: String,
    frame_type: String,
    amount: String,
    quantity: Number,
    remarks: String,
    re_sph: Number,
    re_cyl: Number,
    re_axis: Number,
    re_near_sph: Number,
    re_near_cyl: Number,
    re_near_axis: Number,
    le_sph: Number,
    le_cyl: Number,
    le_axis: Number,
    le_near_sph: Number,
    le_near_cyl: Number,
    le_near_axis: Number,
});
module.exports = mongoose.model("Order", orderSchema);
