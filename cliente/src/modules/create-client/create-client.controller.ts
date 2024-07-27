import { Response, Request } from "express";
import { CreateClientUseCase } from "./create-client.use-case";

export class CreateCustomerController {
    constructor () {}
    
    async handle(request: Request, response: Response) {
        const useCase = new CreateClientUseCase()
        try {
            const result = await useCase.execute(request.body);
            return response.json(result)
        } catch (err){
            return response.status(400).json(err)
            
        }


    }
}