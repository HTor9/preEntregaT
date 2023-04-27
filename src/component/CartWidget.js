import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ count }) => {
  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={25} />
      <span className="badge bg-secondary ms-1">{count}</span>
    </div>
  );
};

export default CartWidget;
