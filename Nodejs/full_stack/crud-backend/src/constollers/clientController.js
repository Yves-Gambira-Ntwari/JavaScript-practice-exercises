import {db} from '../db';  

//  export const getClients = async (req,res)=>{
//   const d = await db.query('SELECT *FROM client_tb')
//   return res.json(d.rows)
// }

export const getClients = (req,res) =>{
  return res.json({test:"sdf"})
}


// export const createClients = async (req,res)=>{
//   const d = await db.query('SELECT *FROM client_tb')
//   return res.json(d.rows)
// }



// export const deleteClients = async (req,res)=>{
//   const d = await db.query('SELECT *FROM client_tb')
//   return res.json(d.rows)
// }



// export const updateClients = async (req,res)=>{
//   const d = await db.query('SELECT *FROM client_tb')
//   return res.json(d.rows)
// }
