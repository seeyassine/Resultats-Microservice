const db = require('../db/db');

// Créer un résultat
exports.creerResultat = async (req, res) => {
    const { val_temp, val_hum, val_sol, date_resultat, serie } = req.body;
    try {
        const [result] = await db.execute(
            "INSERT INTO Resultat (val_temp, val_hum, val_sol, date_resultat, serie) VALUES (?, ?, ?, ?, ?)",
            [val_temp, val_hum, val_sol, date_resultat, serie]
        );
        res.status(201).json({ message: "Résultat créé avec succès", id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Récupérer tous les résultats
exports.listerResultats = async (req, res) => {
    try {
        const [resultats] = await db.execute("SELECT * FROM Resultat");
        res.status(200).json(resultats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Récupérer un résultat par ID
exports.getResultatById = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.execute("SELECT * FROM Resultat WHERE id = ?", [id]);
        if (result.length === 0) {
            return res.status(404).json({ error: "Résultat non trouvé" });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mettre à jour un résultat
exports.modifierResultat = async (req, res) => {
    const { id } = req.params;
    const { val_temp, val_hum, val_sol, date_resultat, serie } = req.body;
    try {
        const [result] = await db.execute(
            "UPDATE Resultat SET val_temp = ?, val_hum = ?, val_sol = ?, date_resultat = ?, serie = ? WHERE id = ?",
            [val_temp, val_hum, val_sol, date_resultat, serie, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Résultat non trouvé" });
        }
        res.status(200).json({ message: "Résultat mis à jour avec succès" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Supprimer un résultat
exports.supprimerResultat = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.execute("DELETE FROM Resultat WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Résultat non trouvé" });
        }
        res.status(200).json({ message: "Résultat supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Récupérer un résultat par Serie
exports.getResultatBySerie = async (req, res) => {
    const { serie } = req.params;

    try {
        const [result] = await db.execute("SELECT * FROM Resultat WHERE serie = ?", [serie]);
        if (result.length === 0) {
            return res.status(404).json({ error: "Résultat non trouvé" });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
