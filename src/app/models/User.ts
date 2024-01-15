export interface User {
    id: string,
    email: string,
    name: string,
    profiles: string[],
    clientMqttPassword: string,
    blocked: boolean
}


