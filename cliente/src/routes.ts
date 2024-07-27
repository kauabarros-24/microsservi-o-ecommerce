import { Router } from "express";
import { CreateCustomerController } from "./modules/create-client/create-client.controller";

const router = Router();

router.post("/customers", (req, res) => {
    new CreateCustomerController().handle(req, res)
})

export { router }