import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const ListItem = styled.li`
  font-size: 24px;
  & + & {
    margin-top: 16px;
  }
`;
