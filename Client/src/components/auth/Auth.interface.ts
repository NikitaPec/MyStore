export interface IStateLogin {
    login: string;
    password: string;
    passwordVisible: boolean;
    arrayErrorPassword: Array<string>;
    arrayErrorLogin: Array<string>;
}

export interface IStateRegistration {
    login: string;
    password: string;
    confirm: string;
    passwordVisible: boolean;
    confirmVisible: boolean;
    arrayErrorPassword: Array<string>;
    arrayErrorLogin: Array<string>;
    arrayErrorConfirm: Array<string>;
}