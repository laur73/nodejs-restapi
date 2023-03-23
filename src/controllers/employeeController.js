import { pool } from '../db/db.js';

const obtenerEmpleados = async (req, res) => {
	try {
		const [response] = await pool.query('SELECT * FROM employees');
		res.send(response);
	} catch (error) {
		return res.status(500).json({ msg: 'Error interno del servidor' });
	}
}

const obtenerEmpleado = async (req, res) => {
	const { id } = req.params;

	try {
		const [response] = await pool.query('SELECT * FROM employees WHERE id = ?', id);

		if (response.length <= 0) return res.status(404).json({ msg: 'No se encontró el empleado' });

		res.send(response);
	} catch (error) {
		return res.status(500).json({ msg: 'Error interno del servidor' });
	}
}

const agregarEmpleado = async (req, res) => {
	const { name, salary } = req.body;

	try {
		const response = await pool.query('INSERT INTO employees (name, salary) VALUES(?, ?)', [name, salary]);
		res.send({ id: response.insertId, name, salary });
	} catch (error) {
		return res.status(500).json({ msg: 'Error interno del servidor' });
	}

}

const actualizarEmpleado = async (req, res) => {
	const { id } = req.params;
	const { name, salary } = req.body;

	try {
		const [response] = await pool.query(
			'UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]
		);

		if (response.affectedRows <= 0) return res.status(404).json({ msg: 'No se encontró el empleado' });

		res.send(`Se actualizó el empleado con el id ${id}`);
	} catch (error) {
		return res.status(500).json({ msg: 'Error interno del servidor' });
	}
}

const eliminarEmpleado = async (req, res) => {
	const { id } = req.params;

	try {
		const [response] = await pool.query('DELETE FROM employees WHERE id = ?', id)

		if (response.affectedRows <= 0) return res.status(404).json({ msg: 'No se encontró el empleado' })

		res.send(`Se eliminó el empleado con el id ${id}`)
	} catch (error) {
		return res.status(500).json({ msg: 'Error interno del servidor' });
	}
}

export {
	obtenerEmpleados,
	obtenerEmpleado,
	agregarEmpleado,
	actualizarEmpleado,
	eliminarEmpleado
}