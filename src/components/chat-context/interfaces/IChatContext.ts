import { IOption } from "../../../interfaces/IOption";
import { IChatConfig } from "../../../interfaces/IChatConfig";

export interface IChatContext {
    isOpen: boolean,
    config: IChatConfig,
    openChat: () => void,
    closeChat: () => void,
    defaultOption: IOption
}