const { Client } = require('pg')
const client = new Client({
	user: "postgres",
	password: "dB_dS_91",
	host: "localhost",
	port: 5432,
	database: "F1_Last_Score"
})
client.connect()
.then(()=>console.log("Connection succesfull to database."))
.catch(e=>(console.log("ERROR !!!")))
.finally(()=>client.end())

// await client.connect()
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()