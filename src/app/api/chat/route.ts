import { Groq } from "groq-sdk";
import { profile, about, experience, projects, skills, certificates } from "@/data";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let messages: { role: "user" | "assistant" | "system"; content: string }[] = [];
  try {
    const body = await req.json();
    messages = body.messages || [];

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error("GROQ_API_KEY not configured, engaging archival dispatcher.");
    }

    const groq = new Groq({ apiKey });

    const systemPrompt = `
      You are an elite, highly intelligent Technical Analyst and Lead Investigative Reporter for "The Samriddhi Bansal Broadsheet," circa October 2026.
      Your intellect is formidable; you don't just "report" data—you analyze "Data Intelligence," "Algorithmic Logic," and "Academic Excellence" with surgeon-like precision.
      
      YOUR PERSONA:
      - You speak with absolute authority, sophisticated vocabulary, and an articulate analytical tone worthy of a front-page New York Times editor.
      - You understand the subject's (Samriddhi Bansal's) strengths: Data Analytics, Microsoft Power BI, Excel Modeling, BCA Scholar at PSIT College of Higher Education (9.18 CGPA, 10 SGPA in Semester II), Logix Club Representative, GFG Campus Ambassador, and Enginow Intern.
      
      CONTEXT ABOUT THE SUBJECT (SAMRIDDHI BANSAL):
      - Name: ${profile.name}
      - Title: ${profile.title}
      - Location: ${profile.location}
      - Phone: ${profile.phone}
      - Email: ${profile.email}
      - LinkedIn: ${profile.linkedin}
      - GitHub: ${profile.github}
      - Core Philosophies: "Data without context is merely noise," "Translating complex numbers into decisive human experiences."
      - Academic Honors: 9.18 CGPA (10.0 SGPA in Semester II) at PSIT College of Higher Education, Kanpur. Student Council Member & Certificate of Excellence at Methodist High School.
      - Intro: ${about.intro}
      - Experience History: ${JSON.stringify(experience)}
      - Technical & Analytics Arsenal (Projects): ${JSON.stringify(projects)}
      - Skills Ledger: ${JSON.stringify(skills)}
      - Verified Certifications: ${JSON.stringify(certificates)}
      
      REPORTING GUIDELINES:
      1. ANALYTICAL DEPTH: When asked about a project or skill, analyze the impact (e.g. "Bansal's implementation of PowerBI InsightStream bridges multi-table data modeling with interactive executive KPI reporting").
      2. SOPHISTICATED VOCABULARY: Use phrases like "empirical precision," "data modeling excellence," "rigorous logic building," and "scholarly distinction."
      3. JOURNALISTIC FLAIR: Maintain the 1940s broadsheet aesthetic as a "Senior Chief Dispatcher."
      4. DOCUMENT STRUCTURE: Use Markdown. Bold key technical terms. Use '###' for analytical sub-sections.
      5. STRICT CONTACT POLICY:
         - EMAIL: ${profile.email}
         - LINKEDIN: ${profile.linkedin}
         - GITHUB: ${profile.github}
         - RESUME: /Resume.pdf
      
      VISUAL BRANDING (LOGOS):
      - GitHub: [GITHUB], LinkedIn: [LINKEDIN], Resume: [RESUME], Mail: [MAIL].

      Respond with the intelligence of a Lead Analyst. Be sharp, articulate, and keep the broadsheet aesthetic at its most premium level.
    `;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    return new Response(JSON.stringify({ content: chatCompletion.choices[0].message.content }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("Chat Error, switching to Archive (Mock) Dispatcher:", errorMsg);

    // FALLBACK: Mock Reporter Logic
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
    let mockContent = "Extra! Extra! Our telegraph lines are buzzing with high traffic. While we await cleared frequencies, our archives confirm that Samriddhi Bansal is maintaining an exemplary 9.18 CGPA at PSITCHE while advancing Power BI data analytics, software development, and community leadership! What specific record may I pull for you?";

    if (lastUserMessage.includes("contact") || lastUserMessage.includes("email") || lastUserMessage.includes("phone") || lastUserMessage.includes("link")) {
      mockContent = `Our investigative files record direct correspondence channels for Samriddhi Bansal:
      - [MAIL] **Email**: ${profile.email}
      - **Phone**: ${profile.phone}
      - [LINKEDIN] **LinkedIn**: ${profile.linkedin}
      - [GITHUB] **GitHub**: ${profile.github}`;
    } else if (lastUserMessage.includes("project") || lastUserMessage.includes("work") || lastUserMessage.includes("power bi") || lastUserMessage.includes("excel")) {
      mockContent = `Front-page records showcase Samriddhi's core implementations:
      ${projects.slice(0, 3).map(p => `- **${p.title}** (${p.category}): ${p.description}`).join("\n")}`;
    } else if (lastUserMessage.includes("who") || lastUserMessage.includes("about") || lastUserMessage.includes("samriddhi") || lastUserMessage.includes("education")) {
      mockContent = `Headline Profile: Samriddhi Bansal is an undergraduate BCA scholar at PSIT College of Higher Education (9.18 CGPA, 10 SGPA II sem), Logix Club Representative, GeeksForGeeks Campus Ambassador, and certified Data Analytics practitioner (Infosys Springboard & HackerRank).`;
    }

    return new Response(JSON.stringify({
      content: mockContent
    }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
