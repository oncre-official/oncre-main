export function Step3Activate({ onNext }: { onNext: () => void }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mx-auto max-w-[600px] px-4 sm:px-0 text-center mt-8 pb-20">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-6">
        <div className="text-green-600 font-bold text-xl">₦</div>
      </div>
      <h1 className="text-3xl font-bold text-navy mb-4">Activate your account</h1>
      <p className="text-sm text-muted-foreground mb-10 mx-auto max-w-[500px] leading-relaxed">
        One payment to unlock everything.' A clear N5,000 figure - large, prominent. Below it, 3 to 4 bullet points of what gets unlocked (21-day recovery engine, case tracking dashboard, payment monitoring).
      </p>

      <div className="rounded-[24px] bg-[#EEF2FF] p-6 sm:p-10 text-left border border-[#E0E7FF]">
        <div className="bg-white rounded-xl p-6 sm:p-8 mb-6 shadow-sm">
          <p className="text-sm font-medium text-navy mb-4">Yearly</p>
          <h2 className="text-2xl font-semibold text-navy mb-16">For merchant</h2>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h3 className="text-xl font-bold text-navy">NGN 5,000/ontime</h3>
            <button 
              onClick={onNext}
              className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand/90 whitespace-nowrap"
            >
              Pay NGN 5,000 & activate
            </button>
          </div>
        </div>

        <ul className="space-y-4 px-2">
          {["Unlimited debtor cases", "21-day automated recovery workflow", "Real-time Kanban dashboard", "SMS, WhatsApp & email outreach included", "Legal escalation support in Phase 3"].map((point, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-navy">
              <div className="h-1 w-1 rounded-full bg-navy" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
