import { FormattedMessage } from 'react-intl';

export const Counter = ({ onUp, onDown }) => {
  return (
    <>
      <button disabled={!Boolean(onDown)} onClick={onDown}>
        <FormattedMessage id="previous" />
      </button>
      <button disabled={!Boolean(onUp)} onClick={onUp}>
        <FormattedMessage id="next" />
      </button>
    </>
  );
};
