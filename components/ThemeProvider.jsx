"use client";
/*
 * import ThemeProvider từ thư viện next-themes và đặt tên alias là NextThemeProvider.
 * Thư viện next-themes cung cấp các công cụ để quản lý chủ đề (theme) trong ứng dụng Next.js.
 */
import { ThemeProvider as NextThemeProvider } from "next-themes";
/**
 * đây là một function component có tên là ThemeProvider.
 * nó nhận các props và truyền chúng xuống NextThemeProvider mà chúng ta đã import từ next-themes.
 */
export function ThemeProvider({ children, ...props }) {
  /*
   * trả về NextThemeProvider với tất cả các props được truyền vào từ component cha thông qua ...props.
   * Điều này cho phép chúng ta truyền các props tùy chỉnh cho ThemeProvider mà có thể được sử dụng trong NextThemeProvider.
   * children được truyền xuống để đảm bảo các thành phần bên trong ThemeProvider vẫn được render ra màn hình.
   */
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}


/**
 * Giải thích ...props:
 *  Là viết tắt của từ properties, là 1 object tích hợp trong react lưu trữ giá trị của các thuộc tính của thẻ và hoạt động tương tự như các thuộc tính HTML.
 *  Props cho phép chúng ta giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các components.
 */
