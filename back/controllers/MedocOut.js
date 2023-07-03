const mdlsMedocOut = require('../models/MedocOut');

module.exports = {
    create:async(req,res)=>{
        try {
            const { id_MedocOut,quantite }=req.body;
            const medocout=await mdlsMedocOut.create(id_MedocOut,quantite);
            res.send({message:"Sortie d'un medicament avec succèss"})
        } catch (error) {
            res.status(500).send({erreur:error.message})
        }
    },
    listAll: async (req, res) => {
        try {
            const listAllMedocOut = await mdlsMedocOut.getAllMedocOut();
            res.send(listAllMedocOut);
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getOne: async(req, res) => {
        try {
            const  id = parseInt(req.params.id)
            const MedocOut = await mdlsMedocOut.getOneMedocOut(id);
            res.send(MedocOut[0]);
        } catch (error) {
            console.log(error);
            res.status(500).send(error) 
        } 
    },
    update:async(req,res)=>{
        try {
            const  id = parseInt(req.params.id);
            const  {id_MedocOut,quantite} = req.body;
            let updatedMedocOut=await mdlsMedocOut.updateMedocOut(id_MedocOut,quantite,id);
            res.send(updatedMedocOut)
        } catch (error) {
            console.log(error.message);
            res.status(500).send(error);
        }
    },
    delete:async(req,res)=>{
        try {
            const  id = parseInt(req.params.id);
            let deletedMedocOut=await mdlsMedocOut.deleteMedocOut(id);
            res.send({message:"Supression avec succèss"})
        } catch (error) {
            console.log(error.message);
            res.status(500).send(error);
        }
    },
}