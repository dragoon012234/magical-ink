import { useParams } from "react-router";

import { Breadcrumb } from "../components";
import { PageLayout } from "../layouts/PageLayout";
import { findItem } from "../types";
import { EmptyPage } from "./EmptyPage";

export function ItemPage() {
  const params = useParams<"catorage" | "item">();
  const item = findItem(params.item, params.catorage);

  if (!item) {
    return <EmptyPage />;
  }

  const breadcrumb = <Breadcrumb items={[{ content: "Items", href: "/magical-ink/items" }, { content: item.name }]} />;

  return (
    <PageLayout title={breadcrumb}>
      <div>{item.name}</div>
    </PageLayout>
  );
}
