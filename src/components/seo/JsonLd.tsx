import { buildJsonLdGraph } from "@/lib/seo";

export function JsonLd() {
  const graph = buildJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
