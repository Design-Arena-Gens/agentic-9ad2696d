import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CalendarClock,
  ChevronRight,
  Flame,
  LineChart,
  Rocket,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight: string;
};

type Offer = {
  name: string;
  price: string;
  description: string;
  perks: string[];
  badge?: string;
};

const features: Feature[] = [
  {
    title: "Demand-Checked Ideas",
    description:
      "Validate your digital product angles with search data, competitor gaps, and social buzz before you build.",
    icon: Brain,
    highlight: "3 validated concepts per week",
  },
  {
    title: "Conversion-Ready Landing",
    description:
      "Wireframes, copy, hero mockups, and offer sequencing packaged into a single deployable Next.js site.",
    icon: Rocket,
    highlight: "Under 48-hour turnaround",
  },
  {
    title: "Automated Launch Ops",
    description:
      "From waitlist automations to follow-up scripts, every touchpoint is mapped and templatized for rapid launches.",
    icon: CalendarClock,
    highlight: "Prebuilt drip journeys",
  },
  {
    title: "Audience Flywheel",
    description:
      "Clip-ready content hooks, lead magnets, and distribution loops engineered to grow an engaged buyer list.",
    icon: UsersRound,
    highlight: "Organic + paid playbooks",
  },
];

const offers: Offer[] = [
  {
    name: "Idea Ignition Kit",
    price: "Free",
    description:
      "Weekly drop with a validated niche, positioning, and quick-win offer stack.",
    perks: [
      "Validation checklist template",
      "Keyword & community scan",
      "Two launch hook formulas",
    ],
  },
  {
    name: "Launch Sprint",
    price: "$1,450",
    description:
      "Two-week engagement to plan, design, and ship your digital product launch funnel.",
    badge: "Most booked",
    perks: [
      "Landing page build + copy",
      "Email + social sequences",
      "Performance dashboard setup",
      "Lifetime asset updates",
    ],
  },
  {
    name: "Growth Operator",
    price: "$2,950/mo",
    description:
      "Retained experimentation engine running campaigns, offers, and optimizations for compounding revenue.",
    perks: [
      "Bi-weekly launch experiments",
      "Paid + organic media playbooks",
      "Partner & affiliate sourcing",
      "Monthly strategy lab",
    ],
  },
];

const timeline = [
  {
    phase: "Discovery Pulse",
    duration: "Day 1-2",
    detail:
      "Deep-dive questionnaire, trend scan, and channel analysis to spot traction-ready angles.",
  },
  {
    phase: "Offer Architecture",
    duration: "Day 3-5",
    detail:
      "Craft core product promise, tiered pricing, bonuses, and urgency logic matched to your audience.",
  },
  {
    phase: "Launch System Build",
    duration: "Day 6-10",
    detail:
      "Design landing, write copy, build automations, and prep distribution assets with feedback loops.",
  },
  {
    phase: "Conversion Sprint",
    duration: "Day 11-14",
    detail:
      "Ship, promote, measure. Iterate fast with real-time dashboards, split tests, and content ops support.",
  },
];

const metrics = [
  { label: "Launch-ready assets", value: "27", change: "+11 new" },
  { label: "Average first-week revenue", value: "$18.4K", change: "+62%" },
  { label: "Subscriber uplift", value: "3.7x", change: "over baseline" },
];

