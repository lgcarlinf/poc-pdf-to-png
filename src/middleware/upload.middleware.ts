import multer from "multer";
import path from "path";
import { APP_CONFIG } from "../config/app.config";
import { FileUtils } from "../utils/file.utils";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    FileUtils.ensureDirectoryExists(APP_CONFIG.PATHS.UPLOADS);
    cb(null, APP_CONFIG.PATHS.UPLOADS);
  },
  filename: (_req, file, cb) => {
    const uniqueFilename = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueFilename);
  },
});

export const uploadMiddleware = multer({ storage });
