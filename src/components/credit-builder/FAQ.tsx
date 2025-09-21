import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const faqData = [
  {
    question: "How quickly will I see results on my credit report?",
    answer: "Business credit reporting typically begins within 30-45 days of your first payment. You'll see your first credit report entry within 60-90 days. Personal credit reporting starts within 30 days and appears on your credit report within 45-60 days."
  },
  {
    question: "Which credit bureaus do you report to?",
    answer: "For business credit, we report to Dun & Bradstreet and Experian Business. For personal credit, we report to all three major bureaus: Experian, Equifax, and TransUnion. The number of bureaus activated depends on your chosen plan and payment consistency."
  },
  {
    question: "What happens if I miss a payment?",
    answer: "Consistency is key for credit building. If you miss a payment, we'll pause reporting until you're current. Late payments won't be reported negatively, but you'll need to maintain consistent payments to continue building positive credit history."
  },
  {
    question: "Do I need to be a member for the credit reporting service?",
    answer: "No! Our standalone Credit Reporting Service ($49/month for business, $25/month for personal) doesn't require membership. This is perfect if you only want credit building without membership benefits."
  },
  {
    question: "What documents do I need to get started?",
    answer: "For business credit: EIN (Employer Identification Number), business registration documents, and valid business address. For personal credit: Social Security Number, valid ID, and current address verification."
  },
  {
    question: "How long should I continue the service?",
    answer: "We recommend a minimum of 90 days for optimal credit building results. Most clients see significant improvements after 6-12 months of consistent reporting. You can continue as long as you want to maintain and strengthen your credit profile."
  },
  {
    question: "Is my money refundable?",
    answer: "Membership fees follow our standard refund policy. The standalone credit reporting service fees are non-refundable as they cover the cost of bureau reporting and account maintenance."
  },
  {
    question: "How is this different from other credit building services?",
    answer: "Our unique approach combines membership benefits with credit building, or offers standalone reporting without membership requirements. We provide progressive bureau activation based on payment consistency, giving you more value as you build stronger payment history."
  }
];

export default function FAQ() {
  return (
    <div className="mb-12">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}