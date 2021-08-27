import BaseHttpService from "./baseHttpService";
import { Config } from "../../env";

export default class GithubServices extends BaseHttpService {
  getRepos = async () => {
    return this.get(
      `${Config.API_GITHUB_URL}/vercel/next.js`
    );
  };
}
