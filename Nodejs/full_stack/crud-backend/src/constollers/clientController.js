import * as clientServise from '../servises/clientServer'

export const getClients = async (req, res) =>{
  try{
    const client =  await clientServise.getClients()
    res.status(200).json(client)
  } catch{
    console.error('Error', error)
    res.status(500).json({message: "Internal Serval Error"})
  }
}