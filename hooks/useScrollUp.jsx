import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";

const useScrollUp = () => {
  /**
   * Dòng 10: Sử dụng hook useState để tạo state isVisible, ban đầu được đặt là true.
   * Dòng 12-24: Sử dụng hook useEffect để thực hiện các side effects.
   * Dòng 13: Định nghĩa hàm handleScroll để xử lý sự kiện scroll của window.
   * Dòng 14-17: Lấy vị trí scroll hiện tại (currentScrollPos), và xác định xem nút cuộn lên có nên hiển thị hay không dựa trên vị trí của scroll. Trong trường hợp này, nút sẽ hiển thị khi scroll xuống dưới một nửa chiều cao của trang (window.innerHeight / 2).
   * Dòng 19-21: Thêm sự kiện lắng nghe scroll vào window, gọi hàm handleScroll.
   * Dòng 23-25: Loại bỏ sự kiện lắng nghe scroll khi component unmounts để tránh memory leaks.
   */
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = currentScrollPos > window.innerHeight / 2; // Hiển thị nút khi cuộn xuống dưới một nửa chiều cao của trang
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  /**
   * Định nghĩa hàm scrollToTop, được gọi khi người dùng click vào nút cuộn lên.
   * Hàm này sử dụng window.scrollTo() để cuộn trang lên đầu với hiệu ứng mượt (behavior: "smooth").
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  /**
   *  Trả về một button chỉ khi isVisible là true. Button này có class và sự kiện onClick được định nghĩa để cuộn trang lên đầu.
   *  Nút này sẽ được đặt ở góc dưới bên phải của trang và có hiệu ứng hiển thị mượt.
   */
  return isVisible ? (
    <Button
      className="fixed bottom-4 right-4 z-50 transition-opacity duration-500 opacity-100"
      onClick={scrollToTop}
    >
      <ArrowUpIcon />
    </Button>
  ) : null;
};

export default useScrollUp;

//tạo ra một custom hook có tên là useScrollUp, mục đích là để hiển thị một nút cuộn lên khi người dùng cuộn trang xuống một khoảng cụ thể
