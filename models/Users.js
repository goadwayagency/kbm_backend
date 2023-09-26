// const mysql = require('mysql');


// const UserType = {
//   ATHLETE: 'athlete',
//   ADMIN: 'admin',
//   COACH: 'coach',
// };

// const Disciplines = {
//   BOXE: 'boxe',
//   KICKBOXE: 'kickboxe',
//   MUAYTHAI: 'muaythai',
//   MMA: 'mma',
//   LUTTE: 'lutte',
//   JUJITSU: 'jujitsu',
//   TAEKWONDO: 'taekwondo',
//   CROSS_TRAINING: 'cross training',
// };

// // Create a MySQL connection pool
// const pool = mysql.createConnection({
//   host: 'srv659.hstgr.io',
//   user: 'u861150053_kbmorocco',
//   password: '1234@Kbm',
//   database: 'u861150053_kbmorocco',
// });


// // Function to execute MySQL queries
// const query = (sql, params) =>
//   new Promise((resolve, reject) => {
//     pool.query(sql, params, (err, results) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(results);
//     });
//   });

// const createUser = async (user) => {
//   const sql = `
//     INSERT INTO users (id, email, password, phone, authToken, type, discipline, username, status, firstName, lastName, avatar, document, dob, createdAt, updatedAt)
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//   `;

//   const params = [
//     user.id,
//     user.email,
//     user.password,
//     user.phone,
//     user.authToken,
//     user.type || UserType.ATHLETE,
//     user.discipline || Disciplines.KICKBOXE,
//     // user.username || null,
//     user.status || 'offline',
//     user.firstName || null,
//     user.lastName || null,
//     user.avatar || null,
//     user.document || null,
//     user.dob || null,
//     new Date(),
//     new Date(),
//   ];

//   try {
//     await query(sql, params);
//     console.log('User created successfully');
//   } catch (error) {
//     console.error('Error creating user:', error);
//   }
// };



// // createUser(user);
