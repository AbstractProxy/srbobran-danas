import { mapFooterMenu } from "@/utills/items_mapping/items_mapping";

export default function FooterList({ data, classForUl, classForLinks }) {
  return (
    <div className="mt-6 space-y-4">
      {mapFooterMenu(data, classForUl, classForLinks)}
    </div>
  );
}
