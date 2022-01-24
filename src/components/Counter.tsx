import { FormattedMessage } from 'react-intl';

export const Counter = ({ onUp, onDown, first, last }) => {
  return (
    <>
      <button disabled={first} onClick={onDown}>
        <FormattedMessage id="previous" />
      </button>
      <button disabled={last} onClick={onUp}>
        <FormattedMessage id="next" />
      </button>
    </>
  );
};
