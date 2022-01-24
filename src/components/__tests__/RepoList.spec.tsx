import { render } from '@testing-library/react';
import { RepoList } from '../RepoList';

test('render <RepoList/>', () => {
  render(<RepoList repos={[]} current={0} />);
});
