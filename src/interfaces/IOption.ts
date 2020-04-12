export interface IOption {
    title: string,
    subTitle?: string,
    message: string,
    name: string,
    handleOnClick?: Function,
    options?: IOption[]
}