import fs from "fs/promises";
import { existsSync, mkdirSync } from "fs";
import path from "path";

export class FileUtils {
  static ensureDirectoryExists(dirPath: string): void {
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }
  }

  static async readFileAsBuffer(filePath: string): Promise<Buffer> {
    return fs.readFile(filePath);
  }

  static async deleteFile(filePath: string): Promise<void> {
    try {
      await fs.unlink(filePath);
    } catch (error) {
      console.error(`Error deleting file: ${filePath}`, error);
    }
  }

  static getAbsolutePath(relativePath: string): string {
    return path.resolve(relativePath);
  }
}
