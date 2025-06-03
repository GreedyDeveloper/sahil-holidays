// DayPlan.js
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from 'styles/theme';

const Container = styled.div`
    width: 184px;
    padding: 30px 30px 30px 0;
    border-right: solid 1px #e7e7e7;
`;

const Title = styled.p`
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.text};
    font-weight: ${theme.fontWeights.bold};
    padding-left: 23px;
    margin-bottom: 10px;
    position: sticky;
    top: 220px;
    position: -webkit-sticky;
    text-align: left;
`;

const Timeline = styled.ul`
    display: flex;
    flex-direction: column;
    position: sticky;
    position: -webkit-sticky;
    top: 255px;
`;

const DayItem = styled.div`
    color: ${({ active }) => active ? theme.colors.white : theme.colors.text};
    font-size: ${theme.fontSizes.xs};
    font-weight: ${theme.fontWeights.bold};
    text-transform: capitalize;
    padding: 5px 30px 5px 38px;
    align-self: flex-start;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background: ${({ active }) => active ? theme.colors.text : 'transparent'};
    border-radius: ${({ active }) => active ? '0 20px 20px 0' : '0'};

    &::before {
        content: "";
        position: absolute;
        width: 7px;
        height: 7px;
        background:${({ active }) => active ? theme.colors.white : '#9b9b9b'}; 
        border-radius: 5px;
        left: 23px;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 1;
    }

    &:after {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        background: ${({ active }) => active ? theme.colors.white : '#e7e7e7'};
        left: 26px;
        top: 0;
    }

    &:first-child::after {
        top: 10px;
    }

    &:last-child::after {
        top: -10px;
    }
`;

const DayPlan = () => {

    const [days, setDays] = useState([
        { date: '25 Jul, Fri', active: true },
        { date: '26 Jul, Sat', active: false },
        { date: '27 Jul, Sun', active: false },
        { date: '28 Jul, Mon', active: false },
        { date: '29 Jul, Tue', active: false },
    ]);

    const onSelect = (index) => {
        const updatedDays = days.map((day, i) => ({
            ...day,
            active: i === index
        }));
        setDays(updatedDays);
    }

    return (
        <Container>
            <Title>Day Plan</Title>
            <Timeline>
                {days.map((day, index) => <DayItem key={index} active={day.active} onClick={()=>onSelect(index)}>
                    {day.date}
                </DayItem>
                )}
            </Timeline>
        </Container>
    );
};

export default DayPlan;
