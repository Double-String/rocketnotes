import styled from 'styled-components';

export const Container = styled.button`
    background:  ${({ theme }) => theme.COLORS.ORANGE};
    height: 56px;
    width: 100%;
    border-radius: 10px;
    padding: 0 16px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-weight: 500;
    margin-top: 16px;
    
    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

