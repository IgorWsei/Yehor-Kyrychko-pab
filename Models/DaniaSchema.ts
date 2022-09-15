const mongooseDanie = require("mongoose");
const SchemaDanie = mongooseDanie.Schema;

let DanieSchema = new SchemaDanie(
  {
    nazwa: {
      type: String,
      required: true,
    },
    cena: {
      type: Number,
      required: true,
    },
    kategoria: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Danie = mongooseDanie.model("Danie", DanieSchema);
module.exports = Danie;