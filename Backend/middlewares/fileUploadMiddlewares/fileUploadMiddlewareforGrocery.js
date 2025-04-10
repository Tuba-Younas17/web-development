import multiparty from "connect-multiparty";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use connect-multiparty middleware
export const multipartyMiddleware = multiparty({
	uploadDir: path.resolve(__dirname, "../../public"), // Adjust the path as needed
});
