import { Router } from "express";
import { CreateClientController } from "../../createClient/create-client.controller";

const router = Router()

router.post("/customers", (req, res) => {
    new CreateClientController().handle(req, res)
})

export { router }