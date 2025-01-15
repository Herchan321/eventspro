class CategorieService {
    constructor(data) {
        this.id_categorie = data.id_categorie;
        this.nom = data.nom;
        this.description = data.description;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}

export { CategorieService };