import { IChatBodyInformation } from "../components/chat-body/interfaces/IChatBodyInformation";

export interface IChatConfig {
    openByDefault: boolean,
    footer?: string,
    avatarIcon: any,
    mainColor: string,
    emailPlaceholder: string,
    messagePlaceholder: string,
    finalTitle: string,
    finalSubTitle: string,
    finalButtonText: string,
    finalButtonColor: string,
    secondaryColor: string,
    sendButtonColor: string,
    handleFinalButtonClicked?: () => void,
    handleSendClicked: (information: IChatBodyInformation) => void
}