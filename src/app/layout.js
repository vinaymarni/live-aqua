import "./globals.css";
import Layout from "./primary/layout";

export const metadata = {
  title: "Live Aquarium | Quality Fish, Plants & Aquarium Accessories",
  description: "Shop the best selection of aquarium accessories, including vibrant fish, underwater plants, and decorative items to create your perfect aquatic environment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
