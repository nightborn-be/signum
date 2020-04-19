export interface IOption {
    title: string,
    subTitle?: string,
    message: string,
    name: string,
    handleOnClick?: Function,
    options?: IOption[]
}

export interface IChatBodyInformation {
    email: string,
    message: string,
    steps: IOption[],
    option: IOption
}

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
