const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name:{
      type: String,
      required: true,
      unique: false,
      trim: true,

    },
    lastName:{
      type: String,
      required: true,
      unique: false,
      trim: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 7
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthday:{
      type: Date,
    },
    foto:{
      type: String,
    },
    genero:{
      type: String,
      enum:["Men", "Women", "Other"]
    },
    paymentMethod:[{type: Schema.Types.ObjectId, ref:"PaymentMethod"}],
    role:{
      type: String,
      enum: ["customer", "admin"],
      default:"customer"
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;