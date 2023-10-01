const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    is_active: { type: Boolean, defual: true },
    created_by: { type: mongoose.SchemaTypes.ObjectId, require: true },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

class Categories extends mongoose.Model {}

schema.loadClass(Categories);
module.exports = mongoose.model("categories", schema);
