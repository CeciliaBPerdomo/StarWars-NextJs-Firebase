import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config";


export async function GET(_, {params}) {
    const {id} = params

    const docRef = doc(db, "planetas", id)
    const docSnapShot = await getDoc(docRef)

    return NextResponse.json(docSnapShot.data())
}