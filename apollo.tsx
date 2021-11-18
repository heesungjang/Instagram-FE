import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
    uri: "https://7c9c-114-202-230-52.ngrok.io/graphql",
    cache: new InMemoryCache(),
});

export default client;
