import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AE Solutions | Enterprise Technology Advisory" },
      { name: "description", content: "AE Solutions connects technology strategy, cloud, data, managed IT, and security into resilient enterprise systems." },
      { property: "og:title", content: "AE Solutions | Enterprise Technology Advisory" },
      { property: "og:description", content: "Technology advisory and digital transformation designed around how your business operates." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { no: "01", code: "IT ADVISORY", title: "IT Advisory Services", text: "Align technology decisions with business priorities, governance, and long-term growth.", tags: ["Enterprise Architecture", "IT Governance", "Cost Optimization", "Technology Roadmaps"], type: "roadmap" },
  { no: "02", code: "DATA", title: "Data Analytics & Integration", text: "Connect fragmented data and turn operational information into clearer decisions.", tags: ["Data Pipelines", "Data Integration", "Dashboards", "Decision Intelligence"], type: "data" },
  { no: "03", code: "CLOUD + ERP", title: "Cloud & ERP Solutions", text: "Modernize infrastructure and business platforms with scalable cloud and ERP environments.", tags: ["Cloud Migration", "ERP Implementation", "Cloud Rollout", "AWS / Azure / GCP"], type: "cloud" },
  { no: "04", code: "MANAGED IT", title: "Managed IT Services", text: "Keep infrastructure reliable, monitored, maintained, and ready for business.", tags: ["Infrastructure Monitoring", "Patching", "Helpdesk", "IT Maintenance"], type: "monitor" },
  { no: "05", code: "SECURITY", title: "Compliance & Security", text: "Strengthen technology environments through risk management, security controls, and audit readiness.", tags: ["Risk Assessments", "Security Hardening", "Regulatory Compliance", "Audit Readiness"], type: "security" },
];

const industries = [
  ["Financial Services", "Secure, resilient technology environments for financial operations."],
  ["Healthcare", "Technology foundations designed around reliability, security, and data."],
  ["Retail & E-commerce", "Connected platforms supporting digital commerce and operations."],
  ["Manufacturing", "Technology systems supporting production, infrastructure, and visibility."],
  ["Logistics", "Connected data and systems for operational coordination."],
  ["Public Sector", "Structured technology environments supporting dependable services."],
];

const steps = [
  ["01", "Understand", "Understand business objectives, existing systems, constraints, and priorities."],
  ["02", "Design", "Develop the technology architecture and roadmap."],
  ["03", "Implement", "Deploy platforms, integrations, infrastructure, and controls."],
  ["04", "Operate", "Monitor, optimize, secure, and continuously improve."],
];

function Brand() {
  return <a href="#top" className="brand" aria-label="AE Solutions home"><span>AE</span> SOLUTIONS</a>;
}

function Diagram({ type }: { type: string }) {
  if (type === "roadmap") return <div className="mini roadmap"><i /><i /><i /><i /><span>ASSESS</span><span>DESIGN</span><span>EVOLVE</span></div>;
  if (type === "data") return <div className="mini data-flow"><div><i /><i /><i /></div><b /><div className="data-core">ANALYTICS</div></div>;
  if (type === "cloud") return <div className="mini cloud-map"><div><i>A</i><i>Az</i><i>G</i></div><b /><span>ENTERPRISE CORE</span></div>;
  if (type === "monitor") return <div className="mini monitor"><header><span>SYSTEM STATUS</span><b>OPERATIONAL</b></header>{["NETWORK", "SERVERS", "ENDPOINTS", "ALERTS"].map((x, i) => <div key={x}><span>{x}</span><i style={{ width: `${88 - i * 9}%` }} /></div>)}</div>;
  return <div className="mini security-stack">{["IDENTITY", "INFRASTRUCTURE", "DATA", "COMPLIANCE"].map(x => <span key={x}>{x}</span>)}</div>;
}

