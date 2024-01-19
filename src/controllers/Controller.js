class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAllRegisters(req, res) {
    try {
      const itemsList = await this.entidadeService.getAllRegistersService();
      return res.status(200).send(itemsList);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async getRegisterById(req, res) {
    const id = Number(req.params.id);
    try {
      const item = await this.entidadeService.getRegisterByIdService(id);
      return res.status(200).send(item);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async createRegister(req, res) {
    const data = req.body;
    try {
      const newData = await this.entidadeService.createRegisterService(data);
      return res.status(200).send(newData);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async updateRegister(req, res) {
    const id = Number(req.params.id);
    const data = req.body;

    try {
      const wasUpdated = await this.entidadeService.updateRegisterService(
        data,
        id
      );

      if (!wasUpdated) {
        res.status(400).send({ message: "Register has not been updated" });
      } else {
        res.status(200).send({ message: "Register updated!" });
      }
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async deleteRegister(req, res) {
    const id = Number(req.params.id);
    try {
      await this.entidadeService.deleteRegisterService(id);
      return res.status(200).send({ message: `Register ${id} deleted` });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = Controller;
