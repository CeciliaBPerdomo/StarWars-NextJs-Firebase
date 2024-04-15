import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/config";


export async function GET(request, {params}) {    
    const navesRef = collection(db, "naves")
    const querySnapShot = await getDocs(navesRef)
    const docs = querySnapShot.docs.map(doc => doc.data())

    return NextResponse.json(docs)
}