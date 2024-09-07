import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://rlawlstn098:Nerd210417!@express-mongo.gssef.mongodb.net/?retryWrites=true&w=majority&appName=express-mongo",
      {
        dbName: "todo_memo",
      }
    )
    .then(() => console.log(`MongoDB 연결에 성공하였습니다`))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on(`error`, (err) => {
  console.error(`MongoDB 연결 에러`, err);
});

export default connect;
