import CustomError from '../helpers/customError';
import generateToken from '../helpers/tokenGenerate';
import { ILogin } from '../interfaces/login';
import UserModel from '../database/models/User';

export default class UserService {
  private model: UserModel;

  public login = async ({ email }: ILogin): Promise<string> => {
    const user = await UserModel.findOne(({ where: { email } }));

    if (!user) throw new CustomError(401, 'Username or password invalid');

    const token = await generateToken(user);
    return token;
  };
}
