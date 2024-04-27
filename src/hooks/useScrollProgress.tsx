import { useState, useEffect } from "react";

const useScrollProgress = (): number => {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const progress = (currentProgress / scrollHeight) * 100;
        setCompletion(Number(progress.toFixed(2))); // Chuyển đổi chuỗi thành số
      }
    };

    // Add event listener
    window.addEventListener("scroll", updateScrollCompletion);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return completion;
};

export default useScrollProgress;
