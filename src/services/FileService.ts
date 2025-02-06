import fs from "fs";

export class FileService {
  public static ensureDirectoryExists(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
  }

  public static deleteFile(filePath: string): void {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  public static readFileAsBuffer(filePath: string): Buffer {
    return fs.readFileSync(filePath);
  }
}
