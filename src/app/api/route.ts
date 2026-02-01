import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export async function POST(req: Request) {
  try {
    const { lead, decision } = await req.json();

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE!,
      },
      properties: {
        Nome: {
          title: [
            {
              text: { content: lead.name },
            },
          ],
        },
        "Data do contato": {
          rich_text: [{ text: { content: new Date().toLocaleDateString("pt-BR") } }],
        },
        "Aceitou oferta?": {
          rich_text: [{ text: { content: decision === "accepted" ? "Sim" : "Não" } }],
        },
        WhatsApp: {
          rich_text: [{ text: { content: lead.phone } }],
        },
        Email: {
          rich_text: [{ text: { content: lead.email } }],
        },
        Perfil: {
          rich_text: [{ text: { content: lead.profile } }],
        },
        "Situação atual": {
          rich_text: [
            { text: { content: lead.message || "-" } },
          ],
        }
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.log("[NOTION_ERROR]", error);
    return NextResponse.json(
      { error: "Erro ao salvar lead no Notion" },
      { status: 500 }
    );
  }
}
