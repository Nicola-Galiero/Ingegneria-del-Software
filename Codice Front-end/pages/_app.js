import { CartContextProvider } from "@/components/CartContext";
import { SessionProvider } from "next-auth/react";
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body{
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
  hr{
    display: block;
    border: 0;
    border-top: 1px solid #566FFD;   
  }
`;

export default function App({Component,pageProps: {session, ...pageProps}}){
    return (
        <>
            <GlobalStyles />
            <SessionProvider session={session}>
              <CartContextProvider>
                <Component {...pageProps} />
              </CartContextProvider>
            </SessionProvider>          
        </>       
    );
}


  