const faqs = [
  {
    question: "What’s included in a validated digital sale idea?",
    answer:
      "You receive the core product concept, positioning statement, audience profile, pricing angles, plus keyword & community demand signals so you can see why it works.",
  },
  {
    question: "Do you build the full website?",
    answer:
      "Yes—copy, responsive components, CMS-ready sections, and deployment to Vercel. You get the Git repo, design files, and Loom walkthroughs so you can iterate freely.",
  },
  {
    question: "How fast can I launch?",
    answer:
      "Launch Sprint clients typically ship within 14 days. If assets are approved quickly we can accelerate to 7 days for pre-sold offers or template-based products.",
  },
  {
    question: "Can you plug into my existing stack?",
    answer:
      "Absolutely. We routinely integrate ConvertKit, Zapier, HubSpot, Airtable, Gumroad, LemonSqueezy, and custom API workflows.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-overlay" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 pb-6 pt-10 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-wide text-foreground/70">
            <Sparkles className="h-4 w-4 text-primary" />
            Digital Sale Launchpad
          </span>
        </div>
        <nav className="hidden gap-7 text-sm font-medium text-foreground/70 md:flex">
          <Link href="#idea">Idea</Link>
          <Link href="#features">System</Link>
          <Link href="#timeline">Timeline</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
        </nav>
        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 sm:flex"
        >
          Book a launch audit
          <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 sm:px-10 lg:px-16">
        <section className="grid gap-16 rounded-[40px] bg-white/70 p-10 shadow-[0_35px_80px_-40px_rgba(52,69,255,0.35)] backdrop-blur-xl ring-1 ring-border dark:bg-surface/70 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Idea of the Week: Creator Funnel OS
                <ChevronRight className="h-4 w-4" />
              </div>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
                Turn your next digital product idea into a revenue-ready launch
                in under 14 days.
              </h1>
              <p className="text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
                We blend market intelligence with full-stack launch execution so
                you can ship faster, monetize sooner, and compound every
                campaign. Strategy, assets, and automation—all packaged for Vercel
                deployment.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#pricing"
                className="flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-3 text-base font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
              >
                Launch my funnel
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground/70 transition hover:border-primary/40 hover:text-primary"
              >
                View sample assets
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-border/70 bg-white/80 p-6 shadow-[0_20px_45px_-40px_rgba(16,19,32,0.8)] backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-wide text-foreground/50">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {metric.change}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass relative mx-auto flex w-full max-w-[420px] flex-col gap-4 rounded-[36px] p-7">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  Launch Dashboard
                  <Flame className="h-4 w-4 text-accent" />
                </span>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                  Live
                </span>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-white/70 to-accent/10 p-6 shadow-inner">
                <p className="text-sm font-medium text-foreground/60">
                  Revenue Forecast
                </p>
                <p className="mt-4 flex items-baseline gap-1 text-4xl font-semibold">
                  $26.8K
                  <span className="text-sm font-medium text-accent">/30 days</span>
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-foreground/60">
                  <LineChart className="h-4 w-4 text-primary" />
                  +142% vs last launch window
                </div>
              </div>
              <div className="grid gap-3 rounded-2xl bg-white/70 p-5 shadow-[0_20px_45px_-35px_rgba(52,69,255,0.65)]">
                <p className="text-xs uppercase tracking-wide text-foreground/50">
                  Offer Stack
                </p>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>• Core: Creator Funnel OS workspace (Notion + Airtable)</p>
                  <p>• Bonus: 30 Automations, 12 plug-and-play emails</p>
                  <p>• Upsell: Cohort-based accountability sprint</p>
                </div>
              </div>
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-foreground/90">
                Download launch blueprint
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section
          id="idea"
          className="space-y-12 rounded-[36px] bg-surface p-10 backdrop-blur-2xl ring-1 ring-border/80"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
                Featured digital sale concept
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
                Creator Funnel OS · Subscription-based launch studio
              </h2>
            </div>
            <div className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground/60">
              GTM Score: <span className="text-primary font-semibold">92/100</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <article className="rounded-3xl border border-border/80 bg-white/70 p-6 shadow-sm">
              <h3 className="text-xs uppercase tracking-wide text-foreground/50">
                Opportunity
              </h3>
              <p className="mt-3 text-sm font-semibold text-foreground/80">
                130k creators launching premium offers each quarter need repeatable
                funnels without hiring agencies.
              </p>
            </article>
            <article className="rounded-3xl border border-border/80 bg-white/70 p-6 shadow-sm">
              <h3 className="text-xs uppercase tracking-wide text-foreground/50">
                Audience
              </h3>
              <p className="mt-3 text-sm font-semibold text-foreground/80">
                Mid-tier creators ($3K-$10K/mo) monetizing coaching, templates,
                and cohort products with hybrid deliverables.
              </p>
            </article>
            <article className="rounded-3xl border border-border/80 bg-white/70 p-6 shadow-sm">
              <h3 className="text-xs uppercase tracking-wide text-foreground/50">
                Product Stack
              </h3>
              <p className="mt-3 text-sm font-semibold text-foreground/80">
                Notion + Airtable workspace, 30-day launch calendar, AI campaign
                scripts, Zapier automation kit, KPI dashboard.
              </p>
            </article>
            <article className="rounded-3xl border border-border/80 bg-white/70 p-6 shadow-sm">
              <h3 className="text-xs uppercase tracking-wide text-foreground/50">
                Monetization
              </h3>
              <p className="mt-3 text-sm font-semibold text-foreground/80">
                $129/mo SaaS-style subscription with $349 onboarding intensive +
                optional $999 VIP sales sprint.
              </p>
            </article>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-border/80 bg-white/80 p-8 shadow-md">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
                Distribution Blueprint
              </h3>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    Authority Engine
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Loom teardown series of 7-figure launch funnels</li>
                    <li>• X / Threads prompt packs for weekly momentum</li>
                    <li>• Creator partnerships with revenue-sharing playbooks</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    Paid Amplification
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Spark ads using UGC walkthroughs</li>
                    <li>• Retargeting stack <span className="font-semibold">+$7.80</span> ROAS avg</li>
                    <li>• Affiliate partner stack with AirTable CRM</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-[32px] border border-border/80 bg-white/80 p-8 shadow-md">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
                Launch Economics
              </h3>
              <dl className="mt-6 space-y-4 text-sm text-foreground/70">
                <div className="flex items-center justify-between">
                  <dt>Projected first launch revenue</dt>
                  <dd className="font-semibold text-foreground">$32,400</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Subscriber-to-customer conversion</dt>
                  <dd className="font-semibold text-foreground">7.4%</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Average time-to-launch</dt>
                  <dd className="font-semibold text-foreground">12 days</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Retention at 90 days</dt>
                  <dd className="font-semibold text-foreground">63%</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="space-y-10 rounded-[36px] border border-border/70 bg-white/80 p-10 shadow-[0_30px_80px_-50px_rgba(52,69,255,0.55)] backdrop-blur-xl"
        >
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
              Growth engine
            </p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Every touchpoint you need to scale a digital sale, pre-built.
            </h2>
            <p className="max-w-2xl text-base text-foreground/70">
              We don’t just ideate—we architect offers, automations, and
              evergreen assets so your digital product turns into a compounding
              revenue engine.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[32px] border border-border/80 bg-white/90 p-8 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_35px_90px_-60px_rgba(52,69,255,0.9)]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition group-hover:bg-primary/10" />
                <feature.icon className="h-9 w-9 text-primary" />
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/70">
                  {feature.description}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {feature.highlight}
                  <ArrowRight className="h-4 w-4" />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="timeline"
          className="grid gap-10 rounded-[36px] bg-gradient-to-br from-primary/10 via-white/80 to-accent/10 p-10 backdrop-blur-xl ring-1 ring-border/60 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
              Execution flow
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
              A 14-day launch operating system.
            </h2>
            <p className="mt-4 max-w-xl text-base text-foreground/70">
              Break the cycle of scattered assets and last-minute launches. We
              run sprints that blend research, production, and experimentation
              into a unified timeline.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="rounded-3xl border border-white/60 bg-white/70 px-4 py-3 text-sm font-medium text-foreground shadow">
                <BarChart3 className="mr-2 inline h-4 w-4 text-primary" />
                Real-time Notion HQ
              </div>
              <div className="rounded-3xl border border-white/60 bg-white/70 px-4 py-3 text-sm font-medium text-foreground shadow">
                <UsersRound className="mr-2 inline h-4 w-4 text-primary" />
                Async standups
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {timeline.map((step, index) => (
              <div
                key={step.phase}
                className="rounded-[28px] border border-border/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-foreground/50">
                  <span>Phase {index + 1}</span>
                  <span>{step.duration}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {step.phase}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="space-y-10 rounded-[36px] border border-border/80 bg-white/90 p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
              Packages
            </p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Choose how hands-on you want us to be.
            </h2>
            <p className="mx-auto max-w-2xl text-base text-foreground/70">
              Start with a validated idea, move into a done-with-you sprint, or
              plug our team in as ongoing growth operators. Everything is
              modular so you can scale support as revenue grows.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.name}
                className="relative flex flex-col gap-6 rounded-[32px] border border-border/80 bg-white/90 p-8 shadow-[0_25px_70px_-60px_rgba(16,19,32,0.9)] transition hover:-translate-y-1 hover:border-primary/40"
              >
                {offer.badge ? (
                  <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow">
                    {offer.badge}
                  </span>
                ) : null}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {offer.name}
                  </h3>
                  <p className="text-3xl font-semibold text-primary">
                    {offer.price}
                  </p>
                  <p className="text-sm text-foreground/70">{offer.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-foreground/70">
                  {offer.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-accent" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary">
                  Reserve spot
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-[36px] border border-border/70 bg-white/80 p-10 backdrop-blur-xl lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
              Proven signals
            </p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              40+ digital founders scale with our launch systems.
            </h2>
            <p className="text-base text-foreground/70">
              From template shops to cohort accelerators, we help teams remove
              guesswork and focus on compounding what works. Here’s what
              partners see within the first 90 days.
            </p>
            <div className="rounded-[28px] border border-border/80 bg-white/90 p-6">
              <p className="text-sm font-semibold text-foreground">
                “We recycled one of their offer stacks, pressed publish in 10
                days, and hit $48k on a digital play that was sitting in our
                notes app. The automation buildout alone saved us weeks.”
              </p>
              <p className="mt-4 text-sm font-medium text-foreground/60">
                — Lara Kim, Studio Astral
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[28px] border border-border/80 bg-white/90 p-6">
              <h3 className="text-lg font-semibold text-foreground">Signal Deck</h3>
              <p className="mt-3 text-sm text-foreground/70">
                Weekly drop with top-performing headlines, launch angles, and
                channel insights across 40+ digital brands.
              </p>
            </div>
            <div className="rounded-[28px] border border-border/80 bg-white/90 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Ops Companion
              </h3>
              <p className="mt-3 text-sm text-foreground/70">
                Dedicated operator inside your Notion HQ aligning data, ops,
                and content calendars so you stay in creative flow.
              </p>
            </div>
            <div className="rounded-[28px] border border-border/80 bg-white/90 p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Experiment Library
              </h3>
              <p className="mt-3 text-sm text-foreground/70">
                Swipeable vault of 120+ experiments scored by ROI, lift, and
                setup time. Ship faster with proven tests.
              </p>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="space-y-8 rounded-[36px] border border-border/70 bg-white/90 p-10 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold text-foreground">
              Clarity for fast-moving founders.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[28px] border border-border/80 bg-white/95 p-6 transition hover:border-primary/30"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-foreground/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-[36px] border border-primary/20 bg-gradient-to-br from-primary via-secondary to-accent px-10 py-12 text-white shadow-[0_55px_120px_-80px_rgba(52,69,255,0.9)]"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Let’s build something that sells
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Drop your launch goals and we’ll send back a tailored action
                sequence within 24 hours.
              </h2>
              <p className="text-base text-white/80">
                You’ll get milestones, suggested assets, estimated runway, and a
                behind-the-scenes walkthrough of how we would run your launch.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                  <Sparkles className="h-4 w-4" />
                  Includes idea validation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
                  <Flame className="h-4 w-4" />
                  14-day launch plan
                </span>
              </div>
            </div>
            <form className="grid gap-4 rounded-[28px] bg-white/15 p-8 backdrop-blur">
              <label className="text-sm font-semibold text-white/80">
                Project focus
                <input
                  type="text"
                  placeholder="e.g. Cohort launch, template shop, membership"
                  className="mt-2 w-full rounded-2xl border border-white/30 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </label>
              <label className="text-sm font-semibold text-white/80">
                Current monthly revenue
                <select className="mt-2 w-full rounded-2xl border border-white/30 bg-white/20 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30">
                  <option className="text-foreground">Pre-launch</option>
                  <option className="text-foreground">$1K – $5K</option>
                  <option className="text-foreground">$5K – $15K</option>
                  <option className="text-foreground">$15K+</option>
                </select>
              </label>
              <label className="text-sm font-semibold text-white/80">
                Email
                <input
                  type="email"
                  placeholder="hey@yourbrand.com"
                  className="mt-2 w-full rounded-2xl border border-white/30 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </label>
              <label className="text-sm font-semibold text-white/80">
                Launch timeline
                <textarea
                  rows={3}
                  placeholder="Share your north star metrics and deadlines..."
                  className="mt-2 w-full rounded-2xl border border-white/30 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                Send tailored launch plan
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
