export class SistemaAutenticacion {


    static login(usuario, clave){
        if("autenticable" in usuario && usuario.autenticable instanceof Function) //Se valida la ninterfaz usuario
            return usuario.autenticable(clave);
        else
            return false;
        //return usuario.clave == clave;
    }
}