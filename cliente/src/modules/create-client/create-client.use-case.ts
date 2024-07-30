import { prismaClient } from "../../infra/database/prismaClient";

type CreateClientRequest = {
  name: string;
  password: string;
  email: string;
  phone: string; // Alterado para string
};

export class CreateClientUseCase {
  constructor() {}

  async execute(data: CreateClientRequest) {
    // Verificação para garantir que todos os campos obrigatórios estão presentes
    if (!data.name || !data.password || !data.email || !data.phone) {
      throw new Error("Todos os campos são obrigatórios");
    }

    // Verificação para garantir que o cliente não existe
    const customer = await prismaClient.client.findFirst({
      where: {
        email: data.email,
      },
    });

    if (customer) {
      throw new Error('Customer já existe');
    }

    // Criação do cliente
    const customerCreated = await prismaClient.client.create({
      data: {
        ...data,
      },
    });

    return customerCreated;
  }
}
