import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { messages } from '../../messages';
import { Counter } from '../Counter';

test('render <Counter/>', () => {
  const onUp = jest.fn();
  const onDown = jest.fn();
  render(
    <IntlProvider locale="en" messages={messages.en}>
      <Counter onUp={onUp} onDown={onDown} />
    </IntlProvider>
  );
});
