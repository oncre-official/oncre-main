import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Step4Done({ isFail = false }: { isFail?: boolean }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mx-auto max-w-[500px] px-4 sm:px-0 text-center mt-8 pb-20">
      <div className={cn(
        "mx-auto flex h-12 w-12 items-center justify-center rounded-full mb-6",
        isFail ? "bg-red-50 text-red-500" : "bg-green-100 text-green-600"
      )}>
        {isFail ? <X className="h-5 w-5" /> : <Check className="h-5 w-5" />}
      </div>
      
      <h1 className="text-3xl font-bold text-navy mb-4">
        {isFail ? "Transaction fail" : "You're all set"}
      </h1>
      <p className="text-sm text-muted-foreground mb-10 mx-auto max-w-[400px]">
        Your Oncre account is active. Let's add your first debtor case and start the 21-day clock.
      </p>

      <div className="flex flex-col items-center gap-4 text-sm mb-10">
        <p className="font-semibold text-navy mb-2">Transaction summary</p>
        <div className="flex w-full justify-between sm:max-w-[300px]">
          <span className="text-muted-foreground">Payment Status:</span>
          <span className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-medium",
            isFail ? "bg-red-50 text-red-600" : "bg-green-100 text-green-700"
          )}>
            {isFail ? "Failed" : "success"}
          </span>
        </div>
        <div className="flex w-full justify-between sm:max-w-[300px]">
          <span className="text-muted-foreground">Product Name:</span>
          <span className="font-medium text-navy">Oncre subscription</span>
        </div>
        <div className="flex w-full justify-between sm:max-w-[300px]">
          <span className="text-muted-foreground">Transaction ID:</span>
          <span className="font-medium text-navy">ON233455698HT</span>
        </div>
        <div className="flex w-full justify-between sm:max-w-[300px]">
          <span className="text-muted-foreground">Customer Name:</span>
          <span className="font-medium text-navy">Precious Adonija</span>
        </div>
      </div>

      {isFail ? (
        <button 
          onClick={() => window.location.reload()}
          className="mx-auto w-full max-w-[300px] rounded-md bg-brand py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand/90"
        >
          Retry
        </button>
      ) : (
        <button 
          onClick={() => window.location.href = '/dashboard'}
          className="mx-auto flex w-full max-w-[300px] items-center justify-center gap-2 rounded-md bg-brand py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand/90"
        >
          Add debtor cases <span>→</span>
        </button>
      )}
    </div>
  );
}
