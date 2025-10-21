import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Coins, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Section1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#2a2410] to-black py-20 px-4 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1653590501805-cce7dec267e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwY29pbnMlMjBtb25leXxlbnwxfHx8fDE3NjA5NDc5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gold coins"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={isInView ? { rotate: 360 } : {}}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="inline-block mb-6"
          >
            <Coins size={80} className="text-[#D4AF37]" />
          </motion.div>
          <h2
            className="text-4xl md:text-5xl text-[#D4AF37] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Bí ẩn của đồng tiền
          </h2>
          <p className="text-xl text-white/80">Giải mã nguồn gốc tư bản</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg p-6">
              <h3 className="text-[#D4AF37] mb-4">💎 Điều kiện ra đời tư bản</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <DollarSign className="text-[#D4AF37] flex-shrink-0 mt-1" size={20} />
                  <span>Tập trung một khoản tiền lớn</span>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="text-[#D4AF37] flex-shrink-0 mt-1" size={20} />
                  <span>Bóc lột sức lao động của người khác</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg p-6">
              <h3 className="text-[#D4AF37] mb-4">💰 Tiền tệ và tư bản</h3>
              <p className="text-white/80">
                Tiền là sản vật cuối cùng của lưu thông hàng hóa, đồng thời là{' '}
                <span className="text-[#D4AF37]">hình thức biểu hiện đầu tiên của tư bản</span>
              </p>
            </div>
          </motion.div>

          {/* Right side - Formulas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-lg p-6">
              <h3 className="text-[#D4AF37] mb-6">🔄 Công thức vận động</h3>
              
              <div className="space-y-6">
                <div className="bg-black/40 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-2">Trao đổi đơn giản:</p>
                  <div className="flex items-center justify-center gap-3 text-white">
                    <span className="text-2xl">H</span>
                    <ArrowRight className="text-[#D4AF37]" />
                    <span className="text-2xl">T</span>
                    <ArrowRight className="text-[#D4AF37]" />
                    <span className="text-2xl">H</span>
                  </div>
                </div>

                <div className="bg-[#D4AF37]/20 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-2">Vận động tư bản:</p>
                  <div className="flex items-center justify-center gap-3 text-white">
                    <span className="text-2xl">T</span>
                    <ArrowRight className="text-[#D4AF37]" />
                    <span className="text-2xl">H</span>
                    <ArrowRight className="text-[#D4AF37]" />
                    <span className="text-2xl">T'</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg p-6">
              <h3 className="text-[#D4AF37] mb-4">⚡ Bản chất của tư bản</h3>
              <div className="bg-black/40 rounded-lg p-4 text-center">
                <p className="text-white/60 text-sm mb-2">Công thức:</p>
                <p className="text-2xl text-white mb-2">T' = T + ΔT</p>
                <p className="text-white/70 text-sm">
                  ΔT (giá trị dôi ra) = <span className="text-[#D4AF37]">Giá trị thặng dư</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="relative overflow-hidden rounded-lg border-2 border-[#D4AF37]/50 group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1608521705033-9953484663b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMGNhc2glMjBzdGFja3xlbnwxfHx8fDE3NjEwMjgwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Money accumulation"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <p className="text-white text-sm">Tích lũy tiền tệ - Bước đầu tiên của tư bản</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border-2 border-[#D4AF37]/50 group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1568585105565-e372998a195d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMG1vbmV5JTIwd2VhbHRofGVufDF8fHx8MTc2MTAyODAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Capitalist wealth"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <p className="text-white text-sm">Nhà tư bản - Người sở hữu tư liệu sản xuất</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex justify-center items-center gap-4"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <TrendingUp size={40} className="text-[#D4AF37]" />
          </motion.div>
          <p className="text-white/60 italic">
            "Tư bản không phải là vật, mà là một quan hệ xã hội"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
