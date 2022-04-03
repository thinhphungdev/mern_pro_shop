import bcryptjs from "bcryptjs";

const users = [
    {
        name:'Max', 
        email: 'max@gmail.com',
        password: bcryptjs.hashSync('123456', 10),
    },
    {
        name:'Brad', 
        email: 'brad@gmail.com',
        password: bcryptjs.hashSync('123456', 10),
    },
    {
        name:'Howard', 
        email: 'howard@gmail.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true 
    }
];

export default users;