import express from 'express';
import { clientes, altacli, bajacli, modcli, mostrarcli, consultarcli, nuevocli } from '../controllers/ccliente.js';

const rutacliente = express.Router();

rutacliente.get('/clientes', clientes);
rutacliente.get('/altacli', altacli);
rutacliente.post('/altacli', nuevocli);
rutacliente.post('/nuevocli', nuevocli);
rutacliente.get('/bajacli', bajacli);
rutacliente.get('/modcli', modcli);
rutacliente.get('/mostrarcli', mostrarcli);
rutacliente.get('/consultarcli', consultarcli);


export { rutacliente };
