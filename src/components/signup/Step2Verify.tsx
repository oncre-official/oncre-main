import { useState, useRef } from "react";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Step2Verify({ onNext }: { onNext: () => void }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every((val) => val !== "");

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mx-auto max-w-[400px] px-4 sm:px-0 text-center mt-8 pb-20">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-6">
        <Mail className="h-5 w-5 text-green-600" />
      </div>
      <h1 className="text-3xl font-bold text-navy mb-2">Verify your Phone number</h1>
      <p className="text-sm text-muted-foreground mb-10">
        We sent a 6-digit code to <span className="font-semibold text-navy">+234 70565490387</span>
      </p>

      <div className="flex justify-center gap-2 sm:gap-3 mb-10">
        {otp.map((val, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            value={val}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="h-12 w-10 sm:h-14 sm:w-12 rounded-md border border-border bg-white text-center text-lg font-semibold text-navy outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
        ))}
      </div>

      <button 
        onClick={onNext}
        disabled={!isComplete}
        className={cn(
          "w-full rounded-md py-3.5 text-sm font-semibold text-white transition-all",
          isComplete ? "bg-brand hover:bg-brand/90" : "bg-[#8B9FF7] cursor-not-allowed"
        )}
      >
        Verify and Continue
      </button>

      <p className="mt-6 text-sm text-muted-foreground">
        Resend OTP code in 50s
      </p>
    </div>
  );
}
