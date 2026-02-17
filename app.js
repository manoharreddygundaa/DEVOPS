const express = require('express');
const app = express();
const students = [
    { id: 1, name: "Manohar", course: "CSE" },
    { id: 2, name: "Ravi", course: "ECE" },
    { id: 3, name: "Sneha", course: "IT" }
];
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Student API" });
});
app.get('/students', (req, res) => {
    res.json(students);
});
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }

    res.json(student);
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
