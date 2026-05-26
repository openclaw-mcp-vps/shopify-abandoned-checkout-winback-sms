export default function Page() {
  const faqs = [
    {
      q: "How does it connect to my Shopify store?",
      a: "After subscribing, you'll receive a webhook URL to add in your Shopify admin under Settings → Notifications. Setup takes under 2 minutes."
    },
    {
      q: "Can I customize the SMS messages and timing?",
      a: "Yes. You control the delay (e.g. 1 hour, 24 hours), message copy, and optional discount codes for each step in your sequence."
    },
    {
      q: "Is there a free trial?",
      a: "Every new account gets a 7-day free trial. No credit card required to start — you're only billed after the trial ends."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Shopify SMS Recovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Recover abandoned checkouts<br />
          <span className="text-[#58a6ff]">automatically via SMS</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Shopify store, set your message sequence, and watch lost revenue come back. Powered by Twilio — no coding required.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">7-day free trial · Cancel anytime · No credit card to start</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["15–25%", "avg. checkout recovery rate"],
            ["3 steps", "customizable SMS sequence"],
            ["2 min", "Shopify setup time"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited abandoned checkout detection",
              "Up to 3-step SMS sequences",
              "Custom delays & discount codes",
              "Twilio integration (bring your own)",
              "Campaign analytics dashboard",
              "Email support"
            ].map(f => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started Free
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">7-day free trial included</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#8b949e] mt-12">
          &copy; {new Date().getFullYear()} SMS Winback. Built for Shopify store owners.
        </p>
      </section>
    </main>
  );
}
