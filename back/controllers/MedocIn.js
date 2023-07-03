const mdlsMedocIn = require('../models/MedocIn');
const fs = require('fs');

module.exports = {
    create:async(req,res)=>{
        try {
            const { id_MedocIn,quantite }=req.body;
            const medocin=await mdlsMedocIn.create(id_MedocIn,quantite);
            res.send({message:"Ajout d'un medicament avec succèss"})
        } catch (error) {
            res.status(500).send({erreur:error.message})
        }
    },
    listAll: async (req, res) => {
        try {
            const listAllMedocin = await mdlsMedocIn.getAllMedocIn();
            res.send(listAllMedocin);
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getOne: async(req, res) => {
        try {
            const  id = parseInt(req.params.id)
            const MedocIn = await mdlsMedocIn.getOneMedocIn(id);
            res.send(MedocIn[0]);
        } catch (error) {
            console.log(error);
            res.status(500).send(error) 
        } 
    },
    update:async(req,res)=>{
        try {
            const  id = parseInt(req.params.id);
            const  {id_MedocIn,quantite} = req.body;
            let updatedMedocIn=await mdlsMedocIn.updateMedocIn(id_MedocIn,quantite,id);
            res.send(updatedMedocIn)
        } catch (error) {
            console.log(error.message);
            res.status(500).send(error);
        }
    },
    delete:async(req,res)=>{
        try {
            const  id = parseInt(req.params.id);
            let deletedMedocIn=await mdlsMedocIn.deleteMedocin(id);
            res.send({message:"Supression avec succèss"})
        } catch (error) {
            console.log(error.message);
            res.status(500).send(error);
        }
    },
}