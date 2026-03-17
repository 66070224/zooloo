import { model, models, Schema } from "mongoose";

const animalSchema = new Schema({
  name: { type: String, require: true },
  group: { type: String, require: true },
});

export default models.Animal || model("Animal", animalSchema);
