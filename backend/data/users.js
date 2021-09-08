import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456"),
        isAdmin: true
    },
    {
        name: "Bomi",
        email: "bomi@example.com",
        password: bcrypt.hashSync("123456")
    },
    {
        name: "Tholie",
        email: "admins@example.com",
        password: bcrypt.hashSync("123456")
    }
]

export default users;