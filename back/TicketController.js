import Ticket from "./ticket.js";

class TicketController {
  async createTicket(req, res) {
    try {
      const { id, state, title, description, comments, file } = req.body;
      const result = await Ticket.create({
        id,
        state,
        title,
        description,
        comments,
        file,
      });
      return res.send(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const result = await Ticket.find({});

      return res.send(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getByTitle(req, res) {
    try {
      const { title } = req.params;

      const result = await Ticket.find({ title: `${title}` });
      return res.send(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getDataByState(req, res) {
    try {
      const { state } = req.params;
      if (!state) return res.status(400).json({ massage: "Status не указан" });
      const result = await Ticket.find({ state: state });
      return res.send(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ massage: "Id не указан" });
      }
      const result = await Ticket.findById(id);
      return res.json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateComment(req, res) {
    try {
      const { _id, comments } = req.body;
      if (!_id) {
        res.status(400).json({ massage: "Id не указан" });
      }
      const updatedTicket = await Ticket.findByIdAndUpdate(
        _id,
        { comments: comments },
        {
          new: true,
        }
      );
      return res.json(updatedTicket);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async updateState(req, res) {
    try {
      const { _id, state } = req.body;
      if (!_id) {
        res.status(400).json({ massage: "Id не указан" });
      }
      const updatedTicket = await Ticket.findByIdAndUpdate(
        _id,
        { state: state },
        {
          new: true,
        }
      );
      return res.json(updatedTicket);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ massage: "Id не указан" });
      }
      const ticket = await Ticket.findByIdAndDelete();
      return res.json(ticket);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new TicketController();
