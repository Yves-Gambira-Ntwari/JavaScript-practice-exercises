import { query } from "../db";

export const getClients =  async() =>{
  const {rows} = await query('SELECT *FROM client_tb')
}