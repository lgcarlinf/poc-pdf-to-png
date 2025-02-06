import { Request, Response } from "express";
import { PdfService } from "../services/pdf.service";
import { ConversionResponse } from "../interfaces/pdf.interface";

export class PdfController {
  static async convertPdf(req: Request, res: Response): Promise<void> {
    try {
      if (!req.file) {
        res.status(400).json({ error: "No se proporcionó ningún archivo" });
        return;
      }

      const convertedPages = await PdfService.convertToImages(req.file.path);

      const response: ConversionResponse = {
        message: "Conversión completada exitosamente",
        originalName: req.file.originalname,
        savedAs: req.file.filename,
        convertedFiles: convertedPages,
        totalPages: convertedPages.length,
      };

      res.json(response);
    } catch (error) {
      console.error("Error en la conversión:", error);
      res.status(500).json({
        error: error instanceof Error ? error.message : "Error desconocido",
      });
    }
  }

  static healthCheck(_req: Request, res: Response): void {
    res.json({ message: "El servidor está funcionando correctamente" });
  }
}
