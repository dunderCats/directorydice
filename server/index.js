const cors = require("cors");
const express = require("express");
const proxy = require("./proxy");
const fileUpload = require("express-fileupload");
const {
  query,
  body,
  check,
  param,
  validationResult,
} = require("express-validator");
// const middlewareWrapper = require('cors')

const PORT = 80;
const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
};

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// Test message
app.get("/message", cors(corsOptions), async (req, res) => {
  res.send({ message: "We are the dunder Cats - hoo! " });
});

// Get all members
app.get("/members", cors(corsOptions), async (req, res) => {
  const members = await proxy.selectMembers();
  // console.log(members);
  members ? res.send(members) : res.status(404).send({ message: "Not Found!" });
});

// Get member by id
app.get(
  "/member/:id",
  cors(corsOptions),
  param("id").isNumeric(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const memberId = req.params["id"];
    const member = await proxy.selectMemberById(memberId);
    member ? res.send(member) : res.status(404).send({ message: "Member not found." });
  }
);

// Get member by first name and last name
app.get(
  "/member",
  cors(corsOptions),
  query("first_name").isAlpha(),
  query("last_name").isAlpha(),
  async (req, res) => {
    const errors = validationResult(req);
    // console.log("ERRORS", errors)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const firstName = req.query.first_name;
    const lastName = req.query.last_name;
    const member = await proxy.selectMemberByName(firstName, lastName);
    // console.log(member.length)
    member.length > 0 ? res.send(member) : res.status(404).send({ message: 'Member not found.'});
  }
);

// Post new member to db
app.post(
  "/member",
  cors(corsOptions),
  body("first_name").isAlpha(),
  body("last_name").isAlpha(),
  body("title"),
  body("prof_pic"),
  async (req, res) => {
    const errors = validationResult(req);
    // console.log("err", errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const member = req.body;
    // console.log("post: ", member.affectedRows);
    const newMember = await proxy.insertMember(member);
    newMember ? res.status(200).send({ message: "Member added successfully."}) : res.status(400).send({ message: "Unable to add new member."});
  }
);

app.delete("/member/:id", cors(corsOptions), async (req, res)=>{
  const memberId = req.params['id']
  const deleteMember = await proxy.deleteMember(memberId)
  console.log("s: ", deleteMember)
  res.send(deleteMember)
})

// Test upload image from local machine
// app.post("/upload", cors(corsOptions), async (req, res) => {
//   let pic;
//   let uploadPath;

//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send("No files were uploaded.");
//   }
//   pic = req.files.pic;
//   // console.log(pic);
//   uploadPath = __dirname + '/upload/' + pic.name

//   // Use mv() to place file on the server
//   pic.mv(uploadPath, async function(err){
//     if(err) return res.status(500).send(err);

//     const newPic = await pool.query("UPDATE members SET prof_pic = ? WHERE member_id = 20", [pic.name])

//     res.send('File uploaded!')
//   })
// });

app.listen(PORT, () => {
  console.log(`Express - we are up and running on port: ${PORT}`);
});
