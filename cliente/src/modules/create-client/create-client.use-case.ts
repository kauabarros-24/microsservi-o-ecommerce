import { prismaClient } from "../../infra/database/prismaClient"

type CreateClientRequest = {
    name: string
    password: string
    email: string
    phone: number

}

export class CreateClientUseCase {
    constructor() {}

    async execute(data: CreateClientRequest) {
        const customer = await prismaClient.client.findFirst({
            where: {
                email: data.email,
            },
        })
        if (customer) throw new Error('Customer já existe');

        const customerCreated = await prismaClient.client.create({
            data: {
                ...data,
            },
        })

        return customerCreated
        
    }
 }