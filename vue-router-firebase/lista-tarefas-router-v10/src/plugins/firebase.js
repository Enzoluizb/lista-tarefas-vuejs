import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCjI_7a4h58K9aENcde2TVHnWdNjmmZKg8",
  authDomain: "todo-list-vue-ec4bc.firebaseapp.com",
  projectId: "todo-list-vue-ec4bc",
  storageBucket: "todo-list-vue-ec4bc.appspot.com",
  messagingSenderId: "989785267867",
  appId: "1:989785267867:web:5f746605c250deefe3303e",
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}