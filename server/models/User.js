const mongosse = require("mongoose");

const UserSchema = new mongosse.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 20,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongosse.model("User", UserSchema);
