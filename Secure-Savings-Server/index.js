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

    // count data
    app.get("/collection/totalCount", async (req, res) => {
      const totalCount = {
        house: 0,
        villages: 0,
        homeTax: 0,
        businessTax: 0,
        business: 0,
        totalHomeAssessmentTax: 0,
        totalBusinessAssessmentTax: 0,
        totalHomePaidTax: 0,
        totalBusinessPaidTax: 0,
        todayPayment: 0,
      };
      try {
        totalCount.house = await houseHolderCollection.estimatedDocumentCount();

        totalCount.business = await businessCollection.estimatedDocumentCount();

        totalCount.villages = await villagesCollection.estimatedDocumentCount();

        // totalCount.homeTax = await homeTaxCollection.estimatedDocumentCount();

        totalCount.businessTax =
          await businessTaxCollection.estimatedDocumentCount();

        //tax count

        // home assessment total
        const homeAssessmentTaxDoc = await houseHolderCollection
          .find({}, { projection: { tax_based_on_assessment: 1, _id: 0 } })
          .toArray();

        const homeAssessmentSum = homeAssessmentTaxDoc.reduce(
          (accumulator, doc) =>
            accumulator + Number(doc.tax_based_on_assessment),
          0
        );
        totalCount.totalHomeAssessmentTax = homeAssessmentSum;

        // home tax paid total
        // const query = {type}
        const homePaidTaxDoc = await taxCollection
          .find(
            { type: "household" },
            // {_id:new ObjectId('657bd00e268523a156f498f6')},
            { projection: { amount: 1, _id: 0 } }
          )
          .toArray();
        const homePaidSum = homePaidTaxDoc.reduce(
          (accumulator, doc) => accumulator + Number(doc.amount),
          0
        );
        totalCount.totalHomePaidTax = homePaidSum;

        //total business Assessment tax
        const businessAssessmentTaxDoc = await businessCollection
          .find({}, { projection: { assesment_tax: 1, _id: 0 } })
          .toArray();

        const businessAssessmentSum = businessAssessmentTaxDoc.reduce(
          (accumulator, doc) => accumulator + Number(doc.assesment_tax),
          0
        );
        totalCount.totalBusinessAssessmentTax = businessAssessmentSum;

        // Business tax paid total

        const businessPaidTaxDoc = await taxCollection
          .find({ type: "business" }, { projection: { amount: 1, _id: 0 } })
          .toArray();

        const businessPaidSum = businessPaidTaxDoc.reduce(
          (accumulator, doc) => accumulator + Number(doc.amount),
          0
        );
        totalCount.totalBusinessPaidTax = businessPaidSum;

        // Today's Payment
        const today = new Date();
        const formattedToday = today.toDateString();

        // Get today's total pay
        const todayTotalPayDoc = await taxCollection
          .find(
            { PaymentDate: formattedToday },
            { projection: { amount: 1, type: 1, _id: 0 } }
          )
          .toArray();

        totalCount.todayPayment = todayTotalPayDoc.reduce(
          (accumulator, doc) => {
            if (doc.type === "business" || doc.type === "household") {
              return accumulator + Number(doc.amount);
            }
            return accumulator;
          },
          0
        );

        res.send(totalCount);
      } catch (error) {
        console.log(error);
        res.status(500).send("There was a server side error!!");
      }
    });

    // get all documents data  from a collection based on types and paginated value
    // [house, business, villages, user, homeTax, businessTax]
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

    // get single documents data  from a collection based on types and paginated value
    // [userCollection, userMessageCollection]
    app.get("/collection/:type/:id", async (req, res) => {
      try {
        const { type, id } = req.params;
        // console.log("page:", page, "size: ", size);
        let result = {};

        const query = { _id: new ObjectId(id) };
        const taxQuery = { uniqId: id };
        const taxInfo = await taxCollection.find(taxQuery).toArray();

        if (type.toLowerCase().trim() === "house") {
          const houseHold = await houseHolderCollection.findOne(query);
          result = { ...houseHold, taxInfo };
        } else if (type.toLowerCase().trim() === "business") {
          const business = await businessCollection.findOne(query);
          result = { ...business, taxInfo };
        } else if (type.toLowerCase().trim() === "villages") {
          result = await villagesCollection.findOne(query);
        } else if (type.toLowerCase().trim() === "users") {
          result = await usersCollection.findOne(query);
        } else if (type.toLowerCase().trim() === "homeTax") {
          result = await homeTaxCollection.findOne(query);
        } else if (type.toLowerCase().trim() === "businessTax") {
          result = await businessTaxCollection.findOne(query);
        }
        /////
        else if (type.toLowerCase().trim() === "tax") {
          result = await taxCollection.findOne(query);
        } else if (type.toLowerCase().trim() === "settings") {
          result = await settingsCollection.findOne(query);
        }

        res.send(result);
      } catch (error) {
        console.log(error);
        res.send(error);
      }
    });


    app.post("/logout", (req, res) => {
      const { email } = req.body;
      res.clearCookie("token", { maxAge: 0 }).send({ success: true });
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
