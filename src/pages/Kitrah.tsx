import { useEffect } from "react";
import { Link } from "react-router";
import focusDockImage from "@/imports/Dockfinal.png";
import heroImage from "@/assets/kitrah/kitrah-hero.svg";
import problemImage from "@/assets/kitrah/kitrah-problem.svg";
import researchImage from "@/assets/kitrah/kitrah-research.svg";
import coreFlowImage from "@/assets/kitrah/kitrah-core-flow.svg";
import wireframesImage from "@/assets/kitrah/kitrah-wireframes.svg";
import prepareImage from "@/assets/kitrah/kitrah-prepare.svg";
import weighImage from "@/assets/kitrah/kitrah-weigh.svg";
import reviewImage from "@/assets/kitrah/kitrah-review.svg";
import labelImage from "@/assets/kitrah/kitrah-label.svg";
import storeImage from "@/assets/kitrah/kitrah-store.svg";
import findImage from "@/assets/kitrah/kitrah-find.svg";
import useImage from "@/assets/kitrah/kitrah-use.svg";
import bridgeImage from "@/assets/kitrah/kitrah-bridge.svg";
import testingImage from "@/assets/kitrah/kitrah-testing.svg";
import "./kitrah.css";

const lifecycle = ["PREPARE", "WEIGH", "REVIEW", "REVIEW", "STORE", "FIND"];

const journey = [
  ["01", "Prepare", "Choose a recipe or batch", "DIGITAL"],
  ["02", "Weigh", "Record the prepared amount", "PHYSICAL + DIGITAL"],
  ["03", "Review", "Confirm portions and reminder", "DIGITAL"],
  ["04", "Label", "Generate a linked label", "PHYSICAL"],
  ["05", "Store", "Choose fridge, freezer or pantry", "PHYSICAL + DIGITAL"],
  ["06", "Find", "Use inventory, QR or Batch ID", "DIGITAL"],
  ["07", "Use", "Update remaining containers", "PHYSICAL + DIGITAL"],
];

function SectionHeading({
  eyebrow,
  title,
  copy,
  centre = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centre?: boolean;
}) {
  return (
    <div className={centre ? "k-reading k-center" : "k-reading"}>
      <p className="k-kicker">{eyebrow}</p>
      <h2 className="k-h2">{title}</h2>
      {copy && <p className="k-body" style={{ marginTop: 26 }}>{copy}</p>}
    </div>
  );
}

function VisualImage({ src, alt, name, contain = false }: { src: string; alt: string; name: string; contain?: boolean }) {
  return (
    <figure className={`k-visual-image${contain ? " contain" : ""}`} data-asset={name}>
      <img src={src} alt={alt} />
    </figure>
  );
}

function Footer() {
  const links = [
    ["LinkedIn", "https://www.linkedin.com/in/tunu?utm_source=share_via&utm_content=profile&utm_medium=member_android"],
    ["Behance", "https://www.behance.net/feranmiireyemi"],
    ["GitHub", "https://github.com/itunuogunfuye-cmd"],
  ];
  return (
    <footer className="k-footer">
      <div className="k-footer-inner">
        <Link to="/" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".14em" }}>ITUNU OGUNFUYE</Link>
        <span className="k-small">© 2026 Itunu Ogunfuye. All rights reserved.</span>
        <div style={{ display: "flex", gap: 24 }}>
          {links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}
        </div>
      </div>
    </footer>
  );
}

