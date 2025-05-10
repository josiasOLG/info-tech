import { Response } from 'express';

export class HttpResponse {
  static ok<T>(res: Response, data?: T, message = 'OK') {
    return res.status(200).json({ success: true, message, data });
  }

  static created<T>(res: Response, data?: T, message = 'Criado com sucesso') {
    return res.status(201).json({ success: true, message, data });
  }

  static badRequest(res: Response, message = 'Requisição inválida') {
    return res.status(400).json({ success: false, message });
  }

  static unauthorized(res: Response, message = 'Não autorizado') {
    return res.status(401).json({ success: false, message });
  }

  static forbidden(res: Response, message = 'Proibido') {
    return res.status(403).json({ success: false, message });
  }

  static notFound(res: Response, message = 'Não encontrado') {
    return res.status(404).json({ success: false, message });
  }

  static error(res: Response, message = 'Erro interno', status = 500) {
    return res.status(status).json({ success: false, message });
  }
}
