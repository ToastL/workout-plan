import hash from '../hash'
import supabase from '../db'

export default defineEventHandler(async (event) => {
    const { username, email, password } = await readBody(event)
    
    const { exists: usernameExists } = await $fetch('/api/account/exists', { method: 'POST', body: { type: 'username', value: username }})
    const { exists: emailExists } = await $fetch('/api/account/exists', { method: 'POST', body: { type: 'email', value: email }})

    if (usernameExists || emailExists)
        throw createError({})

    const user = await supabase.from('users').insert({ username, email, password: await hash.cryptPassword(password) })

    return { success: !user.error ? true : false }
})