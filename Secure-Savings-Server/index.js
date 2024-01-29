const express = require("express");
const cors = require("cors");
// const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion } = require("mongodb");
// const http = require("http");

require("dotenv").config();

const app = express();
// const server = http.createServer(app);
// const io = new Server(server);
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "http://localhost:5173",
//   },
// });

//  io.on("connection", (socket) => {
//    console.log(socket);
//  });

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5000;

const uri = `mongodb+srv://secure-savings:${process.env.DB_PASS}@cluster0.tryvron.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Inserting all the data to the database complete

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const userCollection = client.db("Secure-Savings").collection("UserList");
    const messageCollection = client.db("Secure-Savings").collection("Message");
    const blogCollection = client.db("Secure-Savings").collection("blog");

    // Messaging App with socket.io

    // io.on("connection", (socket) => {
    //   console.log("A user connected");
    //   socket.on("message", (data) => {
    //     console.log("Received message:", data);
    //     io.emit("message", data);
    //   });
    //   socket.on("disconnect", () => {
    //     console.log("User disconnected");
    //   });
    // });
    // Messaging App with socket.io

    /*
     * GET METHODS
     */

    // get all documents data  from a collection based on types and paginated value
    // [userCollection, userMessageCollection, blogCollection]
    app.get("/api/:type", async (req, res) => {
      try {
        const page = parseInt(req.query.page);
        const size = parseInt(req.query.size);
        const type = req.params.type;

        // const { field, search } = req.query;
        // const searchQuery = {};

        // if (search && field) {
        //   const searchRegex = new RegExp(`^${search}$`, "i");

        //   // "person" collection
        //   const personSearchField = [
        //     "holding_number",
        //     "national_id",
        //     "head_of_household_mobile",
        //     "head_of_household_name",
        //     "father_or_husband_name",
        //     "word",
        //   ];

        //   if (personSearchField.includes(field)) {
        //     searchQuery[field] = searchRegex;
        //   }

        //   // "business" collection
        //   if (type.toLowerCase() === "business") {
        //     const businessSearchField = ["shop_no", "owner_name", "phone"];

        //     if (businessSearchField.includes(field)) {
        //       searchQuery[field] = searchRegex;
        //     }
        //   }
        // }

        let result;

        if (type.toLowerCase().trim() === "user") {
          result = await userCollection
            .find()
            .sort()
            .skip(page * size)
            .limit(size)
            .toArray();
        } else if (type.toLowerCase().trim() === "message") {
          result = await messageCollection
            .find()
            .sort({ _id: -1 })
            .skip(page * size)
            .limit(size)
            .toArray();
        } else if (type.toLowerCase().trim() === "blog") {
          result = await blogCollection
            .find()
            .sort({ _id: -1 })
            .skip(page * size)
            .limit(size)
            .toArray();
        }

        res.send(result);
      } catch (error) {
        console.log(error);
        res.send(error);
      }
    });

    // add a document in a collection based on type
    // [userCollection, userMessageCollection,blogCollection]
    app.post("/api/:type", async (req, res) => {
      try {
        const type = req.params.type;
        const data = req.body;
        let result;
        if (type.toLowerCase().trim() === "user") {
          result = await userCollection.insertOne(data);
        } else if (type.toLowerCase().trim() === "message") {
          result = await messageCollection.insertOne(data);
        } else if (type.toLowerCase().trim() === "blog") {
          result = await blogCollection.insertOne(data);
        }
        res.send(result);
      } catch (error) {
        res.send(error);
      }
    });

    // user status update put req
    app.put("/api/user/update-status/:email", async (req, res) => {
      const userEmail = req.params.email;
      const newStatus = req.body.status;
      const filter = { email: userEmail };
      const update = { $set: { status: newStatus } };

      try {
        const result = await userCollection.updateOne(filter, update);

        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "User not found" });
        }

        res.json(result);
      } catch (error) {
        console.error("Error updating user status:", error.message);
        res.status(500).json({ message: "Internal server error" });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("users").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server Running...");
});

app.listen(port, () => {
  console.log("Server Running on port", port);
});
