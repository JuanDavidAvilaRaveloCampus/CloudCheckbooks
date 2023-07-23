import dotenv from "dotenv";
import mysql, { createPool } from "mysql2";
import { Router, query } from "express";

dotenv.config();

const router_Pago = Router();
let con = undefined;

router_Pago.use((req, res, next)=>{
    let myConfig = JSON.parse(process.env.DB_MYCONFIG);
    con = mysql.createPool(myConfig);
    next();
})

router_Pago.get("/", (req, res)=>{
    con,query(
        `SELECT * FROM Pago;`,
        (err,data,fil)=>{
            data = JSON.stringify(data);
            res.send(JSON.parse(data));
        }
    );
})


export default router_Pago;


