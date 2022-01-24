import styled from 'styled-components';

const List = styled.ul({
  paddingLeft: 0, // RTL
  paddingRight: 0, // LTR
});

const Item = styled.li<{ selected: boolean }>(props => ({
  background: props.selected ? 'grey' : 'white',
  color: props.selected ? 'white' : 'grey',
  listStyle: 'none',
}));

export const RepoList = ({ repos, current }) => (
  <List>
    {repos.map((repo, index) => (
      <Item key={index} selected={current === index}>
        {repo}
      </Item>
    ))}
  </List>
);
