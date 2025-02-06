export interface ConversionResult {
  outputPath: string;
  pageNumber: number;
}

export interface ConversionResponse {
  message: string;
  originalName: string;
  savedAs: string;
  convertedFiles: ConversionResult[];
  totalPages: number;
}

export interface PdfConversionOptions {
  outputFileMask: string;
  pdfFilePassword: string;
  viewportScale: number;
  outputFolder: string;
}
