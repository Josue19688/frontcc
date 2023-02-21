

export interface PostResponse {
  ok:   boolean;
  post: Post[];
}

export interface Post {
  telegramUser:      string;
  nombre:            string;
  username:          string;
  reenviadoTitulo?:   string;
  reenviadoUsername?: string;
  img?:               string;
  textoImg?:          string;
  texto?:          string;
  uid:               string;
}



