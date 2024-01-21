const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();

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

    const villagesCollection = client.db("unionCouncil").collection("villages");
    const taxCollection = client.db("unionCouncil").collection("tax");

    /*
     * GET METHODS
     */


    // get all documents data  from a collection based on types and paginated value
    // [userCollection, userMessageCollection]
    app.get("/collection/:type", async (req, res) => {
      try {
        const page = parseInt(req.query.page);
        const size = parseInt(req.query.size);
        const type = req.params.type;

        const { field, search } = req.query;
        const searchQuery = {};

        if (search && field) {
          const searchRegex = new RegExp(`^${search}$`, "i");

          // "person" collection
          const personSearchField = [
            "holding_number",
            "national_id",
            "head_of_household_mobile",
            "head_of_household_name",
            "father_or_husband_name",
            "word",
          ];

          if (personSearchField.includes(field)) {
            searchQuery[field] = searchRegex;
          }

          // "business" collection
          if (type.toLowerCase() === "business") {
            const businessSearchField = ["shop_no", "owner_name", "phone"];

            if (businessSearchField.includes(field)) {
              searchQuery[field] = searchRegex;
            }
          }
        }

        let result;

        if (type.toLowerCase().trim() === "house") {
          result = await houseHolderCollection
            .find(searchQuery)
            .sort({ _id: -1 })
            .skip(page * size)
            .limit(size)
            .toArray();
        } else if (type.toLowerCase().trim() === "business") {
          result = await businessCollection
            .find(searchQuery)
            .sort({ _id: -1 })
            .skip(page * size)
            .limit(size)
            .toArray();
        } else if (type.toLowerCase().trim() === "villages") {
          result = await villagesCollection
            .find()
            .sort({ _id: -1 })
            .skip(page * size)
            .limit(size)
            .toArray();
        } else if (type.toLowerCase().trim() === "users") {
          result = await usersCollection
            .find()
            .sort({ _id: -1 })
            .skip(page * size)
            .limit(size)
            .toArray();
        }
        /////
        else if (type.toLowerCase().trim() === "tax") {
          result = await taxCollection
            .find()
            .sort({ _id: -1 })
            .skip(page * size)
            .limit(size)
            .toArray();
        } else if (type.toLowerCase().trim() === "settings") {
          result = await settingsCollection
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
    // [userCollection, userMessageCollection]
    app.post("/collection/:type", async (req, res) => {
      try {
        const type = req.params.type;

        const data = req.body;

        let result;
        if (type.toLowerCase().trim() === "business") {
          result = await businessCollection.insertOne(data);
        } else if (type.toLowerCase().trim() === "house") {
          result = await houseHolderCollection.insertOne(data);
        } else if (type.toLowerCase().trim() === "users") {
          result = await usersCollection.insertOne(data);
        } else if (type.toLowerCase().trim() === "villages") {
          result = await villagesCollection.insertOne(data);
        }
        else if (type.toLowerCase().trim() === "tax") {
          result = await taxCollection.insertOne(data);
        }

        res.send(result);
      } catch (error) {
        res.send(error);
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