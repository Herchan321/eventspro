class Service {
    constructor(data) {
        this.id_service= data.id_service;
        this.titre = data.titre;
        this.description = data.description;
        this.prix = data.prix;
        this.images = data.images ? JSON.parse(data.images) : []; // Si `images` est stocké en JSON
        this.mainImage = data.mainImage || (this.images.length > 0 ? this.images[0] : null);
        this.id_categorie = data.id_categorie;
        this.id_ville = data.id_ville;
        this.id_prestataire = data.id_prestataire;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }

    addImage(imageUrl) {
        if (!this.images.includes(imageUrl)) {
            this.images.push(imageUrl);
            if (!this.mainImage) this.mainImage = imageUrl;
        }
    }

    removeImage(imageUrl) {
        this.images = this.images.filter(img => img !== imageUrl);
        if (this.mainImage === imageUrl) {
            this.mainImage = this.images[0] || null;
        }
    }

    setMainImage(imageUrl) {
        if (this.images.includes(imageUrl)) {
            this.mainImage = imageUrl;
        }
    }

    getImages() {
        return this.images;
    }

    getMainImage() {
        return this.mainImage;
    }
}

export { Service };