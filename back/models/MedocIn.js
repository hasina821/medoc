const db = require('../service/connect');

module.exports = {
    create:(id_medicament,quantite)=>{
        return new Promise((resolve, reject) => {
        const VerificationQuery = 'SELECT * FROM medicament WHERE id = ?';
        db.query(VerificationQuery , [id_medicament] , function(err,resultat){
            if (err) {
                reject(new Error(err));
            } else if (resultat) {
                const ancienquantite = resultat[0].quantite_dispo
                const newquantite = ancienquantite + quantite
                db.query("UPDATE medicament SET quantite_dispo =? WHERE id= ?",[newquantite,id_medicament],function(error,resultat){
                    if(error){
                        reject(new Error("Erreur lors du entre du medicament"));
                    }else{
                      resolve(resultat)
                    }
                })
                db.query("INSERT INTO entree(id_medicament,quantite) values(?,?)",[id_medicament,quantite],function(error,resultat){
                if(error){
                    reject(new Error("Erreur lors du entre du medicament"));
                } else {
                    resolve(resultat)
                    }
                }) 
                
            }
        })
        
    })
    },
    getOneMedocIn: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM entree WHERE id = ?", [id] , function(err, resultat){
                if (err) {
                    reject(new Error(err))
                } else {
                  resolve(resultat)
                }
            })
        })
    },
    getAllMedocIn: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM entree",function(err, resultat){
                if(err){
                    reject(new Error("Erreur lors du récuperation"));
                }else{
                  resolve(resultat)
                }
            })
        })
    },
    updateMedocIn:(id_medicament,quantite,id_entre)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE entree SET id_medicament = ?,quantite = ? WHERE id = ?",[id_medicament,quantite,id_entre],function(err,resultat){
                if(err){
                    reject(new Error(err));
                }else{
                  resolve(resultat)
                }
            })
            
        })

    },
    deleteMedocin:(id)=>{
        return new Promise((resolve, reject) => {
            db.query("DELETE  FROM entree WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Erreur lors du suppression du flux d'entree"));
                }else{
                  resolve(resultat)
                }
            })
        })
    }

}
