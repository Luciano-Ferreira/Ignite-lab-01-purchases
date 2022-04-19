import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { Product } from '../models/product';

@Resolver()
export class ProductsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Product])
  products() {
    return this.prisma.product.findMany();
  }
}
