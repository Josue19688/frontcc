export interface VisitasResponse {
    ok:      boolean;
    visitas: Visita[];
}

export interface Visita {
    id:           number;
    nombre:       string;
    dpi:          string;
    personaVista: null | string;
    empresa:      string;
    horaEntrada:  string;
    horaSalida:   string;
    descripcion:  string;
    createdAt:    Date;
    updatedAt:    Date;
}
