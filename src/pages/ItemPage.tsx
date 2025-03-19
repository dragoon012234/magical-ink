import { useParams } from "react-router";

import { Breadcrumb, ProduceTable, SectionTitle } from "../components";
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
      <div className='flex flex-col gap-4 justify-start items-stretch'>
        <SectionTitle title='Stat' />

        <SectionTitle title='Production chain' />
        <ProduceTable referenceResource={item} />
      </div>
    </PageLayout>
  );
}
