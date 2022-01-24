import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { messages } from '../../messages';
import { RepoInfo } from '../RepoInfo';

test('render <RepoInfo/>', () => {
  const client = new QueryClient();
  render(
    <IntlProvider locale="en" messages={messages.en}>
      <QueryClientProvider client={client}>
        <RepoInfo name="ravshansbox/browser-crypto" />
      </QueryClientProvider>
    </IntlProvider>
  );
});
