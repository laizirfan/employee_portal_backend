const server = require("json-server")

const employeServer = server.create()

const router = server.router("db.json")

const middleware = server.defaults()

employeServer.use(middleware)
employeServer.use(router)

const PORT = 3000 || process.env.PORT

employeServer.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
})
