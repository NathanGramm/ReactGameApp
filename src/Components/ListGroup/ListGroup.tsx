import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px 0;
  background: "none";
`;

interface ListGroupProps {
  items: { description: string; price: number; category: string }[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No item found</p>}
      <List>
        {items.map((item) => (
          <ListItem key={item.description}>{item.description}</ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
