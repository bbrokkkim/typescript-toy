import { CreateUserCommand, UserInfo, CheckUserByPasswordCommand, CheckDuplicateByUsernameCommand, UpdateNicknameCommand } from "./dto/userType";
import User from "./User";
import { UserService } from "./UserService";
import { convertFromUserInfo } from "./UserMapper"

class UserServiceImpl implements UserService {
    async create(commend: CreateUserCommand): Promise<UserInfo> {
        const user: User = new User();
        user.nickname = commend.nickname;
        user.username = commend.username;
        user.password = commend.password;
        await user.save();
        return convertFromUserInfo(user);
    }
    async checkUserByPassword(commend: CheckUserByPasswordCommand): Promise<boolean> {
        const user: User = await User.findOne({
            where: {
                username: commend.username,
                password: commend.password
            }
        })
        if (user) return true;
        return false;
    }
    async checkDuplicateByUsername(commend: CheckDuplicateByUsernameCommand): Promise<boolean> {
        const user: User[] = await User.find({
            where: {
                username: commend.username
            }
        })
        if (user.length === 1) return false;
        return true;
    }
    async updateNickname(commend: UpdateNicknameCommand): Promise<UserInfo>  {
        const user: User = await User.findOne({
            id: commend.id
        });
        user.nickname = commend.nickname;
        await user.save();
        return convertFromUserInfo(user);
    }

}