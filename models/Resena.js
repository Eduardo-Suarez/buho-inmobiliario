const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const resenaSchema = new Schema(
  {
    category:{
      type: String,
      required: true,
      unique: false,
      trim: true,
      enum:["inquilino", "profesional inmobiliario", "notaria", "constructora"]

    },
    name:{
      type: String,
      required: true,
      unique: false,
      trim: true
    },
    report: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    calification: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Resena = model("Resena", resenaSchema);

module.exports = Resena;