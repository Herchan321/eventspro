class Prestataire {
    constructor(data) {
        this.id_prestataire= data.id_prestataire;
        this.nom = data.nom;
        this.email = data.email;
        this.password = data.password;
        this.description = data.description;
        this.telephone = data.telephone;
        this.adresse = data.adresse;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}

export { Prestataire };