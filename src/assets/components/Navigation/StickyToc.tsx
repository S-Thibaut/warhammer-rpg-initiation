import "./StickyToc.css";

interface TocItem {
  id: string;
  label: string;
}

interface Props {
  items: TocItem[];
}

export default function StickyToc({ items }: Props) {
  return (
    <nav className="sticky-toc">
      <div className="toc-inner">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
