import { motion } from 'motion/react';
import { Sparkles, Bot, Code, FileText, CheckCircle2, AlertCircle, Lightbulb, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AIUsage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Header */}
            <header className="top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#D4AF37]/30">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors">
                        <span className="text-xl">← Quay lại</span>
                    </Link>
                    <h1 className="text-2xl text-[#D4AF37] font-semibold flex items-center gap-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        <Sparkles className="text-[#D4AF37]" />
                        Báo cáo sử dụng AI
                    </h1>
                </div>
            </header>

            {/* Content */}
            <main className="pt-24 pb-16 px-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="max-w-5xl mx-auto">

                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="bg-gradient-to-r from-gray-900/80 to-black border-2 border-[#D4AF37]/50 rounded-lg p-8">
                            <h2 className="text-3xl text-[#D4AF37] mb-4 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                                <Bot size={32} />
                                Tổng quan sử dụng AI trong dự án
                            </h2>
                            <p className="text-white/80 text-lg leading-relaxed mb-4">
                                Website "Giá trị thặng dư - Lý thuyết Marx" được phát triển với sự hỗ trợ của AI,
                                nhưng <span className="text-red-400 font-semibold">không để AI làm thay hoàn toàn</span>.
                            </p>
                            <div className="bg-black/40 rounded p-4 border-l-4 border-[#D4AF37]">
                                <p className="text-white/70">
                                    <strong className="text-[#D4AF37]">Công cụ sử dụng:</strong> GitHub Copilot, Claude AI, AI Luma Dream Machine<br />
                                    <strong className="text-[#D4AF37]">Thời gian:</strong> Tháng 10/2025<br />
                                    <strong className="text-[#D4AF37]">Mục đích:</strong> Hỗ trợ code React, animation, styling, tối ưu UX, tạo hình ảnh, video
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* AI Tools */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <div className="bg-gray-900/50 border border-[#D4AF37]/30 rounded-lg p-8">
                            <h3 className="text-2xl text-[#D4AF37] mb-6 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                                <Code size={28} />
                                4.1. Công cụ AI và mục đích sử dụng
                            </h3>

                            <div className="grid md:grid-cols-4 gap-6">
                                <div className="bg-black/40 rounded-lg p-6 border border-[#D4AF37]/20">
                                    <h4 className="text-[#D4AF37] font-semibold mb-3">🤖 GitHub Copilot</h4>
                                    <ul className="space-y-2 text-white/70 text-sm">
                                        <li>• Auto-complete code React/TypeScript</li>
                                        <li>• Gợi ý import components</li>
                                        <li>• Tạo boilerplate nhanh</li>
                                    </ul>
                                </div>

                                <div className="bg-black/40 rounded-lg p-6 border border-[#D4AF37]/20">
                                    <h4 className="text-[#D4AF37] font-semibold mb-3">💬 Claude AI</h4>
                                    <ul className="space-y-2 text-white/70 text-sm">
                                        <li>• Tư vấn kiến trúc component</li>
                                        <li>• Debug lỗi phức tạp</li>
                                        <li>• Giải thích khái niệm Marx</li>
                                    </ul>
                                </div>

                                <div className="bg-black/40 rounded-lg p-6 border border-[#D4AF37]/20">
                                    <h4 className="text-[#D4AF37] font-semibold mb-3">🌐 Unsplash API</h4>
                                    <ul className="space-y-2 text-white/70 text-sm">
                                        <li>• Tìm hình ảnh minh họa</li>
                                        <li>• Background cho sections</li>
                                        <li>• Free stock photos</li>
                                    </ul>
                                </div>

                                <div className="bg-black/40 rounded-lg p-6 border border-[#D4AF37]/20">
                                    <h4 className="text-[#D4AF37] font-semibold mb-3">🎨 Luma Dream Machine</h4>
                                    <ul className="space-y-2 text-white/70 text-sm">
                                        <li>• Sinh hình / video / scenes</li>
                                        <li>• Dùng reference image hoặc short video để điều hướng phong cách</li>
                                        <li>• AR demo clips</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Prompts and Results */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-12"
                    >
                        <div className="bg-gray-900/50 border border-red-500/30 rounded-lg p-8">
                            <h3 className="text-2xl text-red-400 mb-6 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                                <MessageSquare size={28} />
                                4.2. Prompt chính và kết quả
                            </h3>

                            <div className="space-y-6">

                                {/* Example 1 */}
                                <div className="bg-black/40 rounded-lg p-6 border-l-4 border-[#D4AF37]">
                                    <h4 className="text-[#D4AF37] font-semibold mb-3">📌 Ví dụ 1: Tạo Section Hero</h4>
                                    <div className="space-y-3">
                                        <div className="bg-gray-800/50 rounded p-4">
                                            <p className="text-white/60 text-xs mb-1">PROMPT:</p>
                                            <p className="text-white/90 text-sm italic">
                                                "Tạo Hero section với animation text reveal, background dark,
                                                title màu vàng gold #D4AF37, có icon tiền xu, font Playfair Display"
                                            </p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded p-4">
                                            <p className="text-green-400 text-xs mb-1">KẾT QUẢ AI:</p>
                                            <p className="text-white/70 text-sm">
                                                ✓ Code component React với motion animation<br />
                                                ✓ Styling gradient background đen<br />
                                                ✓ Typography setup đúng font
                                            </p>
                                        </div>
                                        <div className="bg-red-900/20 rounded p-4 border border-red-500/30">
                                            <p className="text-red-400 text-xs mb-1">CHỈNH SỬA CỦA SINH VIÊN:</p>
                                            <p className="text-white/70 text-sm">
                                                → Điều chỉnh timing animation cho mượt hơn<br />
                                                → Thêm responsive breakpoints cho mobile<br />
                                                → Sửa nội dung tiếng Việt cho phù hợp ngữ cảnh
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Example 2 */}
                                <div className="bg-black/40 rounded-lg p-6 border-l-4 border-red-500">
                                    <h4 className="text-red-400 font-semibold mb-3">📌 Ví dụ 2: Khái niệm Bái vật giáo hàng hóa</h4>
                                    <div className="space-y-3">
                                        <div className="bg-gray-800/50 rounded p-4">
                                            <p className="text-white/60 text-xs mb-1">PROMPT:</p>
                                            <p className="text-white/90 text-sm italic">
                                                "Giải thích khái niệm 'commodity fetishism' theo Marx,
                                                cho ví dụ thực tế ở Việt Nam về giới trẻ sùng bái hàng hiệu"
                                            </p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded p-4">
                                            <p className="text-green-400 text-xs mb-1">KẾT QUẢ AI:</p>
                                            <p className="text-white/70 text-sm">
                                                "Commodity fetishism is when people worship brands and see material goods as status symbols..."
                                            </p>
                                        </div>
                                        <div className="bg-red-900/20 rounded p-4 border border-red-500/30">
                                            <p className="text-red-400 text-xs mb-1">CHỈNH SỬA CỦA SINH VIÊN:</p>
                                            <p className="text-white/70 text-sm">
                                                ✓ Kiểm chứng với giáo trình LLCT về định nghĩa chính xác<br />
                                                ✓ Viết lại hoàn toàn bằng tiếng Việt học thuật<br />
                                                ✓ Thêm ví dụ: "Giới trẻ sùng bái hàng hiệu, mạng xã hội biến giá trị vật chất thành thước đo con người"
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Example 3 - Luma Dream Machine */}
                                <div className="bg-black/40 rounded-lg p-6 border-l-4 border-[#D4AF37]">
                                    <h4 className="text-[#D4AF37] font-semibold mb-3">📌 Ví dụ 3: Tạo video minh họa với Luma Dream Machine</h4>
                                    <div className="space-y-3">
                                        <div className="bg-gray-800/50 rounded p-4">
                                            <p className="text-white/60 text-xs mb-1">PROMPT:</p>
                                            <p className="text-white/90 text-sm italic">
                                                "Cinematic shot of factory workers on assembly line, warm golden lighting,
                                                black and gold color palette, industrial atmosphere, depth of field,
                                                high detail, realistic motion, 16:9 aspect ratio"
                                            </p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded p-4">
                                            <p className="text-white/60 text-xs mb-1">INPUT:</p>
                                            <p className="text-white/70 text-sm">
                                                • Reference image: Ảnh nhà máy công nghiệp với ánh sáng vàng<br />
                                                • Duration: 5 giây<br />
                                                • Style: Cinematic, realistic
                                            </p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded p-4">
                                            <p className="text-green-400 text-xs mb-1">KẾT QUẢ AI:</p>
                                            <p className="text-white/70 text-sm">
                                                ✓ Video clip 5 giây với chuyển động mượt mà<br />
                                                ✓ Màu sắc đen-vàng phù hợp theme website<br />
                                                ✓ Chất lượng HD, cinematic look<br />
                                                ✓ Exported as MP4 file (Section4Video.mp4)
                                            </p>
                                        </div>
                                        <div className="bg-red-900/20 rounded p-4 border border-red-500/30">
                                            <p className="text-red-400 text-xs mb-1">CHỈNH SỬA CỦA SINH VIÊN:</p>
                                            <p className="text-white/70 text-sm">
                                                → Crop video để loại bỏ phần đầu/cuối không cần thiết<br />
                                                → Color grading bằng DaVinci Resolve để tăng độ tương phản<br />
                                                → Thêm subtle vignette effect cho cinematic hơn<br />
                                                → Compress file size để tối ưu loading time trên web<br />
                                                → Import vào Section4.tsx với HTML5 video element
                                            </p>
                                        </div>
                                        <div className="bg-blue-900/20 rounded p-4 border border-blue-500/30 mt-3">
                                            <p className="text-blue-400 text-xs mb-1">📍 SỬ DỤNG TRONG DỰ ÁN:</p>
                                            <p className="text-white/70 text-sm">
                                                Video được sử dụng trong <strong>Section 4</strong> để minh họa cho phần
                                                "Sự lan tỏa của bí mật - Các hình thức biểu hiện của tư bản".
                                                Video tạo cảm giác sống động, giúp người xem hiểu rõ hơn về môi trường
                                                công nghiệp và quá trình sản xuất giá trị thặng dư.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Verification */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-12"
                    >
                        <div className="bg-gray-900/50 border border-[#D4AF37]/30 rounded-lg p-8">
                            <h3 className="text-2xl text-[#D4AF37] mb-6 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                                <CheckCircle2 size={28} />
                                4.3. Kiểm chứng nội dung học thuật
                            </h3>

                            <div className="bg-black/40 rounded-lg p-6 mb-6">
                                <p className="text-white/80 mb-4">
                                    <strong className="text-[#D4AF37]">Cam kết:</strong> Mọi khái niệm lý thuyết Marx đều được kiểm chứng với giáo trình chính thống.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-green-900/20 border border-green-500/30 rounded p-4">
                                        <h4 className="text-green-400 mb-2 flex items-center gap-2">
                                            <CheckCircle2 size={18} />
                                            Nguồn tham khảo chính thống
                                        </h4>
                                        <ul className="text-white/70 text-sm space-y-1">
                                            <li>• Giáo trình LLCT trường Đại học</li>
                                            <li>• Tư bản - Karl Marx (bản dịch tiếng Việt)</li>
                                            <li>• Tài liệu giảng dạy của giảng viên</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-900/20 border border-red-500/30 rounded p-4">
                                        <h4 className="text-red-400 mb-2 flex items-center gap-2">
                                            <AlertCircle size={18} />
                                            Không chấp nhận
                                        </h4>
                                        <ul className="text-white/70 text-sm space-y-1">
                                            <li>• Định nghĩa AI sai lệch</li>
                                            <li>• Ví dụ không phù hợp ngữ cảnh VN</li>
                                            <li>• Nội dung không kiểm chứng nguồn</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] rounded p-6">
                                <h4 className="text-[#D4AF37] font-semibold mb-3">🎯 Quy trình kiểm chứng:</h4>
                                <ol className="space-y-2 text-white/80 text-sm">
                                    <li>1. AI sinh nội dung ban đầu (tiếng Anh hoặc tiếng Việt thô)</li>
                                    <li>2. Sinh viên đối chiếu với giáo trình LLCT</li>
                                    <li>3. Viết lại hoàn toàn bằng ngôn ngữ học thuật chính xác</li>
                                    <li>4. Thêm ví dụ thực tế Việt Nam (tự nghĩ ra hoặc tham khảo thực tế)</li>
                                    <li>5. Review lại toàn bộ nội dung trước khi publish</li>
                                </ol>
                            </div>
                        </div>
                    </motion.section>

                    {/* Creative Work */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-12"
                    >
                        <div className="bg-gray-900/50 border border-red-500/30 rounded-lg p-8">
                            <h3 className="text-2xl text-red-400 mb-6 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                                <Lightbulb size={28} />
                                4.4. Phần sáng tạo của sinh viên
                            </h3>

                            <div className="space-y-6">
                                <div className="bg-black/40 rounded-lg p-6">
                                    <h4 className="text-red-400 font-semibold mb-3">💡 AI không thể làm được:</h4>
                                    <ul className="space-y-3 text-white/80">
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#D4AF37] text-2xl">→</span>
                                            <span><strong>Ý tưởng tổng thể:</strong> Cách trình bày 5 sections, flow storytelling từ nguồn gốc → hậu quả</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#D4AF37] text-2xl">→</span>
                                            <span><strong>Chọn màu sắc:</strong> Đen + Vàng gold #D4AF37 + Đỏ (thể hiện chủ nghĩa Marx)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#D4AF37] text-2xl">→</span>
                                            <span><strong>Ví dụ Việt Nam hóa:</strong> Công nhân KCN, dân văn phòng burnout, giới trẻ sùng bái hàng hiệu</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#D4AF37] text-2xl">→</span>
                                            <span><strong>Debug và fix lỗi:</strong> Icons bị crop, responsive mobile, animation timing</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-[#D4AF37] text-2xl">→</span>
                                            <span><strong>UX decisions:</strong> Vị trí nút, navigation flow, scroll behavior</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-red-900/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-6">
                                    <h4 className="text-[#D4AF37] font-semibold mb-3">✅ Tỷ lệ ước tính:</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-white/80">AI hỗ trợ (code boilerplate, gợi ý)</span>
                                                <span className="text-[#D4AF37]">~40%</span>
                                            </div>
                                            <div className="w-full bg-gray-800 rounded-full h-2">
                                                <div className="bg-[#D4AF37] h-2 rounded-full" style={{ width: '40%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-white/80">Sinh viên tự làm (sáng tạo, chỉnh sửa, kiểm chứng)</span>
                                                <span className="text-red-400">~60%</span>
                                            </div>
                                            <div className="w-full bg-gray-800 rounded-full h-2">
                                                <div className="bg-red-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="text-center"
                    >
                        <div className="bg-black/60 border border-[#D4AF37]/30 rounded-lg p-6">
                            <p className="text-white/60 text-sm mb-2">
                                Báo cáo này được tạo để minh bạch quá trình sử dụng AI trong học tập
                            </p>
                            <p className="text-[#D4AF37] font-semibold">
                                © 2025 MLN122 - Giá trị thặng dư | Lý thuyết Marx
                            </p>
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}
