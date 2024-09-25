export default function Error({ text, error }) {
  console.log(`Error fetching ${error}.`);
  return <div className="text-red-600 font-bold">Error fetching {text}</div>;
}
