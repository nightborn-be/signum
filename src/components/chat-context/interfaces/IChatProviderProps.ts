import { IOption } from "../../../interfaces/IOption";
import { IChatConfig } from "../../../interfaces/IChatConfig";

export interface IChatProviderProps {
    option: IOption,
    config: IChatConfig,
    children: any
}