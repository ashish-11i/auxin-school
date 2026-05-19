import { initializeApp, getApps, getApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy
} from 'firebase/firestore'
import { Notice, EventItem } from './data/notices'

// Firebase configuration from Vite environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Check if Firebase config is fully provided
const isFirebaseConfigured = !!(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
)

let db: any = null

if (isFirebaseConfigured) {
  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
    db = getFirestore(app)
  } catch (error) {
    console.error('Failed to initialize Firebase:', error)
  }
}

// Helpers for Notices
export async function getDbNotices(): Promise<Notice[]> {
  if (!db) return []
  try {
    const q = query(collection(db, 'notices'), orderBy('createdAt', 'desc'))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: doc.id,
        tag: data.tag || 'Notice',
        tagColor: data.tagColor || '#1a56db',
        title: data.title || '',
        desc: data.desc || '',
        date: data.date || '',
        iconName: data.iconName || 'alert'
      }
    })
  } catch (error) {
    console.error('Error fetching notices from Firestore:', error)
    return []
  }
}

export async function addDbNotice(notice: Omit<Notice, 'id'>): Promise<string | null> {
  if (!db) return null
  try {
    const docRef = await addDoc(collection(db, 'notices'), {
      ...notice,
      createdAt: new Date().toISOString()
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding notice to Firestore:', error)
    return null
  }
}

export async function deleteDbNotice(id: string): Promise<boolean> {
  if (!db) return false
  try {
    await deleteDoc(doc(db, 'notices', id))
    return true
  } catch (error) {
    console.error('Error deleting notice from Firestore:', error)
    return false
  }
}

// Helpers for Events
export async function getDbEvents(): Promise<EventItem[]> {
  if (!db) return []
  try {
    const q = query(collection(db, 'events'), orderBy('createdAt', 'desc'))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: doc.id,
        date: data.date || '',
        month: data.month || '',
        title: data.title || '',
        time: data.time || '',
        desc: data.desc || ''
      }
    })
  } catch (error) {
    console.error('Error fetching events from Firestore:', error)
    return []
  }
}

export async function addDbEvent(event: Omit<EventItem, 'id'>): Promise<string | null> {
  if (!db) return null
  try {
    const docRef = await addDoc(collection(db, 'events'), {
      ...event,
      createdAt: new Date().toISOString()
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding event to Firestore:', error)
    return null
  }
}

export async function deleteDbEvent(id: string): Promise<boolean> {
  if (!db) return false
  try {
    await deleteDoc(doc(db, 'events', id))
    return true
  } catch (error) {
    console.error('Error deleting event from Firestore:', error)
    return false
  }
}

export { db, isFirebaseConfigured }
