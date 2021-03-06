import { app } from "./src/app"
import * as dotenv from "dotenv"

dotenv.config();

(async () => {
    const port = process.env.APP_PORT || 3000

    const server = await app()

    server.listen(port, () => {
        console.log(`Server is running at port: ${port}`)
    })
})()