const { User } = require("../models/user"); // Ensure that User is properly exported from your model
const bcrypt = require("bcrypt");
const { validateUser } = require("../validation/userValidation"); // Ensure this validation function is correctly implemented

const createUser = async (request, h) => {
  // Validate user input
  const { error } = validateUser(request.payload);
  if (error) {
    return h.response({ error: error.details[0].message }).code(400); // Bad Request if validation fails
  }

  const { name, email, password } = request.payload;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return h
        .response({ error: "User already exists with this email" })
        .code(409); 
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Exclude the password field from the response
    const { password: _, ...userData } = user.dataValues;

    return h.response(userData).code(201); // Created
  } catch (error) {
    console.error("Error creating user:", error); 
    return h.response({ message: "Internal Server Error" }).code(500); 
  }
};

const getAllUsers = async (request, h) => {
  try {
    const users = await User.findAll();
    return h.response(users).code(200);
  } catch (error) {
    return h.response({ message: "Internal Server Error" }).code(500);
  }
};

module.exports = { createUser, getAllUsers };
