import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Tell me about your agency?",
    answer: "At GOD PROMO, we help entrepreneurs, coaches, and brands grow their digital presence through premium video editing and impactful social media marketing. Our focus is turning content into growth.",
  },
  {
    question: "Tell me about your content plan?",
    answer: "We assess your current content, define your target audience, and create a strategic content plan that aligns with your brand goals — designed to boost engagement and drive results.",
  },
  {
    question: "What services will you provide?",
    answer: "GOD PROMO offers end-to-end video editing for YouTube, Shorts, Reels, TikTok, promotional content, and more. We also run performance-driven social media marketing campaigns that generate leads, sales, and brand loyalty.",
  },
  {
    question: "What if I don't get the results?",
    answer: "Our proven systems have helped numerous creators and businesses grow rapidly. While results may vary, we apply the same strategies that have worked repeatedly — and tweak them to fit your unique brand.",
  },
  {
    question: "Why wouldn't I hire a freelancer?",
    answer: "Unlike solo freelancers, GOD PROMO offers a full team of specialists, ensuring higher quality, faster turnaround, and consistent support. We scale with you — no limits, no burnout.",
  },
  {
    question: "Tell me about your workflow?",
    answer: "We start with a deep understanding of your brand and goals. From there, our team manages scripting, editing, task flow, and feedback loops — giving you clarity, control, and peace of mind.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Your Concerns, Clarified
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Questions You May Ask
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-glass border-none rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
