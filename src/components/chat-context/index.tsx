import React, { useState } from "react";
import { ChatContext } from "./ChatContext";
import { IChatProviderProps } from "./interfaces/IChatProviderProps";
import { defaultConfig, defaultOption } from "../../constants";

export default function ChatContextProvider(props: IChatProviderProps) {

    // Attributes
    const { option, config } = props;
    const [isOpen, setIsOpen] = useState(config.openByDefault);

    // Methods
    function computeValue() {
        return {
            isOpen: isOpen,
            config: { ...defaultConfig, ...config },
            defaultOption: { ...defaultOption, ...option },
            openChat: () => setIsOpen(true),
            closeChat: () => setIsOpen(false)
        }
    }

    // Render
    return (
        <ChatContext.Provider value={computeValue()}>
            {props.children}
        </ChatContext.Provider>
    )
}