const db = require('../service/connect');

module.exports = {
    create:(nom,photo,quantite,prix_unitaire,description,quantite_dispo)=>{
        return new Promise((resolve, reject) => {
        const VerificationQuery = 'SELECT * FROM medicament WHERE nom = ?';
        db.query(VerificationQuery,[nom],function(err,resultat){
            if (err) {
                reject(new Error(err));
            } else if (resultat.length > 0) {
                reject(new Error("Un objet avec le même nom existe déjà"))
            } else {
                db.query("INSERT INTO medicament(nom,photo,quantite,prix_unitaire,description,quantite_dispo) values(?,?,?,?,?,?)",[nom,photo,quantite,prix_unitaire,description,quantite_dispo],function(err,resultat){
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
    getOnemedicament: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM medicament WHERE id = $1", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching medicament"));
                }else{
                  resolve(resultat)
                }
            })
        })
    },
    getAllMedicament: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM medicament",function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while fetching medicament"));
                }else{
                  resolve(resultat)
                }
            })
        })
    },
    updatemedicament:(nom,photo,prix_unitaire,description,quantite_dispo,id_medoc)=>{
        return new Promise((resolve,reject)=>{
            db.query("UPDATE medicament SET nom =$1,photo=$2,prix_unitaire=$3,description=$4,quantite_dispo=$5 WHERE id=id_medoc",[nom,photo,prix_unitaire,description,quantite_dispo,id_medoc],function(err,resultat){
                if(err){
                    reject(new Error("Erreur lors du mise à jour du medicament"));
                }else{
                  resolve(resultat)
                }
            })
            
        })

    },
    deletemedicament:(id)=>{
        return new Promise((resolve, reject) => {
            db.query("DELETE  FROM medicament WHERE id = $1", [id] , function(err, resultat){
                if(err){
                    reject(new Error("Errer resource while dropping medicament"));
                }else{
                  resolve(resultat)
                }
            })
        })
    }

}
