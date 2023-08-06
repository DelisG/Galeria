import fotos from "../models/fotos.js";

class FotoController {

  static getAllFotos = (req, res) => {
    fotos.find((err, fotos) => {
      res.status(200).json(fotos);
    });
  };

  static createFotos = (req, res) => {
    let foto = new fotos(req.body);

    foto.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar foto` });
      } else {
        res.status(201).send(foto.toJSON());
      }
    });
  };

  static getByIdFotos = (req, res) => {
    const id = req.params.id;

    fotos.findById(id, (err, fotos) => {
      if (err) {
        res
          .status(400)
          .send({ mensage: `${err.message} - Id da foto não localizado` });
      } else {
        res.status(200).send(fotos);
      }
    });
  };

  static updateFotos = (req, res) => {
    const id = req.params.id;

    fotos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "foto atualizada com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteFotos = (req, res) => {
    const id = req.params.id;

    fotos.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "foto removida com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteAllFotos = async (req, res) => {
    try {
      await fotos.deleteMany({});
      res
        .status(200)
        .send({ message: "Todos as fotos foram removidas com sucesso" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
}

export default FotoController;
