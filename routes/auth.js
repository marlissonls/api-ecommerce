import jwt from "express-jwt";
import { secret } from "../config/index.js";

function getTokenFromHeader(req) {
    if(!req.headers.authorization) return null;
    return req.headers.authorization.split(" ")[1];
}

const auth = {
    required: jwt.expressjwt({
        secret,
        algorithms: ["HS256"],
        userProperty: 'payload',
        getToken: getTokenFromHeader
    }),
    optional: jwt.expressjwt({
        secret,
        algorithms: ["HS256"],
        userProperty: 'payload',
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
};

export default auth;