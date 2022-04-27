import path from 'node:path';

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ApolloDriver } from '@nestjs/apollo';

import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';

import { ProductsService } from '../services/products.service';
import { PurchasesService } from '../services/purchases.service';
import { CustomersService } from '../services/customers.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    // Resolvers

    ProductsResolver,
    PurchasesResolver,
    // Services

    ProductsService,
    PurchasesService,
    CustomersService,
  ],
})
export class HttpModule {}
