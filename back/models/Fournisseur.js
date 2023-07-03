const db = require('../service/connect');

module.exports = {
    create:(nom,adresse,email,logo)=>{
        return new Promise((resolve, reject) => {
        const VerificationQuery = 'SELECT * FROM fournisseur WHERE nom = ?';
        db.query(VerificationQuery,[nom],function(err,resultat){
            if (err) {
                reject(new Error(err));
            } else if (resultat.length > 0) {
                reject(new Error("Un fournisseur avec le même nom existe déjà"))
            } else {
                db.query("INSERT INTO fournisseur(nom,adresse,email,logo) values(?,?,?,?)",[nom,adresse,email,logo],function(err,resultat){
                    if(err){
                        reject(new Error(err));
                    }else{
                      resolve(resultat)
                    }
                })
            }
        })
        
    })
    },
    getOneFournisseur:(id)=>{
        return new Promise((resolve,reject)=>{
            db.query("SELECT * FROM fournisseur where id = ?",[id],function(err,resultat){
                if(err){
                    reject(new Error("Erreur lors de récuperation du fournisseur"));
                }else{
                  resolve(resultat)
                }
            })

        })

    },
    getListFournisseur: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM fournisseur", function(err, resultat){
                if(err){
                    reject(new Error("Erreur lors du recuperation des fournisseurs"));
                }else{
                  resolve(resultat)
                }
            })
        }) 
    },
    updateFournisseur:(nom,adresse,email,logo,id)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE project SET nom = ? ,adresse = ?,email = ?  WHERE id = ? ",[nom,adresse,email,logo,id],function(err,resultat){
                if(err){
                    reject(new Error("Erreur lors de mise à jour du fournisseur"));
                }else{
                  resolve(resultat)
                }
            })
            
        })
    },
    deleteFournisseur:(id)=>{
        return new Promise((resolve, reject) => {
            db.query("DELETE  FROM fournisseur WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Erreur ressource lors du suppression du fournisseur"));
                }else{
                  resolve(resultat)
                }
            })
        })
    }

}