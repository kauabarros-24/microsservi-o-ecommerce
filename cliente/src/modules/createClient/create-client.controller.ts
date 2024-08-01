import { Response, Request, response } from "express";
import { CreateClientUseCase } from "./create-client.usecase";

export class CreateClientController {
    constructor() {}

    async handle(req: Request, res: Response) {
        const useCase = new CreateClientUseCase();
        try {
            const result = await useCase.execute(req.body);
            return response.json(result)

        } catch (err) {
            return res.status(400).json(res);
            
        }
    
    }
}