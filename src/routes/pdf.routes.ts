import { Router } from "express";
import { PdfController } from "../controllers/pdf.controller";
import { uploadMiddleware } from "../middleware/upload.middleware";

const router = Router();

router.post(
  "/convert-pdf",
  uploadMiddleware.single("pdf"),
  PdfController.convertPdf
);
router.get("/health", PdfController.healthCheck);

export const pdfRoutes = router;
