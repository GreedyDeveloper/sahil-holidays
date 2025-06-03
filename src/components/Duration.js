import styled from '@emotion/styled';

const Duration = styled.div`
    border: 1px solid ${props => props.borderColor || '#16477f'};
    border-radius: 4px;
    padding: 2px 4px;
    color: ${props => props.color || '#16477f'};
    font-size: 12px;
    font-weight: 700;
`;

export default Duration;