import { createContext, useContext } from "react";
import { defaultConfig, defaultOption } from "../../constants";
import { IChatConfig, IOption } from "../../types";

interface IChatContext {
    isOpen: boolean,
    config: IChatConfig,
    openChat: () => void,
    closeChat: () => void,
    defaultOption: IOption
}

const ChatContext = createContext<IChatContext>({
    isOpen: false,
    config: defaultConfig,
    openChat: () => { },
    closeChat: () => { },
    defaultOption: defaultOption
});

function useChat() {
    return useContext(ChatContext);
}

export { ChatContext, useChat };