const mdlsmedicament = require('../models/Medicament');
const fs = require('fs');

module.exports = {
    create:async(req,res)=>{
        try {
            let {nom,photo,quantite,prix_unitaire,description,quantite_dispo}=req.body;
            let newmedicament=await mdlsmedicament.create(nom,photo,quantite,prix_unitaire,description,quantite_dispo);
            res.send({message:"Création de medicament avec succèss"});
        } catch (error) {
            res.status(500).send({erreur:error.message})
        }
    },
    listAll: async (req, res) => {
        try {
            let listmedicament = await mdlsmedicament.getAllMedicament();
            res.send(listmedicament);
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getOne: async(req, res) => {
        try {
            let id = parseInt(req.params.id)
            let medicament = await mdlsmedicament.getOnemedicament(id);
            res.send(medicament.rows[0]);
        } catch (error) {
            res.status(500).send(error) 
        } 
    },
    update:async(req,res)=>{
        try {
            let id = parseInt(req.params.id);
            let {nom,photo,prix_unitaire,description,quantite_dispo}=req.body;
            let updatedmedicament=await mdlsmedicament.updatemedicament(nom,photo,prix_unitaire,description,quantite_dispo);
            res.send(updatedmedicament.rows[0])
        } catch (error) {
            res.status(500).send(error);
            
        }
        
    },
    del:async(req,res)=>{
        try {
            let id = parseInt(req.params.id);
            let delmedicament=await mdlsmedicament.deletemedicament(id);
            res.send({
                message:`medicament with id ${id} is removed`
            })
            
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    }

}