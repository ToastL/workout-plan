import hash from "../hash"
import supabase from "../db"

export default defineEventHandler(async (event) => {
    const { username, password } = await readBody(event)

// @ts-ignore 
    let hashPassword = await supabase.from('users').select('password').eq('username', username)
    if (!hashPassword.data || hashPassword.data.length == 0) hashPassword = await supabase.from('users').select('password').eq('email', username)
    if (!hashPassword.data || hashPassword.data.length == 0 ) throw createError({})

    const passComp = await hash.comparePassword(password, hashPassword.data[0].password)

    return { success: passComp }
})