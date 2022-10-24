import { IUser } from '../interfaces/user';
import CustomError from '../helpers/customError';
import { ILogin } from '../interfaces/login';
import UserModel from '../database/models/User';
import { decodeToken } from '../helpers/tokenGenerate';

export default class UserService {
  private model: UserModel;

  public login = async ({ email }: ILogin): Promise<IUser> => {
    const user = await UserModel.findOne(({ where: { email } }));

    if (user === null) throw new CustomError(401, 'Incorrect email or password');

    return user;
  };

  public getRole = async (token : string) => {
    const { payload } = decodeToken(token);

    return payload.role;
  };
}
