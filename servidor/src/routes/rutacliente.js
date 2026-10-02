import express from 'express';
import { clientes, altacli, bajacli, modcli, mostrarcli, consultarcli, nuevocli } from '../controllers/ccliente.js';

const rutacliente = express.Router();

rutacliente.get('/clientes', clientes);
rutacliente.post('/altacli', altacli);
rutacliente.get('/bajacli', bajacli);
rutacliente.get('/modcli', modcli);
rutacliente.get('/mostrarcli', mostrarcli);
rutacliente.get('/consultarcli', consultarcli);


export { rutacliente };
