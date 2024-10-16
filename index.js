import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import 'dotenv/config'

console.log('start du programme !')

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

//hhhhh


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function getfacture(db) {
  const factureCol = collection(db, 'factures');
  const factureSnapshot = await getDocs(factureCol);
  const factures = factureSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()}));
  return factures;
}
const  factures = await getfacture(db)
console.log(factures)