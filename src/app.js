//ES Modules
import express from 'express';
import employeesRoutes from './routes/employeeRoutes.js'
import indexRoutes from './routes/indexRoutes.js'

const app = express();

//Pare hacer que express entienda los jsons
app.use(express.json());

//Rutas
app.use('/api/empleados', employeesRoutes);
app.use('/api/', indexRoutes);

//Si no encuentra las rutas anteriores
app.use((req, res, next) => {
	res.status(404).json({ msg: 'endpoint no encontrado' })
})

export default app;