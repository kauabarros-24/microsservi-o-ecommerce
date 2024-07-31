import { Response, Request } from "express";
import { CreateClientUseCase } from "./create-client.use-case";

export class CreateCustomerController {
    constructor() {}

    async handle(request: Request, response: Response) {
        const useCase = new CreateClientUseCase();
        try {
            const result = await useCase.execute(request.body);
            return response.status(201).json(result);
        } catch (err) {
            // Determina o status adequado baseado no tipo de erro
            if (err.message === 'Cliente já existe') {
                return response.status(409).json({ error: err.message });
            }
            return response.status(400).json({ error: err.message });
        }
    }
}
