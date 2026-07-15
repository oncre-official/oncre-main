import { cn } from "@/lib/utils";

export function ProgressBar({ currentStep }: { currentStep: number }) {
  const steps = [
    { id: 1, label: "Account" },
    { id: 2, label: "Verify" },
    { id: 3, label: "Activate" },
    { id: 4, label: "Done" },
  ];

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pt-12 pb-8 sm:px-0">
      <div className="flex w-full items-center justify-between gap-2 sm:gap-4">
        {steps.map((step) => {
          const isActive = currentStep >= step.id;
          return (
            <div key={step.id} className="flex flex-1 flex-col gap-2">
              <div
                className={cn(
                  "h-1.5 w-full rounded-full transition-colors duration-300",
                  isActive ? "bg-brand" : "bg-brand/20"
                )}
              />
              <span className="text-[10px] sm:text-xs font-semibold text-navy">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
