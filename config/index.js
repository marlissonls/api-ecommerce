const secret = process.env.NODE_ENV === "production" ? process.env.SECRET : "SD62315C84A6532C54FDFEAD532C5DFE322ASDF5";
const api = process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com" : "http://localhost:3000";
const loja = process.env.NODE_ENV === "production" ? "https://loja-teste.ampliee.com" : "http://localhost:8000";

export { secret, api, loja };