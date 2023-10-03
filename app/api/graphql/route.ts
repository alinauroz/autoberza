import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { NextRequest } from 'next/server';
import resolvers from '@/server/graphql/resolvers';
import typeDefs from '@/server/graphql/typedefs';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});
const handler = startServerAndCreateNextHandler<NextRequest>(server);

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}