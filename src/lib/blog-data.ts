import fram1 from "@/assets/fram1.svg";
import fram2 from "@/assets/fram2.svg";
import fram3 from "@/assets/fram3.svg";
import blog3Image from "@/assets/blog3.jpeg";
import blog2Image from "@/assets/blog2.jpeg";
import blog1Image from "@/assets/blog1.jpeg";
import howToRecoverDebtsContent from "@/assets/blog/how-to-recover-debts.md?raw";
import howToCreateCreditPolicyContent from "@/assets/blog/how-to-create-a-credit-policy-for-your-business.md?raw";

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  content?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-create-a-credit-policy",
    category: "Insights",
    date: "Jul 16, 2026",
    title: "How to Create a Credit Policy for Your Business",
    excerpt:
      "A credit policy sets the rules for who can buy on credit, how much credit they can get, and when they are expected to pay.",
    image: blog3Image,
    content: howToCreateCreditPolicyContent,
  },
  {
    slug: "how-to-recover-debts",
    category: "Recovery",
    date: "Jul 14, 2026",
    title: "How to Recover Debts From Customers Without Losing Them",
    excerpt:
      "There's the possibility that today's debtor could be next quarter's biggest order. How do you get your money back without losing a customer?",
    image: blog2Image,
    content: howToRecoverDebtsContent,
  },
  // {
  //   slug: "how-oncre-helps",
  //   category: "Recovery",
  //   date: "Jun 12, 2026",
  //   title: "How OnCRE helps you get your money back",
  //   excerpt:
  //     "A look inside how our recovery desk turns unpaid credit into settled accounts - without damaging customer relationships.",
  //   image: blog1Image,
  // },
  // {
  //   slug: "from-notebook-to-ledger",
  //   category: "Tracking",
  //   date: "May 28, 2026",
  //   title: "From notebook to ledger: cleaning up credit sales",
  //   excerpt:
  //     "Why written records fail traders - and how a shared, WhatsApp-linked ledger changes the game.",
  //   image: fram1,
  // },
  // {
  //   slug: "credit-control-layer",
  //   category: "Insight",
  //   date: "May 10, 2026",
  //   title: "The credit control layer Nigeria has been missing",
  //   excerpt:
  //     "Informal credit powers our economy. Here's the infrastructure it needs to keep working at scale.",
  //   image: fram3,
  // },
];
