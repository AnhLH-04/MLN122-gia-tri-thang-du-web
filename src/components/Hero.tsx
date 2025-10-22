import { motion } from 'motion/react';
import { Coins, TrendingDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1a1a1a] to-black overflow-hidden">
      {/* Animated background coins */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#D4AF37]/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Coins size={30 + Math.random() * 40} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="mb-8 inline-block"
        >
          <Coins size={100} className="text-[#D4AF37]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Giá trị thặng dư
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl text-[#D4AF37] mb-4">
            Bí mật của nền kinh tế tư bản chủ nghĩa
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Khám phá sự thật ẩn giấu đằng sau sự tích lũy của cải và bóc lột lao động
            trong hệ thống tư bản chủ nghĩa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-2 text-[#D4AF37]"
        >
          <span>Cuộn xuống để khám phá</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <TrendingDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
