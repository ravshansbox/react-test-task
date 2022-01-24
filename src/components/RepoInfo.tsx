import { FormattedMessage } from 'react-intl';
import { useQuery } from 'react-query';
import { fetchRepoInfo } from '../api';

export const RepoInfo = ({ name }) => {
  const { data, isError, isFetching } = useQuery(['repo', name], () => fetchRepoInfo(name));

  if (isError) {
    return (
      <h4>
        <FormattedMessage id="fetchError" />
      </h4>
    );
  }

  if (isFetching) {
    return (
      <h4>
        <FormattedMessage id="fetching" />
      </h4>
    );
  }

  if (!data.found) {
    return (
      <h4>
        <FormattedMessage id="errorRepoNonExistant" />
      </h4>
    );
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <FormattedMessage id="fullName" />:
          </td>
          <td>{data.data.full_name}</td>
        </tr>
        <tr>
          <td>
            <FormattedMessage id="description" />:
          </td>
          <td>{data.data.description}</td>
        </tr>
        <tr>
          <td>
            <FormattedMessage id="stargazers" />:
          </td>
          <td>{data.data.stargazers_count}</td>
        </tr>
      </tbody>
    </table>
  );
};
