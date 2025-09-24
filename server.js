require('dotenv').config();
const express = require('express');
const Task = require('./task');
const sequelize = require('./database');

const app = express();
const port = process.env.PORT || 3000;

sequelize.sync();

app.use(express.json());

//Aqui iran las rutas del CRUD
// CREAR TAREA
app.post('/tasks', async (req, res) => {
    const task = await Task.create(req.body);
    res.json(task);
});

// LEER TAREAS
app.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
});

// ACTUALIZAR TAREA
app.put('/tasks/:id', async (req, res) => {
    const affedtedRows = await Task.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.json({ message: `Changed ${affedtedRows} row(s)` });
});

// ELIMINAR TAREA
app.delete('/tasks/:id', async (req, res) => {
    const deletedRows = await Task.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json({ message: `Deleted ${deletedRows} row(s)` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;