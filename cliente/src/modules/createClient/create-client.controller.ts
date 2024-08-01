import { Response, Request } from "express";
import { CreateClientUseCase } from "./create-client.usecase";

export class CreateClientController {
    constructor() {}

    async handle(req: Request, res: Response) {
        const useCase = new CreateClientUseCase();
        console.log('AQUI!');
        try {
            const result = await useCase.execute(req.body);
            console.log('AQUI2');
            return res.json(result);
        } catch (err) {
            console.error("OLÁ!");
            return res.status(400).json({ error: err });
        }
    }
}
