import { prisma } from "lib/prisma"

export default async function handler(req, res) {
    // Grab the info from the html body
    const {name, email, feedbackType, message} = req.body;
    try {
        // Call Prisma ORM
        await prisma.feedback.create({
            data: {name, email, feedbackType, message}
        })
        res.status(200).json({messag: "submitted successfully"})
    }
    catch(error) {
        res.status(400).json({ error });
    }
}
