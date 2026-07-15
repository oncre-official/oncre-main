import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  wordmark?: boolean;
  markClassName?: string;
};

/**
 * OnCRE logomark - stylized rounded square with a horizontal split
 * forming a channel/tunnel motif (per brand guidelines).
 */
export function OnCreMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      width="48" height="59" viewBox="0 0 48 59" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M19.6019 22.0423V12.8821C19.6019 12.6143 19.7265 12.3837 19.9509 12.2369C20.1756 12.09 20.4369 12.0679 20.6821 12.1753C22.601 13.0145 24.2624 14.3671 25.4785 16.0816C28.0044 19.642 27.5986 21.7097 27.5986 25.719V30.5963C27.5986 30.8439 27.7038 31.0573 27.9004 31.208C28.0971 31.3587 28.3302 31.4054 28.5694 31.3412L43.8786 27.2387C44.2204 27.1472 44.4502 26.8478 44.4502 26.4938V13.5637C44.4136 7.25691 39.1967 2.2168 32.969 2.2168C29.903 2.2168 15.8227 6.48047 11.7571 7.47505C6.43784 8.77625 2.75034 13.2444 2.75034 18.8858V26.1442C2.75034 26.3918 2.85553 26.6052 3.05208 26.7559C3.2488 26.9069 3.48194 26.9533 3.72114 26.8891L19.0303 22.7869C19.3722 22.6954 19.6019 22.3963 19.6019 22.0423ZM27.5983 36.9567V46.1168C27.5983 46.3847 27.4737 46.6156 27.2493 46.7621C27.0246 46.909 26.7633 46.931 26.5181 46.8237C24.5992 45.9845 22.9381 44.6319 21.7217 42.9174C19.1962 39.357 19.6016 37.2893 19.6016 33.2798V28.4025C19.6016 28.1549 19.4964 27.9415 19.2998 27.7908C19.1031 27.6401 18.87 27.5934 18.6308 27.6576L3.32163 31.7601C2.97976 31.8517 2.75 32.151 2.75 32.505V45.4351C2.78658 51.7419 8.00353 56.782 14.2312 56.782C17.2972 56.782 31.3775 52.5183 35.4431 51.5238C40.7624 50.2226 44.4499 45.7544 44.4499 40.113V32.8547C44.4499 32.607 44.3447 32.3936 44.1481 32.2429C43.9514 32.0919 43.7183 32.0455 43.479 32.1097L28.1699 36.2119C27.828 36.3035 27.5983 36.6027 27.5983 36.9567Z"
        fill="currentColor" />
    </svg>

  );
}

// <svg
//   viewBox="0 0 64 64"
//   xmlns="http://www.w3.org/2000/svg"
//   className={className}
//   aria-hidden="true"
// >
//   <defs>
//     <mask id="oncre-mask">
//       <rect width="64" height="64" fill="black" />
//       <rect x="4" y="4" width="56" height="56" rx="16" fill="white" />
//       {/* horizontal channel */}
//       <rect x="0" y="28" width="64" height="8" fill="black" />
//       {/* inner vertical opening - creates the "C/tunnel" cutouts */}
//       <rect x="20" y="12" width="10" height="16" rx="5" fill="black" />
//       <rect x="34" y="36" width="10" height="16" rx="5" fill="black" />
//     </mask>
//   </defs>
//   <rect width="64" height="64" fill="currentColor" mask="url(#oncre-mask)" />
// </svg>


export function OnCreLogo({ className, wordmark = true, markClassName }: Props) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <OnCreMark className={cn("size-7 text-brand", markClassName)} />
      {wordmark && (
        <span className="text-[1.15rem] font-bold tracking-tight text-current">
          OnCRE
        </span>
      )}
    </span>
  );
}
