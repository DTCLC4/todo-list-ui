"use client";

// import component ThemeToggler
import ThemeToggler from "./ThemeToggler";

import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

// Định nghĩa một functional component có tên là Header. Functional component này không nhận bất kỳ đối số nào và trả về một phần tử JSX.
const Header = () => {
  //trả về một phần tử <header> chứa một instance của component ThemeToggler.
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav containerStyles="hidden xl:flex gap-x-8 items-center" />
            <ThemeToggler />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

/**
 * sm: breakpoint cho các thiết bị có kích thước màn hình nhỏ, như điện thoại di động (small). Thường xác định từ 640px đến 767px.
 * md: breakpoint cho các thiết bị có kích thước màn hình trung bình, như máy tính bảng (medium). Thường xác định từ 768px đến 1023px.
 * lg: breakpoint cho các thiết bị có kích thước màn hình lớn, như laptop (large). Thường xác định từ 1024px đến 1279px.
 * xl: breakpoint cho các thiết bị có kích thước màn hình rất lớn, như máy tính để bàn (extra large). Thường xác định từ 1280px trở lên.
 */
