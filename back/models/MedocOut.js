const db = require('../service/connect');

module.exports = {
    create:(id_medicament,quantite)=>{
        return new Promise((resolve, reject) => {
        const VerificationQuery = 'SELECT * FROM medicament WHERE id = ?';
        db.query(VerificationQuery , [id_medicament] , function(err,resultat){
            if (err) {
                reject(new Error(err));
            } else if (resultat) {
                console.log(resultat);
                const quantRestant = resultat[0].quantite_dispo - quantite
                if (quantRestant < 0) {
                    reject (new Error(`La quantite dans le stock est insuffisant ,il vous reste ${resultat[0].quantite_dispo} dans le stock`))
                } else {
                    db.query("UPDATE medicament SET quantite_dispo =? WHERE id= ?",[quantRestant,id_medicament],function(error,resultat){
                        if(error){
                            reject(new Error("Erreur lors du sortie du medicament"));
                        }else{
                        resolve(resultat)
                        }
                    })
                    db.query("INSERT INTO sortie(id_medicament,quantite) values(?,?)",[id_medicament,quantite],function(error,resultat){
                        if(error){
                            reject(new Error("Erreur lors du sortie du medicament"));
                        } else {
                            resolve(resultat)
                            }
                        })
                }  
                
            } else {
                return 1
            }
        })
        
    })
    },
    getOneMedocOut: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM sortie WHERE id = ?", [id] , function(err, resultat){
                if (err) {
                    reject(new Error(err))
                } else {
                  resolve(resultat)
                }
            })
        })
    },
    getAllMedocOut: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM sortie",function(err, resultat){
                if(err){
                    reject(new Error("Erreur lors du récuperation"));
                }else{
                  resolve(resultat)
                }
            })
        })
    },
    updateMedocOut:(id_medicament,quantite,id_entre)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE sortie SET id_medicament = ?,quantite = ? WHERE id = ?",[id_medicament,quantite,id_entre],function(err,resultat){
                if(err){
                    reject(new Error(err));
                }else{
                  resolve(resultat)
                }
            })
            
        })

    },
    deleteMedocOut:(id)=>{
        return new Promise((resolve, reject) => {
            db.query("DELETE  FROM sortie WHERE id = ?", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Erreur lors du suppression du flux de sortie"));
                }else{
                  resolve(resultat)
                }
            })
        })
    }

}
