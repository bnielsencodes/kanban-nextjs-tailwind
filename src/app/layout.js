import "./styles/globals.css";

export const metadata = {
  title: "Kanban | Brandon Nielsen",
  description: "Kanban, a task manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
