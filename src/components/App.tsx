import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { messages } from '../messages';
import { Counter } from './Counter';
import { RepoInfo } from './RepoInfo';
import { RepoList } from './RepoList';

const repos = [
  'eslint/eslint',
  'brocc-ab/test',
  'babel/babel',
  'webpack/webpack',
  'storybooks/storybook',
  'facebook/react',
  'tannerlinsley/react-query',
  'ravshansbox/browser-crypto',
];

const queryClient = new QueryClient();

export const App = () => {
  const [locale] = useState('en');
  const [index, setIndex] = useState(0);

  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={messages[locale]}>
      <QueryClientProvider client={queryClient}>
        <Counter
          onDown={index > 0 ? () => setIndex(index - 1) : null}
          onUp={index < repos.length - 1 ? () => setIndex(index + 1) : null}
        />
        <RepoList repos={repos} current={index} />
        <RepoInfo name={repos[index]} />
      </QueryClientProvider>
    </IntlProvider>
  );
};
