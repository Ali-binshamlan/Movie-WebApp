import { ReduxProvider } from "../Provider";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-y-hidden">
      <body
      >
        <ReduxProvider>{children}</ReduxProvider>
        <div className="mt-20"></div>
      </body>
    </html>
  );
}
