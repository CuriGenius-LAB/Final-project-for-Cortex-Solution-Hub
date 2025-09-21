import { FaMinus , FaPlus } from "react-icons/fa";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
      >
        <span className="font-medium pr-4 nunito-font text-gray-800">{question}</span>
        {isOpen ? (
          <FaMinus className="w-5 h-5 text-gray-500 flex-shrink-0" />
        ) : (
          <FaPlus className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;