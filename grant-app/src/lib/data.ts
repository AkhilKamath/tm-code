import FoundationModel, { Foundation } from "@/models/foundations"
import dbConnect from "./dbConnect"
import NgoModel, { Ngo } from "@/models/ngos"
import EmailModel, { Email } from "@/models/emails";
const ITEM_PER_PAGE = 10;

export const fetchFoundations = async ({q, page}: {q: string, page: number}): Promise<{count: number, foundations: Foundation[]}> => {
    const regex = new RegExp(q, "i");
    try {
        await dbConnect()
        const count = await FoundationModel.find(({ name: { $regex: regex }})).countDocuments()
        const foundations: Foundation[] = await FoundationModel.find({ name: { $regex: regex }})
        .limit(ITEM_PER_PAGE)
        .skip((page - 1) * ITEM_PER_PAGE )

        return { count, foundations };
    } catch (error) {
        console.error('Error in fetching foundations', error)
        throw new Error('Error in fetching foundations')
    }
}

export const fetchFoundationsNoLimits = async (): Promise<{foundations: Foundation[]}> => {
    try {
        await dbConnect()
        const foundations: Foundation[] = await FoundationModel.find()
        return { foundations };
    } catch (error) {
        console.error('Error in fetching all foundations', error)
        throw new Error('Error in fetching all foundations')
    }
}

export const fetchNgos = async ({q, page}: {q: string, page: number}): Promise<{count: number, ngos: Ngo[]}> => {
    const regex = new RegExp(q, "i");
    try {
        await dbConnect()
        const count = await NgoModel.find({name: {$regex: regex}}).countDocuments()
        const ngos: Ngo[] = await NgoModel.find({name: {$regex: regex}})
        .limit(ITEM_PER_PAGE)
        .skip((page - 1) * ITEM_PER_PAGE)

        return { count, ngos };
    } catch (error) {
        console.error('Error in fetching ngos', error)
        throw new Error('Error in fetching ngos')
    }
}

export const fetchNgosNoLimits = async (): Promise<{ngos: Ngo[]}> => {
    try {
        await dbConnect()
        const ngos: Ngo[] = await NgoModel.find()
        return { ngos };
    } catch (error) {
        console.error('Error in fetching all foundations', error)
        throw new Error('Error in fetching all foundations')
    }
}

export const fetchEmails = async ({q, page}: {q: string, page: number}): Promise<{count: number, emails: Email[]}> => {
    const regex = new RegExp(q, "i");
    try {
        await dbConnect()
        const count = await EmailModel.find(({ name: { $regex: regex }})).countDocuments()
        const emails: Email[] = await EmailModel.find({ name: { $regex: regex }})
        .limit(ITEM_PER_PAGE)
        .skip((page - 1) * ITEM_PER_PAGE )

        return { count, emails };
    } catch (error) {
        console.error('Error in fetching emails', error)
        throw new Error('Error in fetching emails')
    }
}