export interface AppReducer {
    isDesktop: boolean
    translations: { [key:string]: string } | null
}

export interface GlobalState {
    appReducer: AppReducer
}