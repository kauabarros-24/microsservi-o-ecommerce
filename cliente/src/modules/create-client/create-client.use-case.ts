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

    try {
      // Verificação para garantir que o cliente não existe
      const existingClient = await prismaClient.client.findFirst({
        where: {
          email: data.email,
        },
      });

      if (existingClient) {
        throw new Error('Cliente já existe');
      }

      // Criação do cliente
      const clientCreated = await prismaClient.client.create({
        data: {
          ...data,
        },
      });

      return clientCreated;
    } catch (error) {
      // Tratamento de erros
      console.error("Erro ao criar cliente:", error);
      throw new Error("Erro ao criar cliente");
    }
  }
}
