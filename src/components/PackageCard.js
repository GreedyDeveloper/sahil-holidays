import React from 'react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

const Container = styled.div`
    background-color: #fff;
    border: 1px solid #e7e7e7;
    border-radius: 16px;
    width: 416px;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    margin-top: 20px;
`;

const Image = styled.img`
    border-radius: 16px 16px 0 0;
    object-fit: cover;
    width: 414px;
    aspect-ratio: auto 414 / 200;
    height: 200px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 16px 16px;
    flex: 1;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
`;

const Title = styled.p`
    font-weight: 900;
    font-size: 18px;
    line-height: 28px;
    color: ${ theme.colors.black};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;
    padding-right: 10px;
`;

const Duration = styled.div`
    border: 1px solid #16477f;
    border-radius: 4px;
    padding: 2px 4px;
    color: #16477f;
    font-size: 12px;
    font-weight: 700;
`;

const Itinerary = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px solid #d8d8d8;
    margin-bottom: 12px;
    padding-bottom: 12px;

    & > span {
        font-size: ${theme.fontSizes.sm};
        color: ${theme.colors.black};
        margin-right: 10px;
    }
`;

const Footer = styled.div`
    margin-top: 24px;
    background: #f9f9f9;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 12px 16px;
    display: flex;
    flex-direction: row;
    width: 100%;

    & > span {
        font-size: ${theme.fontSizes.sm};
        color: ${theme.colors.text};
        line-height: 20px;
        font-weight: ${theme.fontWeights.regular};
        flex: 1;
    }

    & > span:nth-child(1) {
        text-align: left;
    }

    & > span:nth-child(2) {
        text-align: right;
    }
    & > span:nth-child(2) > span {
        font-weight: 900;
        font-size: 18px;
        line-height: 22px;
        color: #000;
    }
`;

const PackageCard = () => {
    return (
        <Container className="package-card">
            <Image src={require("../assets/periyar-elephant.avif")} alt="Package" />
            <Content>
                <TitleWrapper>
                    <Title>Kerala Retreat - Book Now Pay Later Book Now Pay Later</Title>
                    <Duration>4N/5D</Duration>
                </TitleWrapper>

                <Itinerary>
                    <span>2N Munnar</span>
                    <span>• 1N Thekkady</span>
                    <span>• 1N Alleppey</span>
                </Itinerary>

                <Footer>
                    <span>This price is lower than the average price in June</span>
                    <span><span>₹11,207</span>/Person<br />Total Price ₹22,414</span>
                </Footer>
            </Content>
        </Container>
    );
};

export default PackageCard;