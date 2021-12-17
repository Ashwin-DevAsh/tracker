const { Pool } = require("pg");
const clientDetails = require("./Database/postgres");


class Initiative{
    pool = new Pool(clientDetails);

    insertInitative = async (name,description,images,initiated_by,status) => {
      var postgres = await this.pool.connect();
      try {
        const id = (await postgres.query(
          "insert into initiatives(name,description,images,initiated_by,status) values($1,$2,$3,$4,$5) returning id",
          [name,description,images,initiated_by,status]
        )).rows[0].id;
        postgres.release();
        return id
      } catch (e) {
        postgres.release();
        console.log(e);
        throw Error(e.message);
      }
    };

    deleteInitative = async (initiative_id) => {
        var postgres = await this.pool.connect();
        try {
           await postgres.query(
            "delete from initiatives where id =$1",[initiative_id]
          );
          postgres.release();
        } catch (e) {
          postgres.release();
          console.log(e);
          throw Error(e.message);
        }
      };
 
}

module.exports = Initiative