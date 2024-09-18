// Modifica l'import nel tuo file _app.js
import '../styles/globals.css';
import '../styles/stats.css';
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
