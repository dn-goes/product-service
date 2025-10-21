import { Injectable, NotFoundException } from '@nestjs/common';

export interface Product {
  productId: string;
  name: string;
  // BUG de contrato: price como string (deveria ser number)
  price: string;
  description: string;
}

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    {
      productId: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
      name: 'Camiseta NestJS Pro ',
      // BUG: preço como string
      price: '99.9',
      description:
        'Uma camiseta de alta qualidade para desenvolvedores profissionais.',
    },
    {
      productId: 'b2c3d4e5-f6a7-8901-2345-67890abcdef1',
      name: 'Caneca TypeScript',
      price: '25.5',
      description: 'Uma caneca que entende os seus tipos.',
    },
  ];

  async findAll(): Promise<Product[]> {
    // BUG de performance: delay artificial de 5s
    await new Promise((resolve) => setTimeout(resolve, 5000)); // BUG: delay desnecessário
    return this.products; // BUG: retorna todos os produtos sem paginação
  }

  findOne(id: string): Product {
    // BUG de lógica: ignora o id e retorna sempre o primeiro produto
    const product = this.products[0]; // BUG: deveria buscar pelo id
    if (!product) {
      // BUG de lógica: nunca será verdadeiro com a implementação atual
      throw new NotFoundException(`Product with ID ${id} not found`); // BUG: exceção nunca será lançada
    }
    return product;
  }
}
