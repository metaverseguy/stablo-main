import { cx } from "@/utils/all";

export default function Label(props) {
  const margin = props.nomargin;

  return (
    <span
      className={cx(
        "inline-block text-xs font-medium uppercase tracking-wider ",
        !margin && " mt-5",
        "text-blue-600"
      )}>
      {props.children}
    </span>
  );
}
