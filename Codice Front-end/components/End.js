import styled from "styled-components";
import MastercardIcon from "./icons/MastercardIcon";
import AmericanExpressIcon from "./icons/AmericanExpressIcon";
import UnionPayIcon from "./icons/UnionPayIcon";
import VisaIcon from "./icons/VisaIcon";
import EmailIcon from "./icons/EmailIcon";

const StyledHeader = styled.header`
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start; 
`;

const Colonna = styled.div`
    text-align: center;
    align-self: flex-start; 
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center; /* Allinea gli elementi al centro verticalmente */
`;

const Powered = styled.div`
    margin-top: 20px; /* Aggiungi uno spazio tra le colonne e il testo "Powered by" */
    text-align: center;
    color: #ffffff;
`;

const PaymentMethodsImages = styled.div`
    padding: 7px;
    justify-content: space-around;
`;

export default function End() {
    return (
        <><StyledHeader>
            <Colonna>
                <h3>About Us</h3>
                <p>Il nostro E-commerce è stato sviluppato per rendere l esperienza di acquisto e di visualizzazione rapida e alla portata di tutti</p>
            </Colonna>

            <Colonna>
                <h3>Contact Info</h3>
                <p><EmailIcon /> nicola.galiero001@studenti.uniparthenope.it</p>
                <p><EmailIcon /> nicola.viscillo001@studenti.uniparthenope.it</p>
            </Colonna>

            <Colonna>
                <h3>Payment Methods</h3>
                <PaymentMethodsImages>
                    {/* Inserisci le tue immagini qui */}
                    <MastercardIcon />
                    <AmericanExpressIcon />
                    <UnionPayIcon />
                    <VisaIcon />
                </PaymentMethodsImages>
            </Colonna>
        </StyledHeader><StyledHeader>
                <Powered>Creato e sviluppato da Nicola Galiero e Nicola Viscillo</Powered>
        </StyledHeader></>
        ); 
        

 }  