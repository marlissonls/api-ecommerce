import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

import emailConfigs from "../config/email.js";
import { api as link} from "../config/index.js";


const transporter = nodemailer.createTransport(emailConfigs);

export default ({ usuario, recovery }, cb) => {
    const message = `
        <h1 style="text-align: center;">Recuperação de Senha</h1>
        <br />
        <p>
            Aqui está o link para redefinir a sua senha. Acesse ele e digite sua nova senha:
        </p>
        <a href="${link}/v1/api/usuarios/senha-recuperada?token=${recovery.token}">
            ${link}/v1/api/usuarios/senha-recuperada?token=${recovery.token}
        </a>
        <br /><br /><br />
        <p>
            Obs.: Se você não solicitou a redefinição, apenas ignore esse email.
        </p>
        <br />
        <p>Atensiosamente, Loja IT</p>
        `;
    
    const opcoesEmail = {
        from: "naoresponder@lojait.com",
        to: usuario.email,
        subject: "Redefinicao de Senha - Loja IT",
        html: message
    };

    if( process.env.NODE_ENV === "production" ) {
        transporter.sendMail(opcoesEmail, (error, info) => {
            if (error) {
                console.log(error);
                return cb("Aconteceu um erro no envio do email, tente novamente.");
            } else {
                return cb(null, "Link para redefinição de senha enviada para seu email.");
            }
        });
    } else {
        console.log(opcoesEmail);
        return cb(null, "Link para redefinição de senha enviada para seu email.");
    }
}