import { NextResponse } from "next/server";
import { collection, getDocs} from "firebase/firestore";
import { db } from "@/app/firebase/config";


export async function GET(request, {params}) {    
    const personajesRef = collection(db, "planetas")
    const querySnapShot = await getDocs(personajesRef)
    const docs = querySnapShot.docs.map(doc => doc.data())

    return NextResponse.json(docs)
}