import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import visualPattern from "@/assets/visual-pattern.svg";
import { useRegisterHero } from "@/lib/hero-context";

import { ProgressBar } from "@/components/signup/ProgressBar";
import { Step1Account } from "@/components/signup/Step1Account";
import { Step2Verify } from "@/components/signup/Step2Verify";
import { Step3Activate } from "@/components/signup/Step3Activate";
import { Step4Done } from "@/components/signup/Step4Done";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
});

function SignupPage() {
  const [step, setStep] = useState(1);
  const [isFail, setIsFail] = useState(false); // Can be toggled to test fail state

  // Make the SiteHeader transparent to "flush" perfectly with the background
  useRegisterHero({
    backgroundColor: "transparent",
    theme: "light",
  });

  return (
    <div className="min-h-screen bg-white font-sans">
      <SiteHeader />
      
      {/* Slide the content under the header with -mt-20 pt-20 */}
      <section className="relative -mt-20 pt-20 min-h-screen bg-[#FDFDFD]">
        
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url(${visualPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative z-10">
          <ProgressBar currentStep={step} />

          {step === 1 && <Step1Account onNext={() => setStep(2)} />}
          {step === 2 && <Step2Verify onNext={() => setStep(3)} />}
          {step === 3 && <Step3Activate onNext={() => setStep(4)} />}
          {step === 4 && <Step4Done isFail={isFail} />}
        </div>
      </section>
    </div>
  );
}
