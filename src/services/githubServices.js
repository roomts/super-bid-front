import BaseHttpService from "./baseHttpService";
import { Config } from "../../env";

export default class GeolocationServices extends BaseHttpService {
  getRepos = async (street, city, state, district) => {
    return this.get(
      `${Config.API_GITHUB_URL}/vercel/next.js`
    );
  };
}
