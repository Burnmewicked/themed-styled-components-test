import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
min-height: 400px;
background-image: url("https://images.unsplash.com/photo-1525667218880-145f026b0ad0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=148cdc6841291ccfc6c5b7f03f51fbac&auto=format&fit=crop&w=1924&q=80");
/* background-image: url("./images/purple.jpg"); */
background-repeat: no-repeat;
background-size: cover;
background-position: center top;
filter: grayscale(100%); 

@media (max-width: 768px) {
    min-height: 250px;
}
`;

const Banner = () => {
    return (
        <div>
            <ImageContainer />
        </div>
    );
};

export default Banner;