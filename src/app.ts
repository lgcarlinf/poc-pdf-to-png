import express from "express";
import { pdfRoutes } from "./routes/pdf.routes";
import { APP_CONFIG } from "./config/app.config";

const app = express();

app.use("/output", express.static(APP_CONFIG.PATHS.OUTPUT));
app.use(pdfRoutes);

export { app };
