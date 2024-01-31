// import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('Maidika.db');

//FOR REGISTERING USERS.
//function to create 'users' table for Register screen.
export const createUserTable = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, fName TEXT, email TEXT, phone INTEGER, password TEXT, confirmPassword TEXT);',
                [],
                () => {
                    console.log('users table created or already exists');
                    resolve();
                },
                (error) => {
                    console.error('Error creating users table: ', error);
                    reject(error);
                }
            );
        });
    });
};

//function to insert data in 'users' table for Register screen.
export const insertUser = (name, fname, email, phone, password, confirmPassword) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO users (name, fname, email, phone, password, confirmPassword) VALUES (?, ?, ?, ?, ?, ?);',
                [name, fname, email, phone, password, confirmPassword],
                (_, results) => {
                    const insertedId = results.insertId;
                    tx.executeSql(
                        'SELECT * FROM users WHERE id = ?;',
                        [insertedId],
                        (_, selectResults) => {
                            if (selectResults.rows.length > 0) {
                                const insertedData = selectResults.rows.item(0);
                                resolve({ id: insertedId, data: insertedData });
                            } else {
                                reject('Data not found !');
                            }
                        },
                        (_, error) => {
                            reject(error);
                        }
                    );
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
};



//function to save/insert user data along with  path image.
// export const saveUserWithAvatar = async (name, fName, email, phone, password, confirmPassword, avatarUri) => {
//     try {
//         const filename = avatarUri.split('/').pop();
//         const newPath = FileSystem.documentDirectory + filename;
//         await FileSystem.moveAsync({
//             from: avatarUri,
//             to: newPath,
//         });
//         db.transaction((tx) => {
//             tx.executeSql(
//                 'INSERT INTO users (name, fName, email, phone, password, confirmPassword, avatar) VALUES (?, ?, ?, ?, ?, ?, ?)',
//                 [name, fName, email, phone, password, confirmPassword, newPath],
//                 (_, results) => {
//                     const insertedId = results.insertId;
//                     tx.executeSql(
//                         'SELECT * FROM users WHERE id = ?;',
//                         [insertedId],
//                         (_, selectResults) => {
//                             if (selectResults.rows.length > 0) {
//                                 const insertedData = selectResults.rows.item(0);
//                                 resolve({ id: insertedId, data: insertedData });
//                             } else {
//                                 reject('Data not found !');
//                             }
//                         },
//                         (_, error) => {
//                             reject(error);
//                         }
//                     );
//                     console.log('User data with avatar saved successfully');
//                 },
//                 (_, error) => {
//                     console.error('Error saving user data with avatar: ', error);
//                 }
//             );
//         });
//     } catch (error) {
//         console.error('Error saving user with avatar: ', error);
//     }
// };
