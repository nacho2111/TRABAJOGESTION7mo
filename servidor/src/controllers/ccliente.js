import { conectar } from '../database/conexion.js';

const bdd = await conectar();

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

export const nuevocli = async (pet, resp) => {
    let id, nom, dir, tel, ciudad;

    id = pet.body.id;
    nom = pet.body.nomcli;
    dir = pet.body.dircli;
    tel = pet.body.telcli;
    ciudad = pet.body.ciudad;
    try {
        let altasql = `INSERT INTO clientes (idclientes, nombre, direccion, telefono, ciudad) VALUES ('${id}', '${nom}', '${dir}', '${tel}', '${ciudad}')`;
        const [registro] = await bdd.query(altasql);

        resp.redirect('/clientes');
    } catch (error) {
        console.log("Error en la sentencia:", error);
    }
};
