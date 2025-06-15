export async function fetchGitHubRepos() {
  const username = 'AngelCaiza'; 
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const url = `https://api.github.com/users/${username}/repos`;
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.mercy-preview+json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error al obtener repositorios: ${response.statusText}`);
  }

  const repos = await response.json();

  // Obtener topics para cada repo
  await Promise.all(
    repos.map(async (repo) => {
      const topicsResponse = await fetch(`${repo.url}/topics`, {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
          Authorization: `token ${token}`,
        },
      });
      const topicsData = await topicsResponse.json();
      repo.topics = topicsData.names || [];
    })
  );

  return repos;
}