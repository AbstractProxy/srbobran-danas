export default function NotificationArticle({ children }) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between group relative mt-1">
      {children}
    </article>
  );
}
