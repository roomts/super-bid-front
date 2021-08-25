import BaseHttpService from "./baseHttpService";
import { Config } from "../../env";

export default class GeolocationServices extends BaseHttpService {
  getCEPsByAddress = async (street, city, state, district) => {
    return this.get(
      `${Config.API_GEOLOCATION_URL}/api/default/v1/address/getpostalcodesbyaddress?Street=${street}&City=${city}&State=${state}&District=${district}`
    );
  };
}
