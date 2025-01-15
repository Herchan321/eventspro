class Client {
    constructor(data) {
        this.id_client = data.id_client;
        this.nom = data.nom;
        this.email = data.email;
        this.password = data.password;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}

export { Client };