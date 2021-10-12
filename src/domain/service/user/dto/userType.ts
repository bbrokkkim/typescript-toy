export type CreateUserCommand = {
    username: string;
    nickname: string;
    password: string;
}
export type CheckUserByPasswordCommand = {
    username: string;
    password: string;
}
export type CheckDuplicateByUsernameCommand = {
    username: string;
}
export type UpdateNicknameCommand = {
    id: number;
    nickname: string;
}
export type UserInfo = {
    id: number;
    username: string;
    nickname: string;
    password: string;
}