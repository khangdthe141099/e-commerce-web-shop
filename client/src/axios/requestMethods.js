import axios from 'axios'

const BASE_URL = "http://localhost:5000/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzZmYzY1NzRlOWQwYzAxYmE2YmI4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY4NTQ3NywiZXhwIjoxNjQwOTQ0Njc3fQ.lvrrTgwilUD8crlcQyBSXV5VGYAD5bgpf1WI6CKvgSc"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})
