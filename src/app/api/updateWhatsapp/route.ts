import { NextResponse } from "next/server";
import prisma from "@/app/utils/prisma";


export async function POST(req: Request) {
  try {
    console.log("masuk kontol");

    console.log(prisma, "<This is prisma ")
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Update the counter in the WhatsApp model
    const updatedWhatsapp = await prisma.whatsapp.upsert({
      where: { wa_date: today },
      update: {
        wa_counter: { increment: 1 },
      },
      create: {
        wa_date: today,
        wa_counter: 1,
      },
    });

    return NextResponse.json(
      { message: "WhatsApp click recorded successfully", updatedWhatsapp },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating WhatsApp click:", error);
    return NextResponse.json(
      { error: "Failed to update WhatsApp click" },
      { status: 500 }
    );
  }
}
