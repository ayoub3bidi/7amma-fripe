import axios from "axios";

const BASE_URL = "http://localhost:5000/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjUyM2I5MzcxOTQ4MGYxNGYzZGYxOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDc5NTUwMCwiZXhwIjoxNjUxMDU0NzAwfQ.3mwo23RZ76hx85aFfCiSiZIuXgqscqveGtuAcHRrPUM"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});