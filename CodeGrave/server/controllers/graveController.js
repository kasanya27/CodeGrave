const graves = [];

exports.getAllGraves = (req, res) => {
    res.json(graves);
};

exports.createGrave = (req, res) => {
    const { repo, eulogy } = req.body;
    const newGrave = { id: graves.length + 1, repo, eulogy };
    graves.push(newGrave);
    res.status(201).json(newGrave);
};