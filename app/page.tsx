"use client";

import { useState, useEffect } from "react";

const TEAM = [
  {
    id: "douglas",
    name: "Douglas",
    title: "Chief Vibe Coder",
    emoji: "💻",
    avatar: "👨‍💼",
    color: "from-blue-600 to-blue-800",
    border: "border-blue-500",
    isSelf: true,
    approveQuotes: [
      "My vibe coding told me this was a good idea.",
      "Adding to the asset register immediately.",
      "This is exactly the kind of innovation we need.",
      "Bold move. I respect it.",
    ],
    rejectQuotes: [
      "Let me take this offline.",
      "I'll circle back on this one.",
      "The demo was going so well...",
      "Needs more stakeholder alignment.",
    ],
  },
  {
    id: "mel",
    name: "Mel",
    title: "Senior Spreadsheet Whisperer",
    emoji: "📊",
    avatar: "👩‍💼",
    color: "from-purple-600 to-purple-800",
    border: "border-purple-500",
    isSelf: false,
    approveQuotes: [
      "I ran the numbers. They don't quite add up but ok.",
      "ROI is unclear but the vibes are immaculate.",
      "Technically within budget... technically.",
      "The pivot table suggested this. Who am I to argue.",
    ],
    rejectQuotes: [
      "The spreadsheet says no.",
      "I couldn't map this to an existing GL code. Denied.",
      "Risk assessment: extremely questionable.",
      "This does not spark financial joy.",
    ],
  },
  {
    id: "kat",
    name: "Kat",
    title: "Director of Yes",
    emoji: "✨",
    avatar: "👩‍🎨",
    color: "from-pink-600 to-pink-800",
    border: "border-pink-500",
    isSelf: false,
    approveQuotes: [
      "YES! I've always wanted one of these!",
      "This is literally what I was going to suggest!",
      "Approved with maximum enthusiasm!!",
      "Finally. FINALLY someone gets it.",
    ],
    rejectQuotes: [
      "Aww no... I really wanted that.",
      "I'll put it on the wishlist for next quarter.",
      "This is going in my mood board regardless.",
      "Heartbroken but supportive of the process.",
    ],
  },
  {
    id: "sarah",
    name: "Sarah",
    title: "Supreme Approver™",
    emoji: "👑",
    avatar: "👸",
    color: "from-yellow-500 to-amber-700",
    border: "border-yellow-400",
    isSelf: false,
    isBoss: true,
    approveQuotes: [
      "Approved. But I'm watching this expense.",
      "Fine. But this comes out of the fun budget.",
      "Per my last email: approved.",
      "APPROVED. The gong shall ring.",
      "I'll allow it. This time.",
    ],
    rejectQuotes: [
      "Denied. Resubmit with a 47-page justification.",
      "Rejected. Next time bring receipts AND a PowerPoint.",
      "No. Just... no.",
      "This is not aligned with our strategic objectives.",
      "Have you considered NOT buying this?",
    ],
  },
];

