import * as React from 'react';
import styled from 'styled-components';

const List = (props) => (
  <Container>
    <Card>
      <Title>my items</Title>
      <Button
        onClick={props.addItem}>
        add item
      </Button>
      <ListWrapper>
        {
          props.items.map(item => (
            <Item key={item.id}>
              {item.label}
              <Remove
                onClick={() => props.removeItem(item.id)}>
                delete
              </Remove>
            </Item>
          ))
        }
      </ListWrapper>
    </Card>
  </Container>
);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 300px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px;
  border: 1px solid;
`;

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

const Button = styled.div`
  width: 100%;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms;
  
  &:hover {
    background: blue;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Item = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #444;
  padding: 10px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Remove = styled.div`
  color: red;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  transition: all 300ms;
  
  &:hover {
    color: #000;
  }
`;

export default List;
