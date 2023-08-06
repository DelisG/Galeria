import mongoose from "mongoose";

const fotoSchema = new mongoose.Schema({
  urlFoto: { type: String, required: true },
  descricao: { type: String, required: false },
  data: { type: String, required: false },
});

const foto = mongoose.model("foto", fotoSchema);

export default foto;
