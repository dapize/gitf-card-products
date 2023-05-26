import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { productResolvers, productTypesDefs } from './schema/products';
import { default as connectDB } from './config/db';

const config = dotenv.config();
if (config.error) {
  throw new Error('Config enviroments missing');
}

const server = new ApolloServer({
  typeDefs: [productTypesDefs],
  resolvers: [productResolvers]
});

(async () => {
  await connectDB();
  const { url } = await startStandaloneServer(server, {
    listen: {
      port: 4000
    }
  });

  console.log(`🚀 Server ready at: ${url}`);
})();
