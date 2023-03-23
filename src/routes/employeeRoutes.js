import express from 'express';
import {
	obtenerEmpleados,
	obtenerEmpleado,
	agregarEmpleado,
	actualizarEmpleado,
	eliminarEmpleado
}
	from '../controllers/employeeController.js';

const router = express.Router();

router.get('/', obtenerEmpleados)

router.get('/:id', obtenerEmpleado)

router.post('/', agregarEmpleado)

router.patch('/:id', actualizarEmpleado)

router.delete('/:id', eliminarEmpleado)

export default router;