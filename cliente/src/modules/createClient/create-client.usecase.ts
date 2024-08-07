import { prismaClient } from "../infra/database/prismaClient"
import { kafka } from "../infra/provider/kafka"
import { KafkaSendMessage } from "../infra/provider/kafka/producer"

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
        const kafkaProducer = new KafkaSendMessage()
        await kafkaProducer.execute("CUSTOMER CREATED", customerCreated)        
        return customerCreated
    }
}