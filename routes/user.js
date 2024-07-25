const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

// router.get("/users", async (req, res) => {
//   const allDbUsers = await User.find({});
//   const html = `
//   <ul>
//     ${allDbUsers
//       .map((user) => `<li>${user.firstName}-${user.email}</li>`)
//       .join("")}
//   </ul>
//   `;
//   res.send(html);
// });

//REST API
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);
// app.get("/users", (req, res) => {
//   res.send(html);
// });

// users.push({ ...body, id: users.length + 1 });
// fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//   return res.status(201).json({ status: "success", id: users.length });
// });

module.exports = router;
