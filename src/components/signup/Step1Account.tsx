import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignupField } from "./SignupField";

export function Step1Account({ onNext }: { onNext: () => void }) {
  const [password, setPassword] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const getPasswordStrength = () => {
    if (!password) return { bars: 0, label: "Too weak", color: "text-red-500" };
    if (password.length < 5) return { bars: 1, label: "Weak Password", color: "text-red-500", barColor: "bg-red-500" };
    if (password.length < 8) return { bars: 2, label: "Moderate Password", color: "text-yellow-500", barColor: "bg-yellow-500" };
    return { bars: 4, label: "Strong Password", color: "text-green-500", barColor: "bg-green-500" };
  };

  const strength = getPasswordStrength();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
          Let's set up your account - takes<br className="hidden sm:block" /> about <span className="text-[#8B9FF7]">2 minutes.</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          A few details so we can act on your behalf - professionally and lawfully.
        </p>
      </div>

      <div className="mx-auto w-full max-w-2xl px-4 sm:px-0 flex flex-col gap-8 pb-20">
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Your Details</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <SignupField label="Full Name" required>
              <input type="text" placeholder="Precious Ajonode" className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand" />
            </SignupField>
            <SignupField label="Phone Numbe" required>
              <input type="text" placeholder="09065109876" className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand" />
            </SignupField>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Business Details</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <SignupField label="Registered Business Name" required>
              <input type="text" placeholder="Precious Ajonode Group" className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand" />
            </SignupField>
            <div className="relative">
              <SignupField label="Business Type" required>
                <div 
                  className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm flex items-center justify-between cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className={selectedType ? "text-navy" : "text-muted-foreground"}>{selectedType || "Select"}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </SignupField>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-full rounded-md border border-border bg-white shadow-lg z-10 py-1">
                  {["Sole proprietor", "Limited liability", "Partnership", "NGO", "Other"].map((type) => (
                    <div 
                      key={type} 
                      className="px-4 py-2.5 text-sm hover:bg-blue-50 hover:text-brand cursor-pointer"
                      onClick={() => { setSelectedType(type); setIsDropdownOpen(false); }}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Sign-In Credentials</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <SignupField label="Business Email" required>
              <input type="email" placeholder="PreciousAjonodeGroup@gmail.com" className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand" />
            </SignupField>
            <div>
              <SignupField label="Password" required>
                <input 
                  type="password" 
                  placeholder="Select" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand" 
                />
              </SignupField>
              {/* Password strength */}
              <div className="mt-2 flex items-center justify-between gap-2">
                <div className="flex flex-1 gap-1">
                  {[1, 2, 3, 4].map((bar) => (
                    <div 
                      key={bar} 
                      className={cn(
                        "h-1 flex-1 rounded-full",
                        !password ? "bg-brand/20" : bar <= strength.bars ? strength.barColor : "bg-[#1E1E1E]"
                      )}
                    />
                  ))}
                </div>
                <span className={cn("text-[10px] font-medium min-w-[90px] text-right", strength.color)}>
                  {strength.label}
                </span>
              </div>
            </div>
          </div>
        </section>

        <button 
          onClick={onNext}
          className="w-full rounded-md bg-brand py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand/90"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
