"use server"

import FoundationModel from "@/models/foundations"
import dbConnect from "./dbConnect"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import NgoModel from "@/models/ngos"
import EmailModel from "@/models/emails"


export const addFoundation = async (formData: FormData) => {
    const { name, email, address } = Object.fromEntries(formData)
    try {
        await dbConnect()
        const newFoundation = new FoundationModel({name, email, address})
        await newFoundation.save()
        console.log('saved new foundation', newFoundation._id.toString())
    } catch (error) {
        console.error('error in adding a foundation', error)
        throw new Error('error in adding a foundation')
    }

    revalidatePath('/dashboard/foundations')
    redirect('/dashboard/foundations')
}

export const addNgo = async (formData: FormData) => {
    const { name, email, address } = Object.fromEntries(formData)
    try {
        await dbConnect()
        const newNgo = new NgoModel({name, email, address})
        await newNgo.save()
        console.log('saved new ngo', newNgo._id.toString())
    } catch (error) {
        console.error('error in adding a ngo', error)
        throw new Error('error in adding a ngo')
    }

    revalidatePath('/dashboard/ngos')
    redirect('/dashboard/ngos')
}

export const createEmail = async (formData: FormData) => {
    const { name, foundation_email, emails, content } = Object.fromEntries(formData)
    try {
        await dbConnect()
        const newEmailDoc = new EmailModel({name, foundation_email, emails, content, status: "not_queued"})
        await newEmailDoc.save()
        console.log('saved new email', newEmailDoc._id.toString())
    } catch (error) {
        console.error('error in adding an email doc', error)
        throw new Error('error in adding an email doc')
    }
}