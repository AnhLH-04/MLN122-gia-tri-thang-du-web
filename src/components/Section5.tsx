import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ShoppingBag, Smartphone, Eye, UserX, Unlink, Instagram, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Section5_8Image from '../assets/Section5_8.png';
import Kaka from '../assets/Kaka.png';

export function Section5() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [showBrands, setShowBrands] = useState(false);

  // Trigger brand animation when in view
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowBrands(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-gray-900 to-gray-800 py-20 px-4 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1690883793939-f8cca2f28ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBob25lfGVufDF8fHx8MTc2MTAyNDA0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Social media"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/70 to-gray-800/80" />
      </div>

      {/* Darkening effect as you scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
        className="absolute inset-0 bg-black pointer-events-none z-10"
      />

      <div className="max-w-6xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Eye size={80} className="text-red-400" />
          </motion.div>
          <h2
            className="text-4xl md:text-5xl text-red-400 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Hậu quả xã hội và hình thái che dấu
          </h2>
          <p className="text-xl text-white/80">Khi con người mất đi chính mình</p>
        </motion.div>

        {/* Commodity Fetishism */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-lg p-8 mb-12 relative"
        >
          <h3 className="text-2xl text-purple-300 mb-4">🎭 Bái vật giáo hàng hóa</h3>
          <h4 className="text-white/80 mb-4 italic">(Commodity Fetishism)</h4>

          <p className="text-white/80 mb-4">
            Hiện tượng <span className="text-purple-300">vật phẩm hóa các quan hệ xã hội</span>:
            giá trị hàng hóa che giấu quan hệ sản xuất và bóc lột lao động thực tế.
          </p>

          <div className="bg-black/40 rounded-lg p-6 mb-6">
            <p className="text-white/90 mb-3">
              Con người chỉ thấy <span className="text-red-400">quan hệ giữa vật với vật (giá cả)</span> mà
              quên mất <span className="text-purple-300">quan hệ giữa người với người (lao động)</span>
            </p>
          </div>

          {/* Swirling brand icons with background image */}
          <div className="relative h-64 mb-6">
            {/* Background image */}
            <div className="absolute inset-0 z-0 rounded-lg overflow-hidden border-2 border-purple-500/50">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzaG9wcGluZyUyMGJhZ3MlMjBsdXh1cnl8ZW58MXx8fHwxNzYxMDI4MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Shopping brands and luxury items"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/50 to-purple-900/60" />
            </div>

            {/* Icons animation */}
            <div className="relative h-full z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <UserX size={50} className="text-gray-500" />
              </div>
              {showBrands && (
                <>
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 360) / 8;
                    const icons = [Smartphone, ShoppingBag, Instagram, Eye];
                    const Icon = icons[i % icons.length];
                    return (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{
                          x: '50%',
                          y: '50%',
                          scale: 0,
                        }}
                        animate={{
                          x: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 100}px)`,
                          y: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 100}px)`,
                          scale: 1,
                          rotate: 360,
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        <Icon size={30} className="text-purple-400" />
                      </motion.div>
                    );
                  })}
                </>
              )}
            </div>
          </div>

          <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
            <h4 className="text-purple-300 mb-2">📱 Ví dụ thực tế Việt Nam:</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Giới trẻ sùng bái hàng hiệu, điện thoại đắt tiền như biểu tượng địa vị</li>
              <li>• Mạng xã hội biến giá trị vật chất thành thước đo "giá trị con người"</li>
              <li>• Tôn sùng thương hiệu, đồng nhất bản thân với những gì mình sở hữu</li>
            </ul>
          </div>
        </motion.div>

        {/* Alienated Labor */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-red-500/50 rounded-lg p-8"
        >
          <h3 className="text-2xl text-red-400 mb-4">⚠️ Tha hóa lao động</h3>
          <h4 className="text-white/80 mb-6 italic">(Alienated Labor)</h4>

          <p className="text-white/80 mb-6">
            Người lao động bị <span className="text-red-400">tách rời, xa lạ</span> với chính lao động của mình
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500"
            >
              <Unlink size={30} className="text-red-400 mb-2" />
              <h4 className="text-red-400 mb-2">Tách rời khỏi sản phẩm</h4>
              <p className="text-white/70 text-sm">Sản phẩm không thuộc về người lao động</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500"
            >
              <AlertTriangle size={30} className="text-red-400 mb-2" />
              <h4 className="text-red-400 mb-2">Tách rời hoạt động lao động</h4>
              <p className="text-white/70 text-sm">Làm việc bị ép buộc, không còn niềm vui sáng tạo</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.0 }}
              className="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500"
            >
              <UserX size={30} className="text-red-400 mb-2" />
              <h4 className="text-red-400 mb-2">Tách rời bản chất con người</h4>
              <p className="text-white/70 text-sm">Đánh mất ý nghĩa sống, lao động chỉ là phương tiện</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.1 }}
              className="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500"
            >
              <Unlink size={30} className="text-red-400 mb-2" />
              <h4 className="text-red-400 mb-2">Tách rời quan hệ xã hội</h4>
              <p className="text-white/70 text-sm">Mất gắn kết, cạnh tranh, cô lập</p>
            </motion.div>
          </div>

          <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-400 mb-2">🏭 Ví dụ thực tế Việt Nam:</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>• Công nhân khu công nghiệp làm việc lặp lại, không kiểm soát quy trình</li>
              <li>• Dân văn phòng chịu áp lực KPI, làm việc máy móc, mất động lực sáng tạo</li>
              <li>• Cảm giác kiệt sức, burnout, không còn ý nghĩa trong công việc</li>
            </ul>
          </div>
        </motion.div>

        {/* Image illustrations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-lg border-2 border-purple-500/50">
            <ImageWithFallback
              // src="https://images.unsplash.com/photo-1593267891742-48ed9e51bb85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMHNob3BwaW5nfGVufDF8fHx8MTc2MTAyODAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              src={Kaka}
              alt="Luxury shopping"
              className="w-auto h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <h4 className="text-purple-300 mb-2">Bái vật giáo hàng hóa</h4>
                <p className="text-white/90 text-sm">
                  Con người tôn sùng thương hiệu, đồng nhất giá trị với vật sở hữu
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border-2 border-red-500/50">
            <ImageWithFallback
              // src="https://images.unsplash.com/photo-1669146894279-509f5de45390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJlZCUyMG9mZmljZSUyMHdvcmtlcnxlbnwxfHx8fDE3NjEwMjgwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              src={Section5_8Image}
              alt="Tired worker"
              className="w-auto h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <h4 className="text-red-400 mb-2">Tha hóa lao động</h4>
                <p className="text-white/90 text-sm">
                  Người lao động kiệt sức, mất đi ý nghĩa và niềm vui trong công việc
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
