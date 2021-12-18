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


    getAllInitiatives = async () => {
      var postgres = await this.pool.connect();
      try {
        const initiatives = (await postgres.query(
          `select 

              initiatives.id as initiative_id,
              initiatives.name as initiative_name,
              initiatives.description as initiative_description,
              initiatives.images as initiative_images,
              initiatives.created_at as initiative_created_at,
              initiatives.initiated_by as initiative_initiated_by,
              initiatives.status as initiative_status,

              users.name as user_name,
              contributers.totalcount as total_contributers
           from 
              initiatives 
                 left join
              users on initiatives.initiated_by = users.id
                 left join 
              (select count(*) as totalcount , access_for from initiative_access where status = 'approved' group by access_for) as contributers
                  on 
               initiatives.id = contributers.access_for`,
        )).rows;
        postgres.release();
        return initiatives
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