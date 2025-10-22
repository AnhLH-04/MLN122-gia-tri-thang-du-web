import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { TrendingUp, Building2, ShoppingCart, CreditCard, Home } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Section4Image from '../assets/Section4.png';

export function Section4() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0f1e1e] to-[#1a1a2e] py-20 px-4 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMHRyYWRpbmd8ZW58MXx8fHwxNzYwOTQxNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Stock market"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={isInView ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <TrendingUp size={80} className="text-[#D4AF37]" />
          </motion.div>
          <h2
            className="text-4xl md:text-5xl text-[#D4AF37] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Sự lan tỏa của bí mật
          </h2>
          <p className="text-xl text-white/80">Các hình thức biểu hiện của tư bản</p>
        </motion.div>

        {/* Accumulation and reproduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-gradient-to-r from-[#D4AF37]/20 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-8 mb-12"
        >
          <h3 className="text-[#D4AF37] mb-4">🔄 Tích lũy và tái sản xuất tư bản</h3>
          <div className="space-y-3 text-white/80">
            <p>• Chủ nghĩa tư bản đặc trưng bởi <span className="text-[#D4AF37]">tái sản xuất mở rộng</span></p>
            <p>• <span className="text-[#D4AF37]">Tích lũy tư bản</span> = tái sản xuất tư bản với quy mô ngày càng mở rộng</p>
            <p className="text-white/60 italic">→ Càng bóc lột nhiều, tư bản càng lớn mạnh</p>
          </div>
        </motion.div>

        {/* Profit explanation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-lg p-8 mb-12 text-center"
        >
          <h3 className="text-2xl text-[#D4AF37] mb-4">💰 Lợi nhuận (p)</h3>
          <p className="text-white/80 mb-4">
            Là <span className="text-[#D4AF37]">hình thức chuyển hóa của giá trị thặng dư</span>
          </p>
          <div className="bg-black/40 rounded-lg p-6 inline-block">
            <p className="text-white/60 text-sm mb-2">Tỷ suất lợi nhuận:</p>
            <div className="text-3xl text-[#D4AF37] mb-2">p' = (p / K) × 100%</div>
            <p className="text-white/60 text-sm">trong đó K = c + v (toàn bộ tư bản ứng trước)</p>
          </div>
        </motion.div>

        {/* Forms of surplus value */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h3 className="text-[#D4AF37] text-center mb-8">🎭 Các hình thức khác của giá trị thặng dư</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Building2 size={30} className="text-[#D4AF37]" />
                <h4 className="text-white">Lợi nhuận bình quân</h4>
              </div>
              <p className="text-white/70 text-sm">
                Hình thành từ cạnh tranh giữa các ngành, làm cho các ngành có cơ cấu tư bản khác nhau
                đều có tỷ suất lợi nhuận tương đương
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <ShoppingCart size={30} className="text-[#D4AF37]" />
                <h4 className="text-white">Lợi nhuận thương nghiệp</h4>
              </div>
              <p className="text-white/70 text-sm">
                Phần giá trị thặng dư nhà tư bản công nghiệp "nhường" cho nhà buôn
                để họ thực hiện chức năng lưu thông hàng hóa
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <CreditCard size={30} className="text-[#D4AF37]" />
                <h4 className="text-white">Lợi tức (z)</h4>
              </div>
              <p className="text-white/70 text-sm">
                Phần lợi nhuận bình quân trả cho người cho vay vốn (ngân hàng, nhà đầu tư tài chính)
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Home size={30} className="text-[#D4AF37]" />
                <h4 className="text-white">Địa tô tư bản chủ nghĩa</h4>
              </div>
              <p className="text-white/70 text-sm">
                Phần lợi nhuận siêu ngạch trả cho địa chủ do sử dụng đất đai có vị trí hoặc độ phì nhiêu tốt hơn
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Image illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-lg border-2 border-[#D4AF37]/50">
            <ImageWithFallback
              // src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydCUyMGdyYXBofGVufDF8fHx8MTc2MDkxNzQyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              src={Section4Image}
              alt="Financial charts"
              className="w-auto h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-[#D4AF37] mb-2">Thị trường tài chính - Sự lưu thông và phân phối giá trị thặng dư</h4>
                <p className="text-white/90 text-sm">
                  Lợi nhuận được phân chia dưới nhiều hình thức: công nghiệp, thương mại, tài chính, địa tô
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Flow visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-white/60 italic">
            "Giá trị thặng dư như một dòng sông, phân nhánh thành nhiều dòng chảy khác nhau,
            nhưng nguồn gốc đều từ lao động của công nhân"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
