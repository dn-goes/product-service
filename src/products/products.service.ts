import { Injectable, NotFoundException } from '@nestjs/common';

// Interface do produto
export interface Product {
  productId: string;
  name: string;
  price: number;
  description: string;
}

@Injectable()
export class ProductsService {
  // Lista de produtos em memória (simulando banco de dados)
  private readonly products: Product[] = [
    {
      productId: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
      name: 'Camiseta NestJS Pro',
      price: 99.9,
      description:
        'Uma camiseta de alta qualidade para desenvolvedores profissionais.',
    },
    {
      productId: 'b2c3d4e5-f6a7-8901-2345-67890abcdef1',
      name: 'Caneca TypeScript',
      price: 25.5,
      description: 'Uma caneca que entende os seus tipos.',
    },
  ];

  // Retorna todos os produtos
  findAll(): Product[] {
    return this.products;
  }

  // Busca um produto pelo ID
  findOne(id: string): Product {
    const product = this.products.find((p) => p.productId === id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }
}
