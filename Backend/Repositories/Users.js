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
        user = user.rows[0];
        postgres.release();
        return user;
      } catch (e) {
        postgres.release();
        console.log(e);
        throw Error(e.message);

      }
    };

    getUserByEmail = async (email) => {
        var postgres = await this.pool.connect();
        try {
          var user = await postgres.query(
            "select * from users where email = $1",[email]
          );
          user = user.rows[0];
          postgres.release();
          return user;
        } catch (e) {
          postgres.release();
          console.log(e);
          throw Error(e.message);

        }
      };

      getUserByPhoneNumber = async (phoneNumber) => {
        var postgres = await this.pool.connect();
        try {
          var user = await postgres.query(
            "select * from users where phone_number = $1",[phoneNumber]
          );
          user = user.rows[0];
          postgres.release();
          return user;
        } catch (e) {
          postgres.release();
          console.log(e);
          throw Error(e.message);

        }
      };

    
    insertUser = async (name,phoneNumber,email,password) => {
        var postgres = await this.pool.connect();
        try {
          await postgres.query(
            `insert into users(name,email,phone_number,password) values($1,$2,$3,$4)`,[name,email,phoneNumber,password]
          );
          postgres.release();
        } catch (e) {
          postgres.release();
          console.log(e);
          throw Error(e.message);
        }
      };   
}

module.exports = Users