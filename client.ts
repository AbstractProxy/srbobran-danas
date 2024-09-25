export default async function client(query, revalidateOption = {}) {
  const data = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
    next: revalidateOption,
  }).then((res) => res.json());

  return data;
}
