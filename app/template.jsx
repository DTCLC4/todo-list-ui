"use client";

import { motion } from "framer-motion";
//hooks
import useScrollProgress from "@/hooks/useScrollProgress";
import useScrollUp from "@/hooks/useScrollUp"; // Đường dẫn tới file useScrollUp.js

//variants
/**
 * Định nghĩa một object variants chứa các biến thể của animation.
 * Trong trường hợp này, có hai biến thể: hidden và enter, được sử dụng để thay đổi opacity của phần tử.
 */
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

/**
 * Dòng 19-31: Định nghĩa component Template.
 * Dòng 20-26: Sử dụng motion.main để bao bọc nội dung chính của ứng dụng với animation. variants được sử dụng để xác định các biến thể của animation, initial và animate để thiết lập trạng thái ban đầu và trạng thái hiện tại của animation, transition để thiết lập hiệu ứng chuyển động của animation.
 * Dòng 29-30: Sử dụng useScrollUp() để hiển thị nút cuộn lên khi cần thiết.
 * Dòng 31: Sử dụng một span để tạo thanh tiến độ cuộn trang, sử dụng giá trị của completion (trả về từ hook useScrollProgress) để điều chỉnh vị trí và chiều dài của thanh tiến độ.
 */
const Template = ({ children }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{
          type: "linear",
          delay: 0.2,
          duration: 0.4,
        }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      <div className="fixed bottom-4 right-4 z-50">{useScrollUp()}</div>
      <div className="h-[4000px]"></div>
    </>
  );
};

export default Template;
