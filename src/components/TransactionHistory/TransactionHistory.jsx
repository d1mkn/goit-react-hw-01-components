import PropTypes, { arrayOf } from 'prop-types';
import { Table, TableHead, TableBody } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>
                {type[0].toUpperCase()}
                {type.slice(1)}
              </td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
