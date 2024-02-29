import dotenv from 'dotenv';
dotenv.config();

export default {
    "dbTest": `mongodb://${process.env.MONGODB_HOST_TEST}:27017/ecommerce-api-teste`,
    "dbProduction": `mongodb://${process.env.MONGODB_HOST_PRODUCTION}:27017/ecommerce-api`
}