export const metadata = {
  title: 'BLOKE PICK',
  description: 'Sports picks & insights',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
