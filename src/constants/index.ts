import { IChatConfig, IOption } from "../types"

export const defaultConfig: IChatConfig = {
    openByDefault: false,
    footer: 'Signum - created by Nightborn.be',
    avatarIcon: '',
    mainColor: 'linear-gradient(158.5deg, #270E41 -32.82%, #112441 120.45%)',
    secondaryColor: 'linear-gradient(137.56deg, #2DDC9F 1.03%, #1DC6AF 99.9%)',
    sendButtonColor: '#112441',
    finalButtonColor: "linear-gradient(163.56deg, #7A22AF -5.81%, #F40078 113.99%)",
    emailPlaceholder: 'Leave us your e-mail address',
    messagePlaceholder: 'Write your message',
    finalTitle: 'Thank you.',
    finalSubTitle: "We'll be in touch!",
    finalButtonText: "Continue",
    handleFinalButtonClicked: () => { },
    handleSendClicked: (information) => console.log(information),
}

export const defaultOption: IOption = {
    title: 'Hello there 👋',
    subTitle: "We're glad to see you on our website.",
    message: 'How can I help you?',
    name: 'Hello there 👋',
}