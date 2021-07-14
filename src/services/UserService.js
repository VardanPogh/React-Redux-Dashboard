import { db } from "auth/FirebaseAuth";
import { USERS } from "../constants/DBConstant";
const Uerservice = {};

Uerservice.saveUserProfile = async (id, data) =>
  await db
    .collection(USERS)
    .doc(id)
    .set(data)
    .then((user) => user)
    .catch((err) => err);

export default Uerservice;