const REQUESTS = [
  {
    id: 1,
    item: "500x Rubber Duck Stress Balls",
    justification: "For liquidity testing. The ducks float, so they're technically liquid assets.",
    cost: 2499,
    emoji: "🦆",
    category: "Risk Management",
    urgency: "CRITICAL",
  },
  {
    id: 2,
    item: "Gold-Plated Letter Opener",
    justification: "Our current letter opener is silver-plated. This is frankly embarrassing for a bank.",
    cost: 8750,
    emoji: "✉️",
    category: "Equipment Upgrade",
    urgency: "HIGH",
  },
  {
    id: 3,
    item: "A Gong (Large, Brass)",
    justification: "Studies confirm gong-based quarter-end notifications improve Q4 momentum by 340%.*\n*study conducted by me, last Tuesday.",
    cost: 1200,
    emoji: "🔔",
    category: "Facilities",
    urgency: "MEDIUM",
  },
  {
    id: 4,
    item: "Premium Artisanal Staples (Organic, Free-Range)",
    justification: "Standard staples are causing document anxiety among senior staff. Ethically-sourced fasteners are the responsible choice.",
    cost: 340,
    emoji: "📎",
    category: "Office Supplies",
    urgency: "LOW",
  },
  {
    id: 5,
    item: "Velvet Rope System for the Printer Queue",
    justification: "Printer disputes have escalated to a Level 3 HR incident. VIP lanes needed immediately.",
    cost: 3800,
    emoji: "🖨️",
    category: "HR Infrastructure",
    urgency: "CRITICAL",
  },
  {
    id: 6,
    item: "17 Potted Ferns Named After Interest Rates",
    justification: "The team needs to emotionally connect with our core business. Naming plants after the base rate builds empathy.",
    cost: 510,
    emoji: "🌿",
    category: "Team Culture",
    urgency: "MEDIUM",
  },
  {
    id: 7,
    item: "Framed Portrait of the Excel Logo",
    justification: "To honour our patron saint. It would hang above the whiteboard in Meeting Room 3B.",
    cost: 275,
    emoji: "🖼️",
    category: "Cultural Heritage",
    urgency: "LOW",
  },
  {
    id: 8,
    item: "Executive Bubble Wrap (Unlimited Popping)",
    justification: "Stress management infrastructure. Quarterly reports are coming. You know what happens during quarterly reports.",
    cost: 189,
    emoji: "💭",
    category: "Wellness",
    urgency: "HIGH",
  },
  {
    id: 9,
    item: "Motivational Banner: 'You Miss 100% of the Invoices You Don't Approve'",
    justification: "Wayne Gretzky said something like this once. Probably about procurement.",
    cost: 650,
    emoji: "🏒",
    category: "Team Morale",
    urgency: "MEDIUM",
  },
  {
    id: 10,
    item: "Certified Comfort Blankets (Qty: 4)",
    justification: "For when the monthly variance report comes in. One per team member. No questions.",
    cost: 480,
    emoji: "🧸",
    category: "Wellness",
    urgency: "HIGH",
  },
  {
    id: 11,
    item: "A Tiny Trophy: 'Best Approval of the Month'",
    justification: "Monthly recognition for the team member with the most efficient approval turnaround. This will absolutely not create a toxic competitive atmosphere.",
    cost: 95,
    emoji: "🏆",
    category: "Rewards & Recognition",
    urgency: "LOW",
  },
  {
    id: 12,
    item: "Artisanal Standing Desk (Hand-Carved Mahogany)",
    justification: "The ergonomics report recommends standing. The dignity report recommends mahogany.",
    cost: 14500,
    emoji: "🪵",
    category: "Furniture",
    urgency: "MEDIUM",
  },
  {
    id: 13,
    item: "A Dragon Named 'Audit'",
    justification: "To deter unauthorised expenses. Also, it's cool. Initial feeding costs included in quote.",
    cost: 47000,
    emoji: "🐉",
    category: "Security",
    urgency: "CRITICAL",
  },
  {
    id: 14,
    item: "Premium Fountain Pen Set (x4)",
    justification: "For signing approval forms in STYLE. Digital signatures are for people with no respect for the craft.",
    cost: 1800,
    emoji: "🖊️",
    category: "Office Supplies",
    urgency: "MEDIUM",
  },
  {
    id: 15,
    item: "A Moat for the Building",
    justification: "Enhances physical security perimeter. Also aesthetically aligned with our 'fortress of financial stability' brand positioning.",
    cost: 250000,
    emoji: "🏰",
    category: "Facilities",
    urgency: "LOW",
  },
];

const BUDGET = 50000;

type Decision = "approved" | "rejected";

