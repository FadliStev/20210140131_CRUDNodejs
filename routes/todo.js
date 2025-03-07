const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {res.json(todos); });

routes.post('/', (req,res)=> {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201),json(newTodo)

});

module.exports = router;

router.delete('/:id', (req, res)=>{
    const todoIndex = todos.findindex(t => t.id === parseInt(req.params.id));
    if(todoIndex === -1) return res.status(404).json({message:'Tugas tidak ditemukan'});

    const deletedTodo = todos.splice(todoIndex, 1)[0];
    res.status(200).json({message: `Tugas'${deletedTodo.task}' telah dihapus`});
});

router.put('/:id', (req,res)=>{
    router.put(':/id', (req,res)=>{
        const todo = todos.find(t=>t.id === parseInt(req.params.id));
        if(!todo) return res.status(404).json({message:'Tugas Tidak Ditemukan'});
        todo.task = req.body.task||todo.task;

        res.status(200).json({
            message:`Tugas dengan ID ${todo.id} telah diperbarui`,
            updatedTodo:todo
        });
    });
});


