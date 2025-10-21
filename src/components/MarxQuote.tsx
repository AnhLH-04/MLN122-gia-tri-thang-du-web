import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { X, Quote } from 'lucide-react';

const quotes = [
  {
    text: "Tư bản sợ không có lợi nhuận hoặc lợi nhuận quá nhỏ, như tự nhiên sợ chân không.",
    author: "Karl Marx"
  },
  {
    text: "Lịch sử của mọi xã hội cho đến nay là lịch sử của đấu tranh giai cấp.",
    author: "Karl Marx & Friedrich Engels"
  },
  {
    text: "Người lao động không có gì để mất ngoài xiềng xích của mình.",
    author: "Karl Marx"
  },
  {
    text: "Tư bản không phải là vật, mà là một quan hệ xã hội giữa những người.",
    author: "Karl Marx"
  },
  {
    text: "Khi lợi nhuận đạt 10%, họ sẵn sàng làm mọi việc; 50%, họ liều lĩnh; 100%, họ chà đạp mọi luật pháp.",
    author: "Karl Marx"
  }
];

export function MarxQuote() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    // Show random quote every 30-60 seconds
    const showQuote = () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(randomQuote);
      setIsVisible(true);

      // Auto hide after 8 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 8000);
    };

    // First quote after 10 seconds
    const firstTimer = setTimeout(showQuote, 10000);

    // Subsequent quotes every 40-70 seconds
    const interval = setInterval(() => {
      showQuote();
    }, 40000 + Math.random() * 30000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 max-w-md z-50"
        >
          <div className="bg-gradient-to-br from-black to-[#1a1a1a] border-2 border-[#D4AF37] rounded-lg p-6 shadow-2xl">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-start gap-3 mb-4">
              <Quote size={30} className="text-[#D4AF37] flex-shrink-0" />
              <p className="text-white/90 italic">{currentQuote.text}</p>
            </div>

            <p className="text-[#D4AF37] text-sm text-right">— {currentQuote.author}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
