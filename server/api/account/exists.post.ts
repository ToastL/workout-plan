import supabase from '../db'

export default defineEventHandler(async (event) => {
    const { type, value } = await readBody(event)
    
    // @ts-ignore
    return { exists: (await supabase.from('users').select('*').eq(type, value)).data?.length > 0 }
})