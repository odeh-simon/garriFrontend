import PropTypes from 'prop-types';

const OrderData = ({ order }) => {
  return (
    <tr className='text-[10px] lg:text-sm font-roboto text-black'>
      <td className="py-2 text-center">{order.id}</td>
      <td className="py-2 text-center">{order.date}</td>
      <td className="py-2 text-center">{order.customerName}</td>
      <td className="py-2 text-center">{order.totalPrice}</td>
      <td className="py-2 text-center">{order.paymentStatus}</td>
      <td className="py-2 text-center">{order.items}</td>
    </tr>
  );
};

OrderData.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    paymentStatus: PropTypes.string.isRequired,
    items: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderData;