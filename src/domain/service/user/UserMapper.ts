import { UserInfo } from "./dto/userType";
import User from "./User";

export const convertFrom = (user: User): UserInfo => (
    {
        id: user.id,
        username: user.username,
        nickname: user.nickname,
        password: user.password
    }
)


