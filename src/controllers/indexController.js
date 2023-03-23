import { pool } from '../db/db.js'

const ping = async (req, res) => {
	const [result] = await pool.query('SELECT 1+1 AS Result')
	res.json(result)
}

export {
	ping
}