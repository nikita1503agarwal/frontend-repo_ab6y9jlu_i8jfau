import React from 'react'
import Spline from '@splinetool/react-spline'
import { Sparkles, Wand2, Rocket, Code2, Paintbrush, Zap, Shield, Clock, ArrowRight, CheckCircle2, Download } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 shadow-sm"></div>
          <span className="text-lg font-semibold tracking-tight">ThemeForge AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden sm:inline-block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Log in</a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-slate-800 transition">
            Get started <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft gradient overlays to enhance readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>

      {/* Content */}
      <div className="relative z-10 pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur">
              <Sparkles size={14} className="text-violet-600" />
              Convert AI UI code into production WordPress themes
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              From code to WordPress theme in minutes — powered by AI
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600">
              Paste your Tailwind/React components, design tokens, or HTML. We turn it into a pixel-perfect, performant WordPress theme with blocks, Customizer options, and Gutenberg styles.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3" id="cta">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition">
                Start free <ArrowRight size={18} />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition">
                Watch demo
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <CheckCircle2 size={16} className="text-emerald-600" /> No credit card required
              <CheckCircle2 size={16} className="text-emerald-600" /> Exports standard .zip theme
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/60 backdrop-blur p-6 hover:shadow-lg hover:border-slate-300 transition">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-violet-500 to-cyan-400 text-white flex items-center justify-center shadow-sm">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for creators and dev teams</h2>
          <p className="mt-3 text-slate-600">Everything you need to transform AI-generated UI into production-quality WordPress themes.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={Wand2} title="One-click conversion" desc="Drop in your React, HTML, or Tailwind code. We auto-map components to Gutenberg blocks and theme templates." />
          <Feature icon={Paintbrush} title="Design tokens → theme.json" desc="Colors, spacing, and typography become WordPress-native theme settings with zero manual work." />
          <Feature icon={Zap} title="Performance first" desc="Clean, optimized PHP and assets. Core Web Vitals friendly by default." />
          <Feature icon={Code2} title="Developer friendly" desc="Export readable code, hooks, and template parts that your team can extend." />
          <Feature icon={Shield} title="Standards compliant" desc="Gutenberg styles, block patterns, and best practices baked in." />
          <Feature icon={Clock} title="Minutes, not weeks" desc="Ship production themes blazing fast without hand-converting every component." />
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      title: 'Paste your UI code',
      desc: 'Provide React components, Tailwind HTML, or a design system export.',
      icon: Code2,
    },
    {
      title: 'Map to WordPress',
      desc: 'Our AI converts layouts into templates, blocks, and theme.json settings.',
      icon: Wand2,
    },
    {
      title: 'Export your theme',
      desc: 'Download the .zip and install on any WordPress site. It just works.',
      icon: Download,
    },
  ]

  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">How it works</h2>
          <p className="mt-3 text-slate-600">A streamlined pipeline from your components to a complete theme.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-slate-200 bg-white p-6">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shadow">{i + 1}</div>
              <div className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Start free. Upgrade when you ship.</h2>
            <p className="mt-4 text-slate-600">Generate unlimited previews on the free tier. Export production-ready themes and unlock advanced mapping with Pro.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18} /> Unlimited conversions (preview)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18} /> theme.json + block styles</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18} /> Gutenberg patterns & template parts</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18} /> Clean, extendable exports</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#waitlist" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold shadow-lg hover:bg-slate-800 transition">
                Join the waitlist <Rocket size={18} />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition">
                See pricing
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" id="demo">
            <div className="text-xs font-medium text-slate-500">Preview export</div>
            <div className="mt-3 rounded-xl bg-slate-950 text-slate-100 p-4 font-mono text-xs overflow-auto">
{`// Input: React component
<Button className="bg-violet-600 text-white px-4 py-2 rounded">Buy</Button>

// Output: Gutenberg block style
{
  "style": {
    "color": { "background": "var(--wp--preset--color--violet-600)", "text": "#fff" },
    "border": { "radius": "8px" },
    "spacing": { "padding": { "top": "8px", "bottom": "8px", "left": "16px", "right": "16px" } }
  }
}`}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400"></div>
          <span className="text-sm font-semibold">ThemeForge AI</span>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} ThemeForge AI. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
