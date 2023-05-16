import {config} from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}`});

export const { API_VERSION, NODE_ENV, PORT, LOG_DIR, LOG_FORMAT, ORIGIN } = process.env;