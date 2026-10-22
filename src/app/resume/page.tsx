import { skills, certificates, profile, experience, clientWork } from "@/data";

export default function Resume() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 min-h-screen font-sans text-foreground transition-colors duration-500 overflow-x-hidden md:overflow-x-visible">

      {/* Section Header */}
      <div className="text-center border-b-[6px] border-double border-foreground pb-4 mb-10">
        <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold mb-1 text-foreground/60">Career & Capabilities — Section D</p>
        <h1 className="font-['Playfair_Display'] text-4xl xs:text-5xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-none">The Dossier</h1>
        <p className="font-['Lora'] italic text-sm sm:text-base mt-2 text-foreground/60 px-4">Complete professional record of Samriddhi Bansal. Verified, filed, and ready for inspection.</p>
      </div>

      {/* Identity + Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-y-2 border-foreground mb-10 divide-x-2 divide-foreground text-center bg-foreground/5 transition-colors duration-500">
        <div className="py-4 px-1 xs:px-2">
          <p className="font-['Playfair_Display'] text-2xl xs:text-3xl font-black text-foreground">9.18</p>
          <p className="font-sans text-[8px] xs:text-[10px] uppercase tracking-widest font-bold text-foreground/60">Cumulative CGPA</p>
        </div>
        <div className="py-4 px-1 xs:px-2">
          <p className="font-['Playfair_Display'] text-2xl xs:text-3xl font-black text-[#27ae60]">10.0</p>
          <p className="font-sans text-[8px] xs:text-[10px] uppercase tracking-widest font-bold text-foreground/60">SGPA (II Semester)</p>
        </div>
        <div className="py-4 px-1 xs:px-2">
          <p className="font-['Playfair_Display'] text-2xl xs:text-3xl font-black text-foreground">4</p>
          <p className="font-sans text-[8px] xs:text-[10px] uppercase tracking-widest font-bold text-foreground/60">Verified Certifications</p>
        </div>
        <div className="py-4 px-1 xs:px-2">
          <p className="font-['Playfair_Display'] text-2xl xs:text-3xl font-black text-foreground">3+</p>
          <p className="font-sans text-[8px] xs:text-[10px] uppercase tracking-widest font-bold text-foreground/60">Leadership Tenures</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left column */}
        <div className="lg:col-span-7 pr-0 lg:pr-10 border-r-0 lg:border-r-[1.5px] border-foreground/40 space-y-10">

          {/* Experience */}
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase border-b-2 border-foreground pb-2 mb-6 text-foreground">Leadership & Experience Record</h2>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="border-l-4 border-foreground pl-5 relative">
                  <div className="absolute -left-[9px] top-1 w-3.5 h-3.5 bg-foreground rounded-full" />
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <div>
                      <h3 className="font-['Playfair_Display'] font-black text-xl uppercase leading-tight text-foreground">{exp.role}</h3>
                      <p className="font-['Lora'] italic text-base text-foreground/80">{exp.org}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-foreground px-2 py-0.5 text-foreground">{exp.type}</span>
                      <p className="font-mono text-xs text-foreground/60 mt-1">{exp.period}</p>
                    </div>
                  </div>
                  <p className="font-['Lora'] text-sm text-justify-news mt-2 mb-3 text-foreground/80">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h, i) => (
                      <span key={i} className="font-sans text-[10px] font-bold border border-foreground/40 px-2 py-0.5 bg-foreground/5 text-foreground/70">{h}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Honors */}
          <div className="border-t-4 border-foreground pt-6">
            <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase border-b-2 border-foreground pb-2 mb-6 text-foreground">Academic Pedigree</h2>
            <div className="space-y-4">
              <div className="border border-foreground/40 p-4 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-500">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <div>
                    <h4 className="font-['Playfair_Display'] font-black text-xl text-foreground">Bachelor of Computer Applications (BCA)</h4>
                    <p className="font-['Lora'] italic text-sm text-foreground/70">PSIT College of Higher Education, Kanpur</p>
                  </div>
                  <span className="font-mono text-xs font-bold bg-foreground text-background px-2 py-0.5">2025–2028</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-sans font-bold uppercase tracking-wider my-2">
                  <span className="text-accent">Cumulative CGPA: 9.18</span>
                  <span>·</span>
                  <span className="text-[#27ae60]">Semester II: Perfect 10.0 SGPA</span>
                </div>
                <p className="font-['Lora'] text-sm text-foreground/80">
                  Comprehensive study encompassing Data Analysis Fundamentals, Object-Oriented Programming (C, C++, Python), Database Management, Fundamentals of IT, and Software Engineering.
                </p>
              </div>

              <div className="border border-foreground/40 p-4 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-500">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <div>
                    <h4 className="font-['Playfair_Display'] font-black text-xl text-foreground">Senior Secondary & High School (ICSE/ISC)</h4>
                    <p className="font-['Lora'] italic text-sm text-foreground/70">Methodist High School, Kanpur</p>
                  </div>
                  <span className="font-mono text-xs text-foreground/70">Class XI & XII</span>
                </div>
                <p className="font-['Lora'] text-sm text-foreground/80">
                  Elected Student Council Member (Class XI & XII). Awarded the prestigious <strong>Certificate of Excellence</strong> for exemplary service and discipline. Consistent academic performer from ICSE to undergraduate level.
                </p>
              </div>
            </div>
          </div>

          {/* Client & Community Engagements */}
          <div className="border-t-4 border-foreground pt-6">
            <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase border-b-2 border-foreground pb-2 mb-6 text-foreground">Initiatives & Dispatches</h2>
            <div className="space-y-4">
              {clientWork.map((work, idx) => (
                <div key={idx} className="border border-foreground/40 p-4 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-black text-xl text-foreground">{work.project}</h4>
                      <p className="font-['Lora'] italic text-sm text-foreground/70">Organization: <strong className="text-foreground">{work.client}</strong> · via {work.via}</p>
                    </div>
                  </div>
                  <p className="font-['Lora'] text-sm mb-3 text-foreground/80">{work.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {work.tech.map((t, i) => <span key={i} className="font-mono text-[10px] border border-foreground/40 px-1.5 py-0.5 text-foreground/60">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="border-t-4 border-foreground pt-6">
            <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase border-b-2 border-foreground pb-2 mb-6 text-foreground">Technical Clearances</h2>
            <div className="space-y-5">
              {skills.map((group, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-sans font-bold text-[10px] uppercase tracking-widest border-b border-foreground pb-0.5 text-foreground">{group.category}</p>
                    {group.tag && <span className="font-sans text-[9px] font-bold uppercase tracking-widest border border-foreground px-1 text-foreground/60">{group.tag}</span>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <span key={i} className="font-['Lora'] text-sm border border-foreground px-2 py-0.5 bg-foreground/5 hover:bg-foreground hover:text-background transition-colors cursor-default text-foreground duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="lg:col-span-5 space-y-8">

          {/* Identity Card */}
          <div className="border-[3px] border-foreground p-5 shadow-[5px_5px_0_#000] dark:shadow-[5px_5px_0_#333] bg-foreground/5 transition-colors duration-500">
            <h3 className="font-['Playfair_Display'] text-xl font-black uppercase border-b-2 border-foreground pb-2 mb-4 text-center text-foreground">Identity Clearance</h3>
            <div className="grid grid-cols-2 gap-4 font-['Lora'] text-sm">
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Designation</p><p className="font-semibold text-foreground">Data Analyst & Developer</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Clearance</p><p className="font-semibold text-foreground">BCA Undergraduate Scholar</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Institution</p><p className="font-semibold text-foreground">PSITCHE Kanpur</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Academic CGPA</p><p className="font-semibold text-[#27ae60]">9.18 / 10.0 (10 SGPA)</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Term</p><p className="font-semibold text-foreground">2025–2028</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Phone</p><p className="font-semibold text-foreground">{profile.phone}</p></div>
            </div>
            <div className="mt-4 pt-4 border-t border-foreground space-y-2">
              <a href={`mailto:${profile.email}`} className="block font-sans font-bold text-xs text-center uppercase tracking-widest border border-foreground py-2 hover:bg-foreground hover:text-background transition-colors text-foreground">{profile.email}</a>
              <a href={profile.linkedin} target="_blank" className="block font-sans font-bold text-xs text-center uppercase tracking-widest border border-foreground py-2 hover:bg-foreground hover:text-background transition-colors text-foreground">LinkedIn: in/samriddhibansalysihek</a>
              <a href={profile.github} target="_blank" className="block font-sans font-bold text-xs text-center uppercase tracking-widest border border-foreground py-2 bg-foreground text-background">GitHub · samriddhibansal</a>
            </div>
          </div>

          {/* All Certifications — LinkedIn-Style Cards */}
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-black uppercase border-b-2 border-foreground pb-2 mb-6 text-foreground">Certified Merits ({certificates.length})</h3>
            <div className="space-y-6">
              {certificates.map((cert, idx) => (
                <div key={idx} className="border-2 border-foreground/30 bg-background hover:border-foreground/60 transition-all duration-300 overflow-hidden group shadow-[3px_3px_0_rgba(0,0,0,0.08)] hover:shadow-[5px_5px_0_rgba(0,0,0,0.12)]">
                  
                  {/* Ornate Certificate Header Plate */}
                  <div className="relative w-full p-4 bg-foreground/5 border-b border-foreground/20 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-sans text-[9px] font-black uppercase tracking-widest bg-foreground text-background px-2 py-0.5">
                        {cert.level}
                      </span>
                      <span className="font-mono text-xs font-bold text-accent">
                        {cert.year}
                      </span>
                    </div>
                    <div className="border border-foreground/20 p-3 bg-background/50 relative">
                      <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/50">Official Certificate Record</p>
                      <h4 className="font-['Playfair_Display'] font-black text-lg text-foreground mt-1">{cert.title}</h4>
                      <p className="font-['Lora'] italic text-xs text-foreground/70 mt-1">{cert.org}</p>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-4 space-y-3">
                    {/* Meta Grid */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-sans">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest font-bold text-foreground/40">Issued</p>
                        <p className="font-semibold text-foreground/80">{cert.issueDate}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest font-bold text-foreground/40">Credential ID</p>
                        <p className="font-mono font-semibold text-foreground/80 text-[11px]">{cert.credentialId}</p>
                      </div>
                      {cert.duration && (
                        <div className="col-span-2">
                          <p className="text-[9px] uppercase tracking-widest font-bold text-foreground/40">Curriculum Scope</p>
                          <p className="font-semibold text-foreground/80">{cert.duration}</p>
                        </div>
                      )}
                      {cert.signedBy && (
                        <div className="col-span-2">
                          <p className="text-[9px] uppercase tracking-widest font-bold text-foreground/40">Issued / Validated By</p>
                          <p className="font-semibold text-foreground/80">{cert.signedBy}</p>
                        </div>
                      )}
                    </div>

                    {/* Collaborators */}
                    {cert.collaborators && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.collaborators.map((c, i) => (
                          <span key={i} className="font-sans text-[9px] font-bold border border-foreground/30 px-2 py-0.5 text-foreground/60 bg-foreground/5">{c}</span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2 border-t border-foreground/10">
                      <a
                        href={cert.verifyUrl || profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 font-sans text-[11px] font-bold uppercase tracking-widest border-2 border-foreground px-3 py-2 bg-foreground text-background hover:opacity-90 transition-opacity"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Inspect Credential
                      </a>
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-widest border-2 border-foreground/40 px-3 py-2 text-foreground/70 hover:bg-foreground/10 transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                          Verify Online
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Market Index */}
          <div className="border-t-4 border-foreground pt-4">
            <h3 className="font-['Playfair_Display'] text-xl font-black uppercase mb-3 text-foreground">Today&#39;s Analytical Index</h3>
            <div className="border-y-2 border-foreground divide-y divide-foreground/20 bg-foreground/5 transition-all duration-300">
              {[
                { name: "Microsoft Power BI", change: "+9.4%", dir: "▲", note: "Core Specialty" },
                { name: "MS Excel Analytics & DAX", change: "+6.2%", dir: "▲", note: "Advanced Certified" },
                { name: "Problem Solving (C/C++)", change: "+5.1%", dir: "▲", note: "HackerRank Verified" },
                { name: "Python & Data Analysis", change: "+8.5%", dir: "▲", note: "Surging Demand" },
                { name: "Web & UI/UX (HTML/CSS)", change: "+3.2%", dir: "▲", note: "High Fidelity" },
                { name: "Canva & Digital Design", change: "STEADY", dir: "▬", note: "Enginow Dispatches" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 gap-2 px-2">
                  <span className="font-['Lora'] font-bold text-sm text-foreground">{item.name}</span>
                  <span className="font-sans text-[9px] hidden md:block text-foreground/40 italic">{item.note}</span>
                  <span className="font-mono font-black text-sm shrink-0 text-[#27ae60]">{item.dir} {item.change}</span>
                </div>
              ))}
            </div>
            <p className="text-[9px] uppercase font-sans mt-1 text-foreground/40">Source: PSITCHE Academic & Technical Competency Audit.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
