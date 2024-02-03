import pool from "../../../../../db.js";

class TimeController {
    async getTime(req, res){
        try {
            const newTime = await pool.query("SELECT id, to_char(start, 'hh24:mm') as start, to_char(finish, 'hh24:mm') as finish FROM timetable");
            res.json(newTime.rows);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async updateTime(req, res){
        try {
            const {start, end, id} = req.body;
            const newTime = await pool.query(
                'UPDATE timetable set start = $1, end = $2 WHERE id = $3', 
                [start, end, id]
            );
            res.json(newTime.rows);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new TimeController();