import {Expose, Transform} from 'class-transformer';

export class get_facturas {
    @Expose ({name : 'factura_id'})
    @Transform (({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    facturaID : Number;

    @Expose ({name : 'terminos_condiciones'})
    @Transform (({value})=>{
        const regex =  /^[A-Za-z0-9!$%&*()_+:;<>,.?~\\/\|\-]+$/
        if(regex.test(value)){
            throw {
                status: 400,
                message: `Èl dato ingresado no es valido. El valor ${value} solo puede ser de tipo string y no puede contener los siguientes carácteres: "@, #, {}, [], ^". Si su consulta tiene alguno de estos carácteres, por favor corríjalos.`
            }
        }
        return value
    },
    {toClassOnly: true})
    terminosCondiciones : String;

    @Expose({name : 'comprador_id'})
    @Transform(({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    compradorID : Number;

    @Expose({name : 'vendedor_id'})
    @Transform(({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    vendedorID : Number;

    @Expose({name : 'pago_id'})
    @Transform (({value})=>{
        if(!Math.floor(value) && value > 0){
            throw {
                status: 400,
                message: `El dato ingresado no es valido. El valor ${value} solo puede ser tipo numérico y el que estás ingresando es de tipo ${typeof(value)}.`
            }
        }
        return value;
    },
    {toClassOnly: true})
    pagoID : Number;

    constructor  (facturaID : Number ,terminosCondiciones : String, NIT: Number,  compradorID: Number, vendedorID : Number, pagoID : Number){
        this.facturaID = facturaID,
        this.terminosCondiciones = terminosCondiciones,
        this.NIT = NIT,
        this.compradorID = compradorID,
        this.vendedorID = vendedorID,
        this.pagoID = pagoID
    }
}







