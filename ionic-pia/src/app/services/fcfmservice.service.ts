import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import User from 'src/interfaces/User';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import { Auth } from '@angular/fire/auth';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { Observable, Subject } from 'rxjs';
const firebaseApp = initializeApp(environment.firebaseConfig);
const dbCloudFirestore = getFirestore(firebaseApp);

@Injectable({
  providedIn: 'root',
})
export class FCFMServiceService {
  public isLoged: any = false;
  public logeado: boolean = false;
  private idUser:string;
  db = dbCloudFirestore;
  private loggedInSubject: Subject<boolean> = new Subject<boolean>();

  
  constructor(private auth: Auth) {
    this.idUser = 'nada'
  }




  setUserId(userId: string) {
    this.idUser = userId;
  }

  getUserId() {
    return this.idUser;
  }
  tieneSesion() {
    return false
  }

  getLoggedInSubject(){
    return this.loggedInSubject.asObservable();
  }  

  set(status: boolean){
    this.loggedInSubject.next(status)
  }  
  getStateAuth() {
    return this.auth;
  }
  // addUser(user: User) {
  //   const userRef = collection(this.firestore, 'users');
  //   return addDoc(userRef, user);
  // }
  
  register({ email, password }: User) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

   login({ email, password }: User){
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  logout() {
    this.isLoged = false;
    this.logeado = false;
    return signOut(this.auth);
  }

  
}