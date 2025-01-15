class Ville {
    constructor(data) {
        this.id_ville= data.id_ville;
        this.nom = data.nom;
        this.region = data.region;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}

export { Ville };