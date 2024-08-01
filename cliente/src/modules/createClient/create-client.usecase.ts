import { prismaClient } from "../infra/database/prismaClient"

type CreateClientRequest = {
    name: string,
    password: string,
    email: string,
    phone: string
}


export class CreateClientUseCase {
    constructor() {}
    async execute (data: CreateClientRequest) {
        const customer = await prismaClient.clients.findFirst({
            where: {
                email: data.email
            }
        })
        if (customer) throw new Error("Customer já existe")
        const customerCreated = await prismaClient.clients.create({
            data: {
                ...data
            }
        })
        return customerCreated
    }
}