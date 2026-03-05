export const metadata = {
  title: "FadReview",
  description: "Entrega profissional de serviços com fotos e relatório visual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
