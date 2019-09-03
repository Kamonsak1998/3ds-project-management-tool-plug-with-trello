export const CONFIG = {
    MAIN_API_ENDPOINT: 'http://localhost:9000'
}

export const mainAPIOptions = () => ({
    baseURL: CONFIG.MAIN_API_ENDPOINT,
    headers : {
        'x-token' : 'token_example'
    }
})