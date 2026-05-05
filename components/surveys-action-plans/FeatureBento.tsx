"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function DriverTags() {
  const tags = [
    { name: "Mood Index",        color: "#06B6D4" },
    { name: "Retention",         color: "#A855F7" },
    { name: "Mgmt & Leadership", color: "#F59E0B" },
    { name: "Teamwork",          color: "#15803D" },
    { name: "Diversity",         color: "#3B82F6" },
  ];
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <span key={t.name} className="text-[10px] font-bold uppercase tracking-[0.06em] px-2 py-1 rounded-full" style={{ background: t.color + "30", color: t.color }}>{t.name}</span>
      ))}
    </div>
  );
}

function OwnerCapabilities() {
  const caps = ["Search by name", "Search by email", "Multiple assignees", "Deadline tracking"];
  return (
    <div className="flex flex-wrap gap-1.5">
      {caps.map((c) => (
        <span key={c} className="text-[10px] font-bold text-dark-300 bg-light-100 border border-light-200 px-2 py-1 rounded-full">{c}</span>
      ))}
    </div>
  );
}

function FilterCapabilities() {
  const caps = ["Status filter", "Assigned-to filter", "ETA filter", "CSV export"];
  return (
    <div className="flex flex-wrap gap-1.5">
      {caps.map((c) => (
        <span key={c} className="text-[10px] font-bold text-dark-300 bg-light-100 border border-light-200 px-2 py-1 rounded-full">{c}</span>
      ))}
    </div>
  );
}

function RbacCapabilities() {
  const caps = ["Manager view", "HR admin view", "Employee view", "Custom permissions"];
  return (
    <div className="flex flex-wrap gap-1.5">
      {caps.map((c) => (
        <span key={c} className="text-[10px] font-bold text-white/80 bg-white/8 border border-white/10 px-2 py-1 rounded-full">{c}</span>
      ))}
    </div>
  );
}

function CreateTaskForm() {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-1">Task heading</p>
        <p className="text-[11px] font-bold text-dark-300 bg-white border border-light-200 rounded-lg px-3 py-2">Improve career growth discussions in Engineering</p>
      </div>
      <div>
        <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-1">Description</p>
        <p className="text-[10px] text-dark-100 bg-white border border-light-200 rounded-lg px-3 py-2 leading-relaxed">Schedule monthly 1:1s focused on career path and development goals for all senior engineers.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-1">Engagement driver</p>
          <span className="inline-block text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded-full">Mgmt &amp; Leadership</span>
        </div>
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-1">Deadline</p>
          <p className="text-[11px] font-bold text-dark-300 bg-white border border-light-200 rounded-lg px-3 py-1">15 Jul 2024</p>
        </div>
      </div>
      <div>
        <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-1">Assigned to</p>
        <div className="flex items-center gap-2 bg-white border border-light-200 rounded-lg px-2.5 py-1.5">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white" style={{ background: "linear-gradient(135deg,#1D61F6,#6f8eff)" }}>AD</div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-dark-300 truncate">Andrew Davis</p>
            <p className="text-[9px] text-dark-100 truncate">andrew.davis@xoxoday.com</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 pt-2">
        <button className="text-[10px] font-bold text-dark-100 px-3 py-1.5 rounded-md hover:bg-light-200 transition-colors">Cancel</button>
        <button className="text-[10px] font-bold text-white bg-blue-200 px-3 py-1.5 rounded-md">Create ✓</button>
      </div>
    </div>
  );
}

function HistoricalTrend() {
  return (
    <div>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-2xl font-bold text-dark-300 tabular-nums">3.2</span>
        <span className="text-[10px] text-dark-100">Career growth · Q2</span>
        <span className="text-[10px] font-bold text-orange-300 ml-auto">↓ 0.4 vs Q1</span>
      </div>
      <svg viewBox="0 0 220 50" className="w-full h-12">
        <path d="M0,20 L40,18 L80,22 L120,28 L160,32 L200,38 L220,40" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
        {[0,40,80,120,160,200,220].map((x, i) => (
          <circle key={i} cx={x} cy={[20,18,22,28,32,38,40][i]} r="2.5" fill="#F97316" />
        ))}
      </svg>
      <p className="text-[10px] text-dark-100 mt-1">Worsening over 6 cycles — new action plan recommended.</p>
    </div>
  );
}

function ResearchRecommendations() {
  const recs = [
    { e: "📅", t: "Monthly 1:1s focused on career growth" },
    { e: "🎓", t: "Senior IC track expectations doc" },
    { e: "🚀", t: "Internal mobility office hours" },
  ];
  return (
    <div className="space-y-1.5">
      {recs.map((r) => (
        <div key={r.t} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{r.e}</span>
          <p className="text-[10px] font-bold text-white truncate">{r.t}</p>
        </div>
      ))}
    </div>
  );
}

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Closed-loop workflow</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Tag, assign, deadline, resolve</h2>
          <p className="text-dark-100 text-base leading-relaxed">Every survey insight gets an owner, a deadline, and a visible resolution — so feedback loops actually close.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">Tagging</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Engagement driver tagging</h3>
            <p className="text-xs text-dark-000 leading-relaxed mb-4">Every task is tagged to the engagement driver it addresses — so anyone reviewing action plans understands the context and priority.</p>
            <DriverTags />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.05, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Ownership</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Owner assignment</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Search the directory, select multiple owners if needed, set a hard deadline. No ambiguity about who's responsible.</p>
            <OwnerCapabilities />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Filters &amp; views</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Filter, switch views, export</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Filter by status, assignee, creation date, or ETA. Switch between &ldquo;Assigned to me&rdquo; and &ldquo;All&rdquo; views. Export task lists for stakeholder reviews.</p>
            <FilterCapabilities />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.15, ease }}
            className="lg:col-span-2 rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Workflow</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Create task</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">A short, structured form. Driver, owner, deadline. Created in seconds during the manager's post-survey review.</p>
            <CreateTaskForm />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">RBAC</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Role-based access</h3>
            <p className="text-xs text-dark-000 leading-relaxed mb-4">Managers see plans for their teams. HR admins see everything. ICs see what's assigned to them. No data leakage, no overload.</p>
            <RbacCapabilities />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.25, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Context</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Historical trend comparison</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Compare current driver scores to past cycles. Identify whether an issue is new, seasonal, or systemic before deciding on the action.</p>
            <HistoricalTrend />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.3, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">Intelligence</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Research-backed recommendations</h3>
            <p className="text-xs text-dark-000 leading-relaxed mb-4">Empuls suggests action types based on the engagement driver and historical data — so managers don't start from scratch every cycle.</p>
            <ResearchRecommendations />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
