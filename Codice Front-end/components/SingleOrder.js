import styled from "styled-components";

const StyleOrder = styled.div`
    margin: 10px 0;
    padding: 5px 0;
    border-bottom: 3px solid #ddd;
    display: flex;
    gap: 15px;
    time{
        font-size: 1rem;
        font-weight: bold;
        color: #555;
    }
`;

const ProductRow = styled.div`
    span{
        color: #aaa;
    }
`;

const Address = styled.div`
    font-size: .8rem;
    line-height: 1rem;
    margin-top: 5px;
    color: #888;
`;

export default function SingleOrder({line_items,createdAt,...rest}) {
    return(
        <StyleOrder>
            <div>
                <time>{(new Date(createdAt)).toLocaleString()}</time>
                <Address>
                    {rest.name}<br />
                    {rest.email}<br />
                    {rest.streetAddress}<br />
                    {rest.postalCode} {rest.city}, {rest.country}
                </Address>
            </div>
            <div>
                {line_items.map(item => (
                    <ProductRow key={item.price_data.product_data.name}>
                        <span>{item.quantity} x </span>
                        {item.price_data.product_data.name}
                    </ProductRow>
                ))}
            </div>
            
            
        </StyleOrder>
    );
}