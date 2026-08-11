import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

import { getFirebaseConfig } from "./config";

let firestore: Firestore | undefined;
let storage: FirebaseStorage | undefined;

export function getFirebaseApp(): FirebaseApp {
  return getApps().length > 0 ? getApp() : initializeApp(getFirebaseConfig());
}

export function getFirebaseDb(): Firestore {
  firestore ??= getFirestore(getFirebaseApp());
  return firestore;
}

export function getFirebaseStorage(): FirebaseStorage {
  storage ??= getStorage(getFirebaseApp());
  return storage;
}

