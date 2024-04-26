import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  /**
   * Định nghĩa một state completion bằng cách sử dụng hook useState, ban đầu được đặt là 0. State này sẽ lưu trữ tiến độ cuộn trang của người dùng.
   */
  const [completion, setCompletion] = useState(0);
  /**
   * Dòng 8-19: Sử dụng hook useEffect để thực hiện các side effects khi component được render hoặc update.
   * Dòng 9-15: Định nghĩa hàm updateScrollCompletion() để cập nhật giá trị của state completion dựa trên vị trí cuộn của trang.
   * window.scrollY trả về vị trí hiện tại của thanh cuộn trang.
   * document.body.scrollHeight - window.innerHeight tính toán chiều cao còn lại cần cuộn trang để đến cuối trang.
   * Nếu scrollHeight khác 0 (để tránh chia cho 0), thì tính toán tiến độ cuộn trang và cập nhật giá trị của state completion.
   * Dòng 17-18: Thêm sự kiện lắng nghe cuộn trang vào window, gọi hàm updateScrollCompletion.
   * Dòng 19: Loại bỏ sự kiện lắng nghe cuộn trang khi component bị unmount để tránh memory leaks.
   */
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    //event
    window.addEventListener("scroll", updateScrollCompletion);
    //clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);
  // Trả về giá trị của state completion, là tiến độ cuộn trang của người dùng.
  return completion;
};

export default useScrollProgress;

// định nghĩa một custom hook có tên là useScrollProgress(), mục đích của hook này là để tính toán tiến độ cuộn trang của người dùng
