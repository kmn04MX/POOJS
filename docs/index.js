
import {Cliente} from './Cliente.js'
import { Director } from './Empleado/Director.js';
import { Empleado } from './Empleado/Empleado.js';
import { Gerente } from './Empleado/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


const empleado = new Empleado('Juan Perez', '12345',10000);
empleado.asignarClave('1111');
console.log(SistemaAutenticacion.login(empleado, '1111'));

const gerente = new Gerente('Pedro Rivas', '12345',12000);
gerente.asignarClave('6565');
console.log(SistemaAutenticacion.login(gerente, '6565'));



//const director = new Director('Elena Moreno','12345',15000);


const cliente = new Cliente('Leonardo', '13804050','123224');
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente, '1111'));

