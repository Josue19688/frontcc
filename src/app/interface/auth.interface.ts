
export interface AuthResponse {
    ok:      boolean;
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    id:         number;
    nombre:     string;
    email:      string;
    password:   string;
    rol:        string;
    estado:     boolean;
    created_at: null;
}
