import { IOption } from "../../../interfaces/IOption";

export interface IChatBodyInformation {
    email: string,
    message: string,
    steps: IOption[],
    option: IOption
}