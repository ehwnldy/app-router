import Header from "./component/head";
import NavBar from "./component/navBar";
import { ThemeToggleButton } from "./component/ThemeToggleButton";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          <NavBar />
          <main>{children}</main>
          <ThemeToggleButton />
        </ThemeProvider>
      </body>
    </html>
  );
}