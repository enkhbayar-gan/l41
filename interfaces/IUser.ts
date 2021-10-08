interface IUser {
    firstname: string
    lastname: string
    email: string
    gender: string

    signIn: () => Function
    signOut: () => Function
}