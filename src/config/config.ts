import {config} from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}`});

export const { API_VERSION, NODE_ENV, PORT, LOG_DIR, LOG_FORMAT, ORIGIN, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;