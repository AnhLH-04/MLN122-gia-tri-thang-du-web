import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Conclusion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1a1a1a] to-[#0a0a0a] py-20 px-4 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-15">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758554401909-2f7fb521690f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZXN0JTIwd29ya2VycyUyMG1vdmVtZW50fGVufDF8fHx8MTc2MTAyNzczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Workers movement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95" />
      </div>

      {/* Mirror effect background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : {}}
        className="absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, type: 'spring' }}
          className="mb-8"
        >
          <Quote size={80} className="text-[#D4AF37] mx-auto" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl text-[#D4AF37] mb-8"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Suy ngẫm
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl text-white mb-6">
            Bạn có đang sống trong vòng xoáy của giá trị thặng dư?
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Mỗi ngày làm việc, mỗi sản phẩm bạn tạo ra, mỗi đồng lương bạn nhận được... 
            có phải là sự trao đổi công bằng?
          </p>
        </motion.div>

        {/* Marx Quotes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] rounded-lg p-6 text-left">
            <p className="text-white/90 italic mb-2">
              "Tư bản là lao động chết, nó như ma cà rồng, chỉ sống được bằng cách hút máu lao động sống, 
              và càng sống càng nhiều máu nó hút."
            </p>
            <p className="text-[#D4AF37] text-sm">— Karl Marx, Das Kapital</p>
          </div>

          <div className="bg-white/5 border-l-4 border-white/30 rounded-lg p-6 text-left">
            <p className="text-white/90 italic mb-2">
              "Những gì họ sản xuất không thuộc về họ, những gì họ cần lại không thể sản xuất."
            </p>
            <p className="text-white/60 text-sm">— Karl Marx</p>
          </div>

          <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] rounded-lg p-6 text-left">
            <p className="text-white/90 italic mb-2">
              "Người công nhân trở nên nghèo hơn khi họ tạo ra nhiều của cải hơn."
            </p>
            <p className="text-[#D4AF37] text-sm">— Karl Marx, Economic and Philosophic Manuscripts</p>
          </div>
        </motion.div>

        {/* Symbolic image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12"
        >
          <div className="relative overflow-hidden rounded-lg border-2 border-[#D4AF37]/50">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc2MDk0MDA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Industrial machinery"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex items-end justify-center p-8">
              <div className="text-center">
                <p className="text-[#D4AF37] mb-2">Máy móc hay con người?</p>
                <p className="text-white/80 text-sm">
                  Trong hệ thống tư bản, con người trở thành phần phụ của máy móc, 
                  chứ không phải máy móc phục vụ con người
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-12 pt-8 border-t border-[#D4AF37]/30"
        >
          <p className="text-white/60 text-sm">
            Đề tài: Lý thuyết Mác – Lênin, Chương 3: Giá trị thặng dư
          </p>
          <p className="text-[#D4AF37] text-sm mt-2">
            "Hiểu để thức tỉnh, thức tỉnh để thay đổi"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
