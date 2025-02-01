import bcrypt from "bcrypt"

export async function cryptPassword(password: string) {
    const salt = process.env.HASH_SALT || await bcrypt.genSalt(10)
    
    return await bcrypt.hash(password, salt)
}

export async function comparePassword(plainPass: string, hashword: string) {
    return await bcrypt.compare(plainPass, hashword)
}

export default { cryptPassword, comparePassword }