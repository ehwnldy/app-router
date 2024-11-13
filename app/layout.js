import Header from "./component/head";
import NavBar from "./component/navBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
        <Header/>
        <NavBar/>
        <main>{children}</main>
      </body>
    </html>
  );
}