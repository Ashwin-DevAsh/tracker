const { Pool } = require("pg");
const clientDetails = require("./Database/postgres");


class Users{
    pool = new Pool(clientDetails);

    getAllUsers = async () => {
      var postgres = await this.pool.connect();
      try {
        var user = await postgres.query(
          "select id,name,phone_number,email from users"
        );
        postgres.release();
        user = products.rows[0];
        return user;
      } catch (e) {
        postgres.release();
        console.log(e);
        return [];
      }
    };

    getUserByEmail = async (email) => {
        var postgres = await this.pool.connect();
        try {
          var user = await postgres.query(
            "select * from users where email is $1",[email]
          );
          postgres.release();
          user = products.rows[0];
          return user;
        } catch (e) {
          postgres.release();
          console.log(e);
          return [];
        }
      };

    
    insertUser = async (id,name,phoneNumber,email,password) => {
        var postgres = await this.pool.connect();
        try {
          var user = await postgres.query(
            `insert into users(id,name,email,phone_number,password) values($1,$2,$3,$4,$5)`,[id,name,phoneNumber,email,password]
          );
          postgres.release();
          user = products.rows[0];
          return user;
        } catch (e) {
          postgres.release();
          console.log(e);
          return [];
        }
      };   
}

module.exports = Users