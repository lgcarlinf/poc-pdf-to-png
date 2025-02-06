import { pdfToPng } from "pdf-to-png-converter";
import {
  PdfConversionOptions,
  ConversionResult,
} from "../interfaces/pdf.interface";
import { APP_CONFIG } from "../config/app.config";
import { FileUtils } from "../utils/file.utils";

export class PdfService {
  static async convertToImages(pdfPath: string): Promise<ConversionResult[]> {
    const outputDir = FileUtils.getAbsolutePath(APP_CONFIG.PATHS.OUTPUT);
    FileUtils.ensureDirectoryExists(outputDir);

    const pdfBuffer = await FileUtils.readFileAsBuffer(pdfPath);

    const options: PdfConversionOptions = {
      outputFileMask: APP_CONFIG.CONVERSION.OUTPUT_MASK,
      pdfFilePassword: APP_CONFIG.CONVERSION.PASSWORD,
      viewportScale: APP_CONFIG.CONVERSION.VIEWPORT_SCALE,
      outputFolder: outputDir,
    };

    const pngPages = await pdfToPng(pdfBuffer, options);
    await FileUtils.deleteFile(pdfPath);

    return pngPages.map((page) => ({
      outputPath: page.path,
      pageNumber: page.pageNumber,
    }));
  }
}
