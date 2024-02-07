import pool from "../../../../../db.js";

class TimeController {
    async getTime(req, res){
        try {
            const newTime = await pool.query("SELECT * FROM timetable order by id");
            res.json(newTime.rows);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async updateTime(req, res){
        try {
            const {start, finish, id} = req.body;
            const newTime = await pool.query(
                'UPDATE timetable set start=$1::time, finish=$2::time WHERE id=$3 RETURNING *', 
                [start, finish, id]
            );
            res.json(newTime.rows);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new TimeController();