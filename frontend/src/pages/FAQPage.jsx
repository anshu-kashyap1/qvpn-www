import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FAQ_DATA, SITE_CONFIG } from "@/config/site";

const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div className="border-b border-white/10 last:border-0">
    <button
      onClick={toggle}
      className="w-full py-5 flex items-center justify-between text-left"
    >
      <span className="text-white font-medium pr-4">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-violet-400 flex-shrink-0" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
      )}
    </button>
    {isOpen && (
      <div className="pb-5">
        <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

export const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredData = FAQ_DATA.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <Badge className="section-badge mb-6">
          <HelpCircle className="w-3 h-3 text-violet-400" />
          <span>FAQ</span>
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Find answers to common questions about {SITE_CONFIG.brand.name}.
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
          />
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">No results found for "{searchQuery}"</p>
            <p className="text-gray-500 text-sm mt-2">
              Try different keywords or{" "}
              <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} className="text-violet-400 hover:text-violet-300">
                contact support
              </a>
            </p>
          </div>
        ) : (
          filteredData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-xl font-bold text-white mb-6">{category.category}</h2>
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 px-6">
                {category.questions.map((faq, questionIndex) => (
                  <FAQItem
                    key={questionIndex}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openItems[`${categoryIndex}-${questionIndex}`]}
                    toggle={() => toggleItem(categoryIndex, questionIndex)}
                  />
                ))}
              </div>
            </div>
          ))
        )}

        {/* Still have questions */}
        <div className="mt-12 p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Still have questions?</h3>
          <p className="text-gray-400 mb-4">
            Can't find what you're looking for? We're here to help.
          </p>
          <a
            href={`mailto:${SITE_CONFIG.contact.supportEmail}`}
            className="text-violet-400 hover:text-violet-300 font-medium"
          >
            Contact Support →
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
