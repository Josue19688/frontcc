

export interface UserResponse {
    ok:       boolean;
    usuarios: Usuario[];
}

export interface Usuario {
    id:         number;
    nombre:     string;
    email:      string;
    rol:        string;
    estado:     boolean;
    created_at: null;
}
