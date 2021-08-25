import githubServices from "services/githubServices";
function Home({ stars }) {
  return <div>Next stars: {stars}</div>;
}

Home.getInitialProps = async (ctx) => {
  try {
    const GithubServices = new githubServices();
    const { data } = await GithubServices.getRepos();
    return { stars: data.stargazers_count };
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};

export default Home;
