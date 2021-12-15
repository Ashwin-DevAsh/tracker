const { Pool } = require("pg");
const clientDetails = require("./Database/postgres");

class Otp{

    pool = new Pool(clientDetails);


    insertOtp = async (email,otp,otpFor,user)=>{
        console.log(email)
        var postgres = await this.pool.connect();
        try {
          await this.deleteOtpData(email,otpFor)
          await postgres.query(
            `insert into otp(otp,otp_for,email,payload) values($1,$2,$3,$4)`,[otp,otpFor,email,user]
          );
          postgres.release();
        } catch (e) {
          postgres.release();
          console.log(e);
          throw Error(e.message);
        }
    }


    checkOtpDataExist = async (email,otpFor)=>{
        var postgres = await this.pool.connect();
        try {
          
          var otpData = await postgres.query(
            "select * from otp where email = $1 and otp_for = $2",[email,otpFor]
          );
          await postgres.query(
            "update otp set tries = tries+1 where email = $1 and otp_for = $2",[email,otpFor]
          );
          otpData = otpData.rows[0];
          postgres.release();
          return otpData;
        } catch (e) {
          postgres.release();
          console.log(e);
          throw Error(e.message);

        }
    }


    deleteOtpData = async (email,otpFor)=>{
        var postgres = await this.pool.connect();
        try {
          var otpData = await postgres.query(
            "delete from otp where email = $1 and otp_for = $2",[email,otpFor]
          );
          otpData = otpData.rows[0];
          postgres.release();
          return otpData;
        } catch (e) {
          postgres.release();
          console.log(e);
          throw Error(e.message);

        }
    }

}

module.exports = Otp