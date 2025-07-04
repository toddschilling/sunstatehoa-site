export const metadata = {
  title: "SUNSTATE HOA",
  description: "Florida HOA Website Compliance Made Easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
