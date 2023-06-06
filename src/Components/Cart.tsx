interface cartProps {
  items: { id: number; title: string; quantity: number }[];
  onClick: () => void;
}

const Cart = ({ items, onClick }: cartProps) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={onClick}>
            {item.title + " : " + item.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
