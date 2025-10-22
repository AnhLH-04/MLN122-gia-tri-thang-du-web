import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Factory, Zap, TrendingUp, Clock, Gauge } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Section3Image from '../assets/Section3.png';

export function Section3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#2c1810] to-black py-20 px-4 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1663841365335-8acab127bf68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYwOTUyOTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Industrial factory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85" />
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
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Factory size={80} className="text-[#D4AF37]" />
          </motion.div>
          <h2
            className="text-4xl md:text-5xl text-[#D4AF37] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Quy trình sản xuất và khai thác
          </h2>
          <p className="text-xl text-white/80">Giá trị thặng dư (m)</p>
        </motion.div>

        {/* Main definition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-gradient-to-r from-red-900/30 to-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-lg p-8 mb-12 text-center"
        >
          <Zap size={50} className="text-[#D4AF37] mx-auto mb-4" />
          <h3 className="text-2xl text-[#D4AF37] mb-4">Giá trị thặng dư (m)</h3>
          <p className="text-white/90 text-lg mb-2">
            Phần giá trị <span className="text-red-400">dôi ra ngoài giá trị sức lao động</span> do công nhân tạo ra
            nhưng bị nhà tư bản chiếm đoạt
          </p>
          <p className="text-[#D4AF37]">
            Bản chất: <span className="text-white">Lao động không công của công nhân</span>
          </p>
        </motion.div>

        {/* Capital types */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-gray-500 rounded-lg p-6"
          >
            <h3 className="text-gray-400 mb-4">⚙️ Tư bản bất biến (c)</h3>
            <p className="text-white/80 mb-3">Phần giá trị tư liệu sản xuất</p>
            <div className="bg-gray-900/50 rounded p-3">
              <p className="text-gray-400 text-sm">→ Không tạo ra giá trị mới</p>
              <p className="text-white/60 text-sm">Ví dụ: máy móc, nhà xưởng, nguyên liệu</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-lg p-6"
          >
            <h3 className="text-[#D4AF37] mb-4">💪 Tư bản khả biến (v)</h3>
            <p className="text-white/80 mb-3">Phần giá trị sức lao động</p>
            <div className="bg-[#D4AF37]/20 rounded p-3">
              <p className="text-[#D4AF37]">→ Nguồn gốc sinh ra giá trị mới</p>
              <p className="text-white/80 text-sm">Ví dụ: tiền công trả cho công nhân</p>
            </div>
          </motion.div>
        </div>

        {/* Measurement metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg p-8 mb-12"
        >
          <h3 className="text-[#D4AF37] mb-6 text-center">📊 Đo lường sự bóc lột</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 rounded-lg p-6 text-center">
              <Gauge size={40} className="text-[#D4AF37] mx-auto mb-3" />
              <h4 className="text-white mb-2">Tỷ suất giá trị thặng dư</h4>
              <div className="text-2xl text-[#D4AF37] mb-2">m' = (m / v) × 100%</div>
              <p className="text-white/60 text-sm">Phản ánh trình độ bóc lột</p>
            </div>
            <div className="bg-black/40 rounded-lg p-6 text-center">
              <TrendingUp size={40} className="text-[#D4AF37] mx-auto mb-3" />
              <h4 className="text-white mb-2">Khối lượng giá trị thặng dư</h4>
              <div className="text-2xl text-[#D4AF37] mb-2">M = m × số công nhân</div>
              <p className="text-white/60 text-sm">Phản ánh quy mô bóc lột</p>
            </div>
          </div>
        </motion.div>

        {/* Methods of exploitation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <h3 className="text-[#D4AF37] text-center mb-8">🔄 Các phương pháp sản xuất giá trị thặng dư</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6">
              <Clock size={40} className="text-red-400 mb-4" />
              <h4 className="text-red-400 mb-3">Tuyệt đối</h4>
              <p className="text-white/70 text-sm">Kéo dài thời gian lao động, tăng cường độ làm việc</p>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-6">
              <Zap size={40} className="text-blue-400 mb-4" />
              <h4 className="text-blue-400 mb-3">Tương đối</h4>
              <p className="text-white/70 text-sm">Tăng năng suất xã hội, rút ngắn thời gian lao động tất yếu</p>
            </div>
            <div className="bg-[#D4AF37]/20 border border-[#D4AF37]/50 rounded-lg p-6">
              <TrendingUp size={40} className="text-[#D4AF37] mb-4" />
              <h4 className="text-[#D4AF37] mb-3">Siêu ngạch</h4>
              <p className="text-white/70 text-sm">Giá trị cá biệt thấp hơn giá trị xã hội trung bình</p>
            </div>
          </div>
        </motion.div>

        {/* Image illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-lg border-2 border-[#D4AF37]/50">
            <ImageWithFallback
              // src="https://images.unsplash.com/photo-1729843420196-1ff32bb39db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NlbWJseSUyMGxpbmUlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2MTAyODAxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              src={Section3Image}
              alt="Assembly line manufacturing"
              className="w-auto h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
              <div>
                <h4 className="text-[#D4AF37] mb-2">Dây chuyền sản xuất - Nơi giá trị thặng dư được tạo ra</h4>
                <p className="text-white/90 text-sm">
                  Công nhân làm việc nhiều giờ hơn so với giá trị sức lao động họ được trả
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