function ArchitectureVisual() {
  const [active, setActive] = useState("Data layer");
  return (
    <div className="hero-visual" aria-label="Live enterprise architecture visualization">
      <div className="visual-bar"><span>ENTERPRISE ARCHITECTURE</span><span className="live"><i /> LIVE</span></div>
      <div className="visual-grid">
        <button onMouseEnter={() => setActive("Cloud platform")} onFocus={() => setActive("Cloud platform")} className="node n1"><small>PLATFORM</small>CLOUD CORE</button>
        <button onMouseEnter={() => setActive("Business applications")} onFocus={() => setActive("Business applications")} className="node n2"><small>APPLICATION</small>ERP / CRM</button>
        <button onMouseEnter={() => setActive("Data layer")} onFocus={() => setActive("Data layer")} className="node n3"><small>INTELLIGENCE</small>DATA LAYER</button>
        <button onMouseEnter={() => setActive("Secure operations")} onFocus={() => setActive("Secure operations")} className="node n4"><small>OPERATIONS</small>SECURE OPS</button>
        <svg viewBox="0 0 600 420" aria-hidden="true"><path d="M142 105 L300 210 L460 105 M300 210 L150 325 M300 210 L460 325" /><circle cx="300" cy="210" r="4" /></svg>
        <div className="visual-orbit"><i /><i /><i /></div>
      </div>
      <div className="visual-status"><span>ACTIVE LAYER</span><b>{active}</b><span>04 systems connected</span></div>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLayer, setActiveLayer] = useState(2);
  return (
    <main id="top">
      <header className="site-header">
        <div className="shell nav-inner">
          <Brand />
          <nav className={cn("nav-links", menuOpen && "open")} aria-label="Main navigation">
            {["Services", "Industries", "Approach", "About"].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
            <Button asChild className="nav-cta"><a href="#contact">Let&apos;s Talk <ArrowRight /></a></Button>
          </nav>
          <Button variant="ghost" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><i /> IT ADVISORY <span>•</span> CLOUD <span>•</span> DATA <span>•</span> MANAGED SERVICES</p>
          <h1>Technology that moves your business <em>forward.</em></h1>
          <p className="lede">AE Solutions helps organizations modernize technology, connect data, strengthen operations, and build resilient digital foundations.</p>
          <div className="hero-actions">
            <Button asChild size="lg"><a href="#services">Explore Services <ArrowRight /></a></Button>
            <Button asChild variant="outline" size="lg"><a href="#contact">Talk to AE Solutions</a></Button>
          </div>
        </div>
        <ArchitectureVisual />
      </section>

      <div className="position-strip"><div className="shell">{["Enterprise technology", "Cloud platforms", "Data ecosystems", "Managed IT", "Security"].map(x => <span key={x}>{x}</span>)}</div></div>

      <section className="section shell intro" id="about">
        <div><p className="section-label">WHAT WE DO</p><h2>From technology strategy to dependable operations.</h2><p>We connect direction, platforms, information, and day-to-day operations into a clear technology model—built for the realities of your organization.</p></div>
        <div className="layer-path">{["Strategy", "Platforms", "Data", "Operations"].map((x, i) => <div key={x}><small>0{i + 1}</small><b>{x}</b>{i < 3 && <ChevronRight />}</div>)}</div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell"><div className="section-heading"><p className="section-label">CAPABILITIES</p><h2>Five capabilities. One connected technology strategy.</h2></div>
          <div className="services-grid">{services.map((service, i) => <article className={cn("service-card", `service-${i + 1}`)} key={service.no} tabIndex={0}>
            <p className="card-label">{service.no} / {service.code}</p><Diagram type={service.type} /><h3>{service.title}</h3><p>{service.text}</p><div className="tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>)}</div>
        </div>
      </section>

      <section className="dark-section ecosystem">
        <div className="shell"><p className="section-label">TECHNOLOGY ECOSYSTEM</p><h2>Built across the modern technology stack.</h2>
          <div className="ecosystem-map"><div className="eco-center">AE<small>CONNECTED CORE</small></div>{["Cloud", "Data", "ERP", "Infrastructure", "Security", "Applications", "Operations"].map((x, i) => <span className={`eco e${i + 1}`} key={x}>{x}</span>)}</div>
          <p className="providers">AWS <i /> Microsoft Azure <i /> Google Cloud</p>
        </div>
      </section>

      <section className="section shell" id="industries">
        <div className="section-heading"><p className="section-label">INDUSTRIES</p><h2>Technology shaped around the realities of your industry.</h2></div>
        <div className="industries-grid">{industries.map(([name, text], i) => <article key={name} className={`industry industry-${i + 1}`}><div className="industry-mark"><span>0{i + 1}</span><i /></div><div><h3>{name}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="section approach" id="approach"><div className="shell"><div className="section-heading"><p className="section-label">APPROACH</p><h2>From complexity to clarity.</h2></div><div className="timeline">{steps.map(([no, title, text]) => <article key={no}><span>{no}</span><i /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="architecture dark-section">
        <div className="shell"><div className="architecture-heading"><div><p className="section-label">CONNECTED ARCHITECTURE</p><h2>Technology should work as one system.</h2></div><p>Select a layer to see how enterprise systems connect.</p></div>
          <div className="architecture-system">{["BUSINESS", "APPLICATIONS", "ERP / CLOUD", "DATA", "INFRASTRUCTURE", "SECURITY / GOVERNANCE"].map((layer, i) => <button key={layer} onClick={() => setActiveLayer(i)} onMouseEnter={() => setActiveLayer(i)} className={cn(activeLayer === i && "active")}><small>0{i + 1}</small><span>{layer}</span><b>{activeLayer === i ? "ACTIVE" : "CONNECTED"}</b></button>)}</div>
        </div>
      </section>

      <section className="section shell transformation">
        <div><p className="section-label">BEYOND INFRASTRUCTURE</p><h2>Modernization is more than moving systems to the cloud.</h2><p>It means modern platforms, connected data, streamlined workflows, custom digital solutions, cloud adoption, and clearer operational visibility.</p></div>
        <div className="transform-visual"><div className="fragmented"><span>LEGACY</span><i /><i /><i /></div><ArrowRight /><div className="connected"><span>CONNECTED</span><i>PLATFORM</i><i>DATA</i><i>WORKFLOW</i></div></div>
      </section>

      <section className="section credibility"><div className="shell"><div className="section-heading"><p className="section-label">WHY AE SOLUTIONS</p><h2>A technology partner for complex environments.</h2></div><div className="principles">{[
        ["Business-first thinking", "Technology decisions begin with operational objectives."], ["Architecture-led delivery", "Solutions are designed around the wider technology ecosystem."], ["Security-conscious execution", "Security and governance remain part of the architecture."], ["Long-term operations", "Technology requires ongoing optimization, not just deployment."]
      ].map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="cta dark-section" id="contact"><div className="shell"><p className="section-label">START A CONVERSATION</p><h2>Have a technology challenge worth solving?</h2><p>Let&apos;s map the systems, priorities, and next steps together.</p><div><Button asChild size="lg"><a href="mailto:hello@aesolutions.com">Start a Conversation <ArrowRight /></a></Button><Button asChild variant="outline" size="lg"><a href="#services">Explore Our Capabilities</a></Button></div></div></section>

      <footer><div className="shell footer-grid"><div><Brand /><p>Technology advisory, cloud, data, managed IT, and security services.</p></div><div><b>Capabilities</b><a href="#services">IT Advisory</a><a href="#services">Data &amp; Integration</a><a href="#services">Cloud &amp; ERP</a><a href="#services">Managed IT</a><a href="#services">Security</a></div><div><b>Industries</b><a href="#industries">Financial Services</a><a href="#industries">Healthcare</a><a href="#industries">Retail &amp; E-commerce</a><a href="#industries">Manufacturing</a><a href="#industries">Logistics</a><a href="#industries">Public Sector</a></div><div><b>Company</b><a href="#about">About</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div></div><div className="shell footer-bottom"><span>© 2026 AE Solutions</span><div><a href="#top">Privacy</a><a href="#top">Terms</a></div></div></footer>
    </main>
  );
}