import { createContext, useContext } from "react";
import { IChatContext } from "./interfaces/IChatContext";
import { defaultConfig, defaultOption } from "../../constants";

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