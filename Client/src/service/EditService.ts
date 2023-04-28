import $api from "@/API";
import { AuthResponse } from "@/interfaces/AuthResponse.interface";
import { AxiosResponse } from "axios";

export default class EditService {
  static async userEdit(user: any): Promise<AxiosResponse<AuthResponse>> {
    return $api
      .post<AuthResponse>("/edit", { user })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        if (err.response.status === 417) {
          console.log(err.response);
          return err.response;
        } else {
          throw err;
        }
      });
  }
}
