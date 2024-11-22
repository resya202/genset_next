import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import dns from "dns";
import prisma from "@/app/utils/prisma";

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateDomain = (email: string): Promise<boolean> => {
    return new Promise((resolve) => {
        const domain = email.split("@")[1];
        dns.resolveMx(domain, (err, addresses) => {
            if (err || addresses.length === 0) {
                resolve(false); // Invalid domain
            } else {
                resolve(true); // Valid domain
            }
        });
    });
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fullName, email, contactNumber, subject, message } = body;

        if (!fullName || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (!validateEmail(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        if (!(await validateDomain(email))) {
            return NextResponse.json(
                { error: "Invalid email domain" },
                { status: 400 }
            );
        }

        // Save the contact details to Prisma `Clients` model
        const newClient = await prisma.clients.create({
            data: {
                cln_full_name: fullName,
                cln_email: email,
                cln_contact_number: contactNumber || null,
                cln_subject: subject || null,
                message: message,
            },
        });

        // Set up OAuth2 client
        const oAuth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            "https://developers.google.com/oauthplayground"
        );

        oAuth2Client.setCredentials({
            refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
        });

        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "minusonebtn@gmail.com",
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                accessToken: accessToken.token || "",
            },
        });

        const mailOptions = {
            from: `Website - ${fullName} <${email}>`,
            to: "minusonebtn@gmail.com",
            replyTo: email,
            subject: subject || "Contact Details from Website...",
            html: `
                <h1>Pertanyaan Dari Website</h1>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact Number:</strong> ${contactNumber || "N/A"}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully!", clientId: newClient.id },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
