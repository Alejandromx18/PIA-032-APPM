import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import User from 'src/interfaces/User';
import {Router } from '@angular/router';
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
  public logeado: boolean = false;
  public isLoged : any = false;
  auth: Auth;

  db = dbCloudFirestore;
  private loggedInSubject: Subject<boolean> = new Subject<boolean>();

  
  constructor(private router: Router) {
    this.auth = getAuth(firebaseApp);
    onAuthStateChanged(this.auth, user => {
      if(user!= undefined || user != null){
        this.isLoged = user;
      }
    });
   }
   tieneSesion(){
    return this.isLoged;
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