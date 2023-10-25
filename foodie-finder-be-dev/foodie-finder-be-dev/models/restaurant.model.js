const mongoose = require("mongoose");

const mongoose_delete = require("mongoose-delete");
const { DateTime } = require("mssql");

const restaurantSchema = new mongoose.Schema(
  {
    deleted: {
      type: "boolean",
      default: false,
    },
    resname: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      district: { type: String, required: true },
      city: { type: String, required: true },
    },
    timeOpen: { type: String, required: true },
    timeClose: { type: String, required: true },
    seats: { type: Number, required: true },
    typeOfRes: { type: String, required: true },
    averagePrice: Number,
    pointEvaluation: String,
    description: String,
    image: String,
    resMenuInfor: { type: mongoose.Schema.Types.ObjectId, ref: "menu", default: "Undefined" },
    //resCateInfor: {type: mongoose.Schema.Types.ObjectId, ref: 'restaurantCategories'},
    //resOwnerInfor: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'reviews'}],
    // reservations: [{type: mongoose.Schema.Types.ObjectId, ref: 'reservations'}],
  },
  { timestamps: true } // createAt, updateAt
);

restaurantSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = Restaurant;
