import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { User, Key, Briefcase, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Section2Image from '../assets/Section2.png';

export function Section2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1a1a2e] to-[#16213e] py-20 px-4 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-15">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1596513057932-4ac7206d3152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwd29ya2VyJTIwaGFuZHN8ZW58MXx8fHwxNzYwOTg2MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Worker hands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={isInView ? { rotate: [0, 360], scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 2 }}
            className="inline-block mb-6"
          >
            <Key size={80} className="text-[#D4AF37]" />
          </motion.div>
          <h2
            className="text-4xl md:text-5xl text-[#D4AF37] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Chìa khóa mở khóa bí mật
          </h2>
          <p className="text-xl text-white/80">Hàng hóa sức lao động</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <User size={30} className="text-[#D4AF37]" />
              <h3 className="text-[#D4AF37]">Sức lao động là gì?</h3>
            </div>
            <p className="text-white/80 mb-4">
              Sức lao động là <span className="text-[#D4AF37]">toàn bộ năng lực thể chất và tinh thần</span> tồn tại
              trong con người, được vận dụng trong quá trình lao động.
            </p>
            <div className="bg-[#D4AF37]/10 rounded-lg p-4">
              <p className="text-white/70 text-sm">
                ⚠️ Phân biệt: <span className="text-[#D4AF37]">Lao động</span> là sự sử dụng <span className="text-[#D4AF37]">sức lao động</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase size={30} className="text-[#D4AF37]" />
              <h3 className="text-[#D4AF37]">Điều kiện hàng hóa hóa</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-[#D4AF37] flex-shrink-0">1.</span>
                <span>Người lao động <span className="text-[#D4AF37]">tự do về thân thể</span> – có quyền bán sức lao động</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <span className="text-[#D4AF37] flex-shrink-0">2.</span>
                <span>Người lao động <span className="text-[#D4AF37]">vô sản</span> – không có tư liệu sản xuất</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-r from-[#D4AF37]/20 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-8 mb-8"
        >
          <div className="flex items-start gap-4">
            <Heart size={40} className="text-[#D4AF37] flex-shrink-0" />
            <div>
              <h3 className="text-[#D4AF37] mb-4">Giá trị của sức lao động</h3>
              <p className="text-white/80 mb-4">
                Xác định bởi thời gian lao động xã hội cần thiết để{' '}
                <span className="text-[#D4AF37]">tái sản xuất sức lao động</span>
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Chi phí sinh hoạt hàng ngày</li>
                <li>• Chi phí nuôi dưỡng gia đình</li>
                <li>• Chi phí giáo dục và đào tạo</li>
                <li>• Yếu tố lịch sử và tinh thần</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Image illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8 max-w-2xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-lg border-2 border-[#D4AF37]/50 bg-black/40">
            <ImageWithFallback
              src={Section2Image}
              alt="Worker labor"
              className="w-full h-72 object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-4">
              <div>
                <h4 className="text-[#D4AF37] mb-2 font-semibold">Người lao động - Hàng hóa sống</h4>
                <p className="text-white/90 text-sm">
                  Sức lao động của người công nhân trở thành hàng hóa được mua bán trên thị trường
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-lg p-8 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h3 className="text-2xl text-[#D4AF37] mb-4">✨ Giá trị sử dụng đặc biệt</h3>
          </motion.div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Sức lao động là <span className="text-[#D4AF37]">hàng hóa đặc biệt</span> vì{' '}
            <span className="text-[#D4AF37]">nó có thể tạo ra giá trị mới lớn hơn giá trị bản thân nó</span>
          </p>
          <p className="text-xl text-[#D4AF37] mt-4">
            → Đây chính là <span className="text-white">nguồn gốc của giá trị thặng dư</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
