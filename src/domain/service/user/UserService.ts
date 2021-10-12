import {
    CheckDuplicateByUsernameCommand, 
    CheckUserByPasswordCommand, 
    CreateUserCommand, 
    UpdateNicknameCommand, 
    UserInfo
} from "./dto/userType"

export interface UserService{
    create(commend: CreateUserCommand): Promise<UserInfo>;
    checkUserByPassword(commend: CheckUserByPasswordCommand): Promise<boolean>;
    checkDuplicateByUsername(commend: CheckDuplicateByUsernameCommand): boolean;
    updateNickname(commend: UpdateNicknameCommand): UserInfo;
}

