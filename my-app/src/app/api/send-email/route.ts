import { NextResponse } from "next/server";
import { Resend } from "resend";

// import { createGoogleMeet } from "@/app/services/googleCalender";

export async function POST(req: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY!);
        const { name, email, phone, date, time } = await req.json();

        // const meetLink = await createGoogleMeet(
        //     name,
        //     email,
        //     date,
        //     time
        // );


        // Customer Email
        const { data: customerData, error: customerError } =
            await resend.emails.send({
                from: "VedaHousing <noreply@vedahousing.com>",
                to: email,
                subject: "Appointment Confirmation",
                html: `
            <h2>Hello ${name},</h2>

            <p>Your appointment has been confirmed.</p>

            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>

            <br/>

            <p>Thank you for choosing <b>VedaHousing</b>.</p>
        `,
            });

        console.log("Customer Email:", customerData);

        if (customerError) {
            console.error(customerError);
            return NextResponse.json(
                {
                    success: false,
                    message: customerError.message,
                },
                {
                    status: 500,
                }
            );
        }

        // Company Email
        const { data: companyData, error: companyError } =
            await resend.emails.send({
                from: "VedaHousing <noreply@vedahousing.com>",
                to: process.env.COMPANY_EMAIL,
                subject: "New Appointment",
                html: `
            <h2>New Appointment Received</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
        `,
            });

        console.log("Company Email:", companyData);

        if (companyError) {
            console.error(companyError);
            return NextResponse.json(
                {
                    success: false,
                    message: companyError.message,
                },
                {
                    status: 500,
                }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Emails sent successfully",
        });
    } catch (err) {
        console.error(err);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to send email.",
            },
            {
                status: 500,
            }
        );
    }
}