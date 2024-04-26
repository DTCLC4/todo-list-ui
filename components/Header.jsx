// import component ThemeToggler
import ThemeToggler from "./ThemeToggler";
// Định nghĩa một functional component có tên là Header. Functional component này không nhận bất kỳ đối số nào và trả về một phần tử JSX.
const Header = () => {
  //trả về một phần tử <header> chứa một instance của component ThemeToggler.
  return (
    <header>
      <ThemeToggler />
    </header>
  );
};

export default Header;
