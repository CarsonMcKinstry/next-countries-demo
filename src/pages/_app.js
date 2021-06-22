import { ApolloClientProvider } from "../graphql";
import "tailwindcss/tailwind.css";

function AppBoostrap({ Component, pageProps }) {
  return (
    <ApolloClientProvider>
      <Component {...pageProps} />
    </ApolloClientProvider>
  );
}

export default AppBoostrap;
