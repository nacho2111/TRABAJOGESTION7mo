import { conectar } from '../database/conexion.js';
const bdd = conectar();

export const clientes = (pet, resp) => {
    resp.render('clientes');
};

export const altacli = (pet, resp) => {
    resp.render('altacli');
};

export const bajacli = (pet, resp) => {
    resp.render('bajacli');
};

export const modcli = (pet, resp) => {
    resp.render('modcli');
};

export const mostrarcli = (pet, resp) => {
    resp.render('mostrarcli');
};

export const consultarcli = (pet, resp) => {
    resp.render('consultarcli');
};

export const nuevocli = (pet, resp) => {
    resp.send('mateo no jodas');
};
