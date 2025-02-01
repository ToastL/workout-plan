import { createClient } from "@supabase/supabase-js"

const DB_URL = process.env.DB_URL
const DB_KEY = process.env.DB_KEY

if (!DB_URL)
    throw new Error('Database url is not defined!')
if (!DB_KEY)
    throw new Error('Database key is not defined!')

const client = createClient(DB_URL, DB_KEY)

export default client