interface HistoryItem {
  request: (typeof REQUESTS)[0];
  decision: Decision;
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);
}

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Home() {
  const [shuffled] = useState(() => [...REQUESTS].sort(() => Math.random() - 0.5));
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [spent, setSpent] = useState(0);
  const [quote, setQuote] = useState<{ member: (typeof TEAM)[0]; text: string } | null>(null);
  const [stampVisible, setStampVisible] = useState<Decision | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const [done, setDone] = useState(false);
  const [sarahOverride, setSarahOverride] = useState(false);

  const current = shuffled[index];
  const sarah = TEAM.find((t) => t.id === "sarah")!;

  useEffect(() => {
    const shouldOverride = Math.random() < 0.25;
    setSarahOverride(shouldOverride);
  }, [index]);

  function decide(decision: Decision) {
    const quoteSource = sarahOverride ? sarah : randomFrom(TEAM.filter((t) => !t.isBoss));
    const quoteText = randomFrom(decision === "approved" ? quoteSource.approveQuotes : quoteSource.rejectQuotes);

    setStampVisible(decision);
    setQuote({ member: quoteSource, text: quoteText });

    setTimeout(() => {
      if (decision === "approved") setSpent((s) => s + current.cost);
      setHistory((h) => [...h, { request: current, decision }]);

      if (index + 1 >= shuffled.length) {
        setDone(true);
      } else {
        setIndex((i) => i + 1);
        setStampVisible(null);
        setAnimKey((k) => k + 1);
      }
    }, 1100);
  }

  const approvedCount = history.filter((h) => h.decision === "approved").length;
  const rejectedCount = history.filter((h) => h.decision === "rejected").length;
  const budgetPct = Math.min((spent / BUDGET) * 100, 100);
  const overBudget = spent > BUDGET;

  if (done) {
    const rating =
      overBudget
        ? { label: "🔥 BUDGET INFERNO", desc: "Sarah is typing...", color: "text-red-400" }
        : approvedCount > rejectedCount
        ? { label: "😌 SUSPICIOUSLY GENEROUS", desc: "Finance would like a word.", color: "text-yellow-400" }
        : rejectedCount > approvedCount
        ? { label: "🧊 ICE-COLD AUDITOR", desc: "You love to say no. Relatable.", color: "text-blue-400" }
        : { label: "⚖️ PERFECTLY BALANCED", desc: "As all procurement should be.", color: "text-green-400" };

    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center animate-slide-up">
          <div className="text-7xl mb-4">📋</div>
          <h1 className="text-4xl font-black text-white mb-2">Quarterly Review Complete</h1>
          <p className="text-slate-400 mb-8 text-lg">The board has deliberated. The numbers have spoken.</p>

          <div className="bg-slate-800 rounded-2xl p-8 mb-6 border border-slate-700">
            <div className={`text-3xl font-black mb-1 ${rating.color}`}>{rating.label}</div>
            <div className="text-slate-400 text-lg mb-6">{rating.desc}</div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900 rounded-xl p-4">
                <div className="text-3xl font-black text-green-400">{approvedCount}</div>
                <div className="text-slate-400 text-sm mt-1">Approved</div>
              </div>
              <div className="bg-slate-900 rounded-xl p-4">
                <div className="text-3xl font-black text-red-400">{rejectedCount}</div>
                <div className="text-slate-400 text-sm mt-1">Rejected</div>
              </div>
              <div className="bg-slate-900 rounded-xl p-4">
                <div className={`text-2xl font-black ${overBudget ? "text-red-400" : "text-white"}`}>
                  {formatCurrency(spent)}
                </div>
                <div className="text-slate-400 text-sm mt-1">Total Spent</div>
              </div>
            </div>

            <div className="space-y-2 text-left max-h-52 overflow-y-auto pr-1">
              {history.map((h, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-900 rounded-lg px-3 py-2 text-sm">
                  <span>{h.request.emoji}</span>
                  <span className="text-slate-300 flex-1 truncate">{h.request.item}</span>
                  <span className={h.decision === "approved" ? "text-green-400 font-bold" : "text-red-400 font-bold"}>
                    {h.decision === "approved" ? "✓ APPROVED" : "✗ REJECTED"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setIndex(0);
              setHistory([]);
              setSpent(0);
              setDone(false);
              setQuote(null);
              setStampVisible(null);
            }}
            className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black px-8 py-4 rounded-xl text-lg transition-all active:scale-95"
          >
            🔄 New Financial Quarter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🏦</div>
            <div>
              <div className="font-black text-lg leading-tight tracking-tight">PROCUREMENT PANIC™</div>
              <div className="text-xs text-slate-400">The Official Spend Management Platform of the Team</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-xs text-slate-400">Q2 Budget Remaining</div>
              <div className={`font-black text-xl ${overBudget ? "text-red-400" : "text-green-400"}`}>
                {formatCurrency(Math.max(BUDGET - spent, 0))}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400">Requests</div>
              <div className="font-black text-xl text-white">
                {index + 1}<span className="text-slate-500 text-sm font-normal">/{shuffled.length}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Budget bar */}
      <div className="w-full bg-slate-800 h-2">
        <div
          className={`h-2 transition-all duration-700 ${overBudget ? "bg-red-500" : budgetPct > 75 ? "bg-orange-500" : "bg-green-500"}`}
          style={{ width: `${budgetPct}%` }}
        />
      </div>

      <main className="max-w-5xl mx-auto p-6 flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Request card */}
          <div className="lg:col-span-2">
            <div
              key={animKey}
              className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 animate-slide-up"
            >
              {/* Urgency badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-black px-2 py-1 rounded-full ${
                    current.urgency === "CRITICAL"
                      ? "bg-red-500/20 text-red-400"
                      : current.urgency === "HIGH"
                      ? "bg-orange-500/20 text-orange-400"
                      : current.urgency === "MEDIUM"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-slate-600 text-slate-400"
                  }`}
                >
                  {current.urgency} PRIORITY
                </span>
                <span className="text-xs text-slate-500 bg-slate-700 px-2 py-1 rounded-full">{current.category}</span>
              </div>

              {/* Item */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{current.emoji}</div>
                <div>
                  <h2 className="text-xl font-black text-white leading-tight">{current.item}</h2>
                  <div className="text-2xl font-black text-yellow-400 mt-1">{formatCurrency(current.cost)}</div>
                </div>
              </div>

              {/* Justification */}
              <div className="bg-slate-900 rounded-xl p-4 mb-6 border border-slate-700">
                <div className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wider">Business Justification</div>
                <p className="text-slate-300 text-sm leading-relaxed italic">"{current.justification}"</p>
              </div>

              {/* Stamp overlay */}
              {stampVisible && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className={`text-4xl font-black px-6 py-3 rounded-xl border-4 animate-bounce-once ${
                      stampVisible === "approved" ? "stamp-approved" : "stamp-rejected"
                    }`}
                  >
                    {stampVisible === "approved" ? "APPROVED" : "REJECTED"}
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => !stampVisible && decide("approved")}
                  disabled={!!stampVisible}
                  className="flex-1 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl text-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  ✅ Approve
                </button>
                <button
                  onClick={() => !stampVisible && decide("rejected")}
                  disabled={!!stampVisible}
                  className="flex-1 bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl text-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  ❌ Reject
                </button>
              </div>

              {sarahOverride && (
                <div className="mt-3 text-center text-xs text-yellow-500 animate-pulse font-semibold">
                  👑 Sarah is watching this one closely...
                </div>
              )}
            </div>
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-4">
            {/* Team reaction */}
            {quote ? (
              <div
                key={quote.text}
                className={`bg-slate-800 border-2 ${quote.member.border} rounded-2xl p-4 animate-fade-in`}
              >
                <div className={`text-xs font-black uppercase tracking-wider mb-2 bg-gradient-to-r ${quote.member.color} bg-clip-text text-transparent`}>
                  {quote.member.emoji} {quote.member.name} says:
                </div>
                <p className="text-white font-medium text-sm italic">"{quote.text}"</p>
                <div className="text-xs text-slate-500 mt-1">{quote.member.title}</div>
              </div>
            ) : (
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 text-center text-slate-500 text-sm">
                Awaiting team reaction...
              </div>
            )}

            {/* Team roster */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">The Team</div>
              <div className="space-y-2">
                {TEAM.map((member) => (
                  <div key={member.id} className={`flex items-center gap-3 rounded-lg px-3 py-2 border ${member.border} border-opacity-30 bg-slate-900`}>
                    <span className="text-xl">{member.avatar}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-sm text-white">{member.name}</span>
                        {member.isBoss && <span className="text-yellow-400 text-xs">👑</span>}
                        {member.isSelf && <span className="text-blue-400 text-xs">(you)</span>}
                      </div>
                      <div className="text-xs text-slate-500 truncate">{member.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">Session Stats</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-green-400">{approvedCount}</div>
                  <div className="text-xs text-slate-400">Approved</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-red-400">{rejectedCount}</div>
                  <div className="text-xs text-slate-400">Rejected</div>
                </div>
              </div>
              {overBudget && (
                <div className="mt-3 bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center animate-pulse">
                  <div className="text-red-400 font-black text-sm">🚨 OVER BUDGET</div>
                  <div className="text-red-300 text-xs">{formatCurrency(spent - BUDGET)} over limit</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recent history strip */}
        {history.length > 0 && (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4">
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">Audit Trail</div>
            <div className="flex gap-2 flex-wrap">
              {history.slice(-8).map((h, i) => (
                <div
                  key={i}
                  title={h.request.item}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium ${
                    h.decision === "approved"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}
                >
                  <span>{h.request.emoji}</span>
                  <span className="max-w-24 truncate">{h.request.item}</span>
                  <span>{h.decision === "approved" ? "✓" : "✗"}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="text-center py-6 text-slate-600 text-xs">
        Procurement Panic™ is not affiliated with any real bank, any real procurement process, or any real dragons.
        <br />
        Sarah&apos;s approval is legally binding. Douglas built this using vibes.
      </footer>
    </div>
  );
}
