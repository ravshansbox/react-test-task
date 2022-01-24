export const fetchRepoInfo = async (name: string) => {
  const response = await fetch(`https://api.github.com/repos/${name}`);

  if (response.status === 200) {
    const data = await response.json();
    return { data, found: true };
  }

  return { found: false };
};
