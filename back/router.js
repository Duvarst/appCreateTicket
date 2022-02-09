import Router from "express";
import TicketController from "./TicketController.js";
import fileController from "./fileController.js";
import cors from "cors";

const router = new Router();

router.options("/tickets", cors());
router.options("/tickets/:id", cors());
router.options("/tickets/state/:state", cors());
router.options("/tickets/title/:title", cors());
router.options("/tickets/comment", cors());
router.options("/tickets/image/upload", cors());

router.post("/tickets", cors(), TicketController.createTicket);
router.post("/tickets/image/upload", cors(), fileController.uploadFile);

router.get("/tickets", cors(), TicketController.getAll);
router.get("/tickets/state/:state", cors(), TicketController.getDataByState);
router.get("/tickets/title/:title", cors(), TicketController.getByTitle);
router.get("/tickets/:id", cors(), TicketController.getOne);

router.put("/tickets/comment", cors(), TicketController.updateComment);
router.put("/tickets/state", cors(), TicketController.updateState);
router.delete("/tickets/:id", cors(), TicketController.delete);

export default router;
