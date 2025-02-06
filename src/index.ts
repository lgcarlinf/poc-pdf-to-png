import { app } from "./app";
import { APP_CONFIG } from "./config/app.config";

app.listen(APP_CONFIG.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${APP_CONFIG.PORT}`);
});