export default function Kitrah() {
  useEffect(() => {
    document.title = "Kitrah — UX/UI & Connected Product | Itunu Ogunfuye";
    const description = "Kitrah is a connected kitchen concept that links homemade food, physical labels and digital batch records from preparation to storage.";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="kitrah">
      <section className="k-hero">
        <div className="k-wrap">
          <div className="k-hero-copy">
            <p className="k-kicker">01 · KITRAH</p>
            <h1 className="k-title">Keep track of the food you make.</h1>
            <p className="k-hero-description">
              A connected kitchen experience that links homemade food, physical labels and digital batch records from preparation to storage.
            </p>
          </div>
          <dl className="k-meta">
            <div><dt>Project</dt><dd>UX/UI Design · Product Design<br />Connected Product Concept</dd></div>
            <div><dt>Role</dt><dd>Product &amp; UX/UI Designer</dd></div>
            <div><dt>Project type</dt><dd>Individual project</dd></div>
          </dl>

          <VisualImage src={heroImage} name="kitrah-hero" alt="Kitrah ecosystem with mobile app, kitchen scale, thermal printer, printed label and labelled food container" />
        </div>
      </section>

      <section className="k-section k-muted-section">
        <div className="k-wrap">
          <SectionHeading eyebrow="02 · THE PROBLEM" title="When food goes into storage, its context can disappear with it." copy="Homemade food can become harder to keep track of once it moves from preparation into a fridge or freezer. Information that was obvious while cooking, such as what the food is, when it was made and how much remains, can become separated from the physical container." />
          <p className="k-body k-reading" style={{ marginTop: 20 }}>Kitrah explores whether the handoff between preparation and storage can become easier to maintain.</p>
          <VisualImage src={problemImage} name="kitrah-problem" alt="Illustrated fridge shelves with homemade food containers whose labels carry incomplete information" />
        </div>
      </section>

      <section className="k-section">
        <div className="k-wrap">
          <SectionHeading eyebrow="03 · RESEARCH → OPPORTUNITY" title="Understanding the problem space" copy="Desk research helped frame the practical and ethical boundaries of the concept without treating assumptions as user evidence." />
          <div className="k-findings" data-asset="kitrah-research">
            {[
              ["Stored food creates an information handoff.", "Keep the physical food connected to its digital record."],
              ["Storage reminders must not be presented as scientific food-safety determinations.", "Make the source of every reminder transparent."],
              ["Connected hardware introduces failure points.", "Treat the scale and printer as accelerators rather than prerequisites."],
              ["Existing products address individual parts of the workflow.", "Test whether connecting preparation → physical label → storage → use creates a more useful household experience."],
            ].map(([finding, opportunity], i) => (
              <div className="k-finding" key={finding}>
                <span className="k-finding-num">0{i + 1}</span>
                <strong>{finding}</strong>
                <p className="k-small"><span className="k-overline" style={{ display: "block" }}>Opportunity</span>{opportunity}</p>
              </div>
            ))}
          </div>
          <VisualImage src={researchImage} name="kitrah-research" alt="Desk research findings mapped to four product opportunities" contain />
        </div>
      </section>

      <section aria-label="Mapping the experience">
        <div className="k-section-lg k-dark-section">
          <div className="k-wrap">
            <SectionHeading eyebrow="04 · MAPPING THE EXPERIENCE" title="From inventory to continuity" copy="The batch, rather than the printed label itself, became the central object. The physical label identifies the batch while the digital record can keep changing as containers are stored, moved or used." />
            <div className="k-lifecycle">
              {lifecycle.map((item, i) => <div className="k-life-step" key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}
              <div className="k-life-step"><span>07</span><strong>USE</strong></div>
            </div>
            <p className="k-principle">Enter information once. Reuse it throughout the batch lifecycle.</p>
          </div>
        </div>

        <div className="k-section">
          <div className="k-wrap">
            <div className="k-mapping-subsection">
              <p className="k-kicker">USER JOURNEY</p>
              <h3 className="k-h3">What the user does</h3>
              <p className="k-body k-reading" style={{ marginTop: 18 }}>The journey follows one batch from preparation to use, moving between the interface and the physical kitchen.</p>
              <div className="k-journey">
                {journey.map(([num, title, desc, touch]) => (
                  <div className="k-journey-step" key={num}><span className="k-overline">{num}</span><strong>{title}</strong><p className="k-small">{desc}</p><span className={`k-touch ${touch.includes("PHYSICAL") ? "physical" : ""}`}>{touch}</span></div>
                ))}
              </div>
            </div>
            <div className="k-ia k-mapping-subsection">
              <p className="k-kicker">INFORMATION ARCHITECTURE</p>
              <h3 className="k-h3">How the product is organised</h3>
              <p className="k-body k-reading" style={{ marginTop: 18 }}>Kitchen Mode is entered through Start a Batch rather than occupying permanent navigation. It guides active preparation while the main structure remains focused.</p>
              <div className="k-ia-map">
                {[
                  ["Home", "What needs attention."],
                  ["Inventory", "What is stored and what needs attention."],
                  ["Recipes", "Reusable preparation information."],
                  ["Labels", "Printed identifiers linked to batches."],
                ].map(([name, desc]) => <div className="k-ia-item" key={name}><strong>{name}</strong><p className="k-small" style={{ marginTop: 10 }}>{desc}</p></div>)}
              </div>
            </div>
          </div>
        </div>

        <div className="k-section k-muted-section">
          <div className="k-wrap">
            <div className="k-mapping-subsection">
              <p className="k-kicker">CORE USER FLOW</p>
              <h3 className="k-h3">How the main task works</h3>
              <p className="k-body k-reading" style={{ marginTop: 18 }}>The main flow moves from choosing a recipe to updating the number of containers left, with each screen advancing one clear task.</p>
              <p className="k-flow-sequence">HOME → RECIPE DETAIL → START PRODUCTION → WEIGH → REVIEW BATCH → LABEL PREVIEW → LABELS READY → INVENTORY → INVENTORY DETAIL → USE ONE CONTAINER</p>
              <VisualImage src={coreFlowImage} name="kitrah-core-flow" alt="Ten Kitrah mobile screens showing the complete flow from Home to Use one container" contain />
              <p className="k-small k-reading" style={{ marginTop: 20 }}>Manual routes keep the main task moving when connected hardware is unavailable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="k-section">
        <div className="k-wrap">
          <SectionHeading eyebrow="05 · WIREFRAMES" title="Structuring the experience" copy="The interface was structured around one focused end-to-end flow rather than a collection of disconnected features. Kitchen Mode became a guided sequence so each step could focus on one task at a time." />
          <VisualImage src={wireframesImage} name="kitrah-wireframes" alt="Eight early Kitrah wireframes for Home, Recipe, Production, Weigh, Review, Label, Inventory and Batch Detail" contain />
        </div>
      </section>

      <section className="k-section k-muted-section">
        <div className="k-wrap">
          <SectionHeading eyebrow="06 · VISUAL DESIGN" title="A kitchen utility, not a dashboard." copy="The UX structure became a warm, practical interface using soft surfaces, readable measurements and restrained data styling." />
          <div className="k-grid-2 k-style-strip">
            <div>
              <p className="k-overline">Colour</p>
              <div className="k-colours">
                {["#c97855", "#f7f4ef", "#2f2a27", "#eaf2e9", "#f8ece7"].map(c => <div className="k-swatch" key={c} style={{ background: c }} aria-label={`Colour swatch ${c}`} />)}
              </div>
              <p className="k-overline">Personality</p>
              <p className="k-body">Calm · Warm · Practical · Precise · Contemporary · Tactile</p>
            </div>
            <div>
              <p className="k-overline">Interface language</p>
              <div className="k-components">
                <span className="k-ui-button">Confirm weight</span><span className="k-ui-button secondary">Enter manually</span><span className="k-chip">Use soon</span><span className="k-input">SP-004 · 242 g</span>
              </div>
              <p className="k-small" style={{ marginTop: 34 }}>Serif typography carries the editorial story. Inter supports the interface, with IBM Plex Mono reserved for weights, dates and Batch IDs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="k-section-lg">
        <div className="k-wrap">
          <div className="k-experience-intro"><SectionHeading eyebrow="07 · THE CORE EXPERIENCE" title="From preparation to use" copy="One continuous story, following a homemade batch from preparation to the moment a container is used." /></div>

          <article className="k-story">
            <div className="k-story-copy"><span className="k-story-num">01</span><h3 className="k-h3">Prepare</h3><p className="k-body">The recipe carries reusable batch information, including ingredients, expected yield and the selected storage reminder. Hardware status is visible but does not block production.</p></div>
            <VisualImage src={prepareImage} name="kitrah-prepare" alt="Kitrah Recipe Detail and Start Production mobile interface" contain />
          </article>

          <article className="k-story reverse">
            <div className="k-story-copy"><span className="k-story-num">02</span><h3 className="k-h3">Weigh</h3><p className="k-body">A live weight and 300 g target keep attention on the current container. Manual entry provides the same outcome without the scale.</p></div>
            <VisualImage src={weighImage} name="kitrah-scale" alt="Kitrah weighing interface displaying 298 grams against a 300 gram target" contain />
          </article>

          <article className="k-story">
            <div className="k-story-copy"><span className="k-story-num">03</span><h3 className="k-h3">Review</h3><p className="k-body">Batch SP-004 brings the total weight, six containers and frozen-storage reminder into one check. Showing the reminder source keeps it distinct from a food-safety prediction.</p></div>
            <VisualImage src={reviewImage} name="kitrah-review" alt="Kitrah review screen for batch SP-004 with weights, container count and storage reminder" contain />
          </article>

          <article className="k-story reverse">
            <div className="k-story-copy"><span className="k-story-num">04</span><h3 className="k-h3">Label</h3><p className="k-body">The label remains readable without the app while the QR connects the physical container back to its living batch record.</p></div>
            <VisualImage src={labelImage} name="kitrah-label" alt="Printed Kitrah thermal label for Mango Strawberry Preserve, batch SP-004" contain />
          </article>

          <article className="k-story">
            <div className="k-story-copy"><span className="k-story-num">05</span><h3 className="k-h3">Store</h3><p className="k-body">Printing the label does not automatically mean the food has been stored. Storage is confirmed separately so the digital inventory matches the physical kitchen more accurately.</p></div>
            <VisualImage src={storeImage} name="kitrah-store" alt="Kitrah Labels Ready screen with Freezer selected and Add to inventory action" contain />
          </article>

          <article className="k-story reverse">
            <div className="k-story-copy"><span className="k-story-num">06</span><h3 className="k-h3">Find</h3><p className="k-body">Use first today, Use soon and Past reminder bring priority batches forward. Inventory is organised around what deserves attention, not only what exists.</p></div>
            <VisualImage src={findImage} name="kitrah-find" alt="Kitrah Inventory screen prioritising Use first today, Use soon and Past reminder batches" contain />
          </article>

          <article className="k-story">
            <div className="k-story-copy"><span className="k-story-num">07</span><h3 className="k-h3">Use</h3><p className="k-body">Using one container changes the record from six to five remaining. Updating the physical food updates the living batch record and closes the loop.</p></div>
            <VisualImage src={useImage} name="kitrah-use" alt="Kitrah batch screen updating from six to five containers left" contain />
          </article>
        </div>
      </section>

      <section className="k-section k-muted-section">
        <div className="k-wrap">
          <SectionHeading eyebrow="08 · PHYSICAL + DIGITAL" title="The label is the bridge." copy="Kitrah uses a physical label as the persistent link between food in the kitchen and information in the interface. The label works without scanning, while the QR or Batch ID provides a quick route back to the batch whenever its state needs to change." />
          <VisualImage src={bridgeImage} name="kitrah-printer kitrah-container" alt="Kitrah physical and digital ecosystem connecting the app, scale, printer, label, container and digital batch record" contain />
        </div>
      </section>

      <section className="k-section">
        <div className="k-wrap">
          <SectionHeading eyebrow="09 · DESIGNING FOR FAILURE" title="Connected does not mean dependent." copy="Connected devices enhance the experience rather than define it. Each critical hardware interaction has a fallback." />
          <div className="k-grid-3" style={{ marginTop: 58 }}>
            {[["SCALE UNAVAILABLE", "Enter weight manually."], ["PRINTER UNAVAILABLE", "Save a printable label instead."], ["QR / CAMERA UNAVAILABLE", "Enter the Batch ID manually."]].map(([title, copy]) => <div className="k-fallback" key={title}><p className="k-overline">{title}</p><p className="k-body">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="k-section k-muted-section">
        <div className="k-wrap">
          <SectionHeading eyebrow="10 · TESTING & ITERATION" title="Testing the complete loop" copy="I created an interactive Figma prototype to test whether the complete journey could be understood from preparation through to updating a stored batch." />
          <div className="k-grid-2" style={{ marginTop: 58 }}>
            <div>
              <p className="k-overline">What I tested</p>
              <ul className="k-body" style={{ paddingLeft: 20 }}>
                <li>Understanding the storage reminder</li><li>Finding manual weight entry</li><li>Understanding the printed label</li><li>Recovering from printer failure</li><li>Adding a batch to storage</li><li>Retrieving a batch through QR / Batch ID</li><li>Understanding “Use one container”</li>
              </ul>
            </div>
            <VisualImage src={testingImage} name="kitrah-testing" alt="Editable prototype testing board with participant observation, finding, design response and before-after areas" contain />
          </div>
          <div className="k-testing-iterations">
            <h3 className="k-h3">Iterations</h3>
            <p className="k-body k-reading" style={{ marginTop: 18 }}>These placeholders are ready to document meaningful changes once testing observations are available.</p>
          </div>
          <div className="k-grid-3" style={{ marginTop: 42 }}>
            {[1,2,3].map(n => <dl className="k-iteration" key={n}><p className="k-kicker">ITERATION 0{n}</p><dt>OBSERVED</dt><dd>[Testing observation]</dd><dt>WHY IT MATTERED</dt><dd>[Impact]</dd><dt>CHANGE</dt><dd>[Design response]</dd><dt>BEFORE → AFTER</dt><dd>[Editable comparison placeholder]</dd></dl>)}
          </div>
        </div>
      </section>

      <section className="k-section k-muted-section">
        <div className="k-wrap">
          <SectionHeading eyebrow="11 · PRODUCTION CONSIDERATIONS" title="Designing beyond the prototype" />
          <div className="k-findings">
            {[
              ["Hardware compatibility", "Bluetooth does not mean universal compatibility. A production version would need a defined and tested list of supported scales and printers."],
              ["Graceful fallbacks", "Manual weight entry, printable labels and Batch ID retrieval keep the workflow usable when connected hardware is unavailable."],
              ["Food information", "Storage reminders organise information. Kitrah does not claim to scientifically determine whether homemade food is safe to eat."],
              ["Production infrastructure", "A production product would require persistent accounts, device synchronisation, notification permissions, reliable batch storage and tested hardware integrations."],
            ].map(([title, copy], i) => <div className="k-production-row" key={title}><span>0{i+1}</span><strong>{title}</strong><p className="k-small">{copy}</p></div>)}
          </div>
          <p className="k-principle" style={{ maxWidth: 850 }}>The prototype focuses on validating the experience and interaction model rather than production hardware integration.</p>
        </div>
      </section>

      <section className="k-section">
        <div className="k-wrap k-grid-2">
          <SectionHeading eyebrow="12 · REFLECTION" title="Looking back" copy="The final reflection will document how testing changed the experience, which assumptions held up and what I would develop further." />
          <div>
            <p className="k-overline">Future improvements</p>
            <ul className="k-body" style={{ paddingLeft: 20 }}><li>Deeper hardware feasibility</li><li>Tested freezer-safe label materials</li><li>Persistent multi-device sync</li><li>Broader batch-management actions</li><li>Accessibility testing</li></ul>
          </div>
        </div>
      </section>

      <section className="k-section-sm k-next-section">
        <div className="k-wrap">
          <p className="k-kicker k-center">UP NEXT</p>
          <Link className="k-next" to="/projects/focus-dock">
            <div className="k-next-copy">
              <span className="k-overline">PRODUCT DESIGN · IOT</span>
              <h2 className="k-h2">Focus Dock</h2>
              <p className="k-body" style={{ marginTop: 20 }}>A handcrafted productivity dock that reduces phone distraction through physical interaction design.</p>
              <span className="k-next-cta">View Next Project →</span>
            </div>
            <div className="k-next-visual">
              <img src={focusDockImage} alt="Focus Dock wooden productivity device" />
            </div>
          </Link>
          <div style={{ textAlign: "center", marginTop: 36 }}><Link to="/projects/nouri" className="k-small" style={{ color: "var(--k-ink)", textDecoration: "none" }}>← Previous: Nouri</Link></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
