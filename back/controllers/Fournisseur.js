const mdlsFournisseur = require('../models/Fournisseur');
const fs = require('fs');

module.exports = {
    create:async(req,res)=>{
        try {
            let {nom,adresse,email,logo}=req.body;
            let newFournisseur=await mdlsFournisseur.create(nom,adresse,email,logo);
            res.send({message:"Création de fournisseur avec succèss"});
        } catch (error) {
            res.status(500).send({erreur:error.message})
        }
    },
    listAll: async (req, res) => {
        try {
            let listFournisseur = await mdlsFournisseur.getListFournisseur();
            res.send(listFournisseur);
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getOne: async(req, res) => {
        try {
            let id = parseInt(req.params.id)
            let Fournisseur = await mdlsFournisseur.getOneFournisseur(id);
            res.send(Fournisseur.rows[0]);
        } catch (error) {
            res.status(500).send(error) 
        } 
    },
    update:async(req,res)=>{
        try {
            let id = parseInt(req.params.id);
            let {nom,adresse,email,logo}=req.body;
            let updatedFournisseur=await mdlsFournisseur.updateFournisseur(nom,adresse,email,logo,id);
            res.send(updatedFournisseur.rows[0])
        } catch (error) {
            res.status(500).send(error);
            
        }
        
    },
    del:async(req,res)=>{
        try {
            let id = parseInt(req.params.id);
            let delFournisseur=await mdlsFournisseur.deleteFournisseur(id);
            res.send({
                message:`Fournisseur with id ${id} is removed`
            })
            
        } catch (error) {
            res.status(500).send(error)
            
        }
        
    }

}