/**
 * Đây là một chỉ thị đặc biệt cho Next.js, gọi là "use client".
 * Điều này cho biết rằng mã này chỉ được thực thi trên phía client (trình duyệt), không phải trên server.
 */
"use client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
// Import hook useTheme từ thư viện next-themes. Hook này cung cấp cho chúng ta trạng thái và phương thức để quản lý chủ đề của ứng dụng.
import { useTheme } from "next-themes";
// Sử dụng hook useTheme để lấy trạng thái hiện tại của chủ đề (theme) và phương thức để thiết lập chủ đề mới (setTheme).
const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {/* Sử dụng component Button và thiết lập sự kiện onClick để khi click vào nút, chuyển đổi giữa chủ đề sáng và chủ đề tối bằng cách gọi phương thức setTheme. */}
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100  transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ThemeToggler;


//Nhiệm vụ của ThemeToggler là hiển thị một nút (button) cho phép người dùng chuyển đổi giữa chủ đề sáng và chủ đề tối của trang web
