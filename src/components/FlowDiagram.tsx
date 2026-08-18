import { Fragment } from "react";
import type { LucideIcon } from "lucide-react";

interface FlowDiagramProps {
  nodes: string[];
  /** Optional icon per node (same length as nodes). */
  icons?: (LucideIcon | null)[];
  direction?: "responsive" | "horizontal" | "vertical";
  className?: string;
}

interface FlowNodeProps {
  label: string;
  icon?: LucideIcon | null;
  /** Flexible nodes shrink and wrap to fit narrow containers. */
  flexible?: boolean;
}

function FlowNode({ label, icon, flexible = false }: FlowNodeProps) {
  const Icon = icon;
  return (
    <div
      className={
        flexible
          ? "flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl border border-line bg-card/90 px-2 py-1.5 text-center sm:gap-2 sm:px-2.5 sm:py-2"
          : "flex items-center gap-2 rounded-xl border border-line bg-card/90 px-3 py-2 sm:gap-2.5 sm:px-3.5 sm:py-2.5"
      }
    >
      {Icon && (
        <span
          className={`grid shrink-0 place-items-center rounded-lg bg-accent/10 text-accent ${
            flexible ? "size-5 sm:size-6" : "size-6 sm:size-7"
          }`}
        >
          <Icon
            className={flexible ? "size-3 sm:size-3.5" : "size-3.5 sm:size-4"}
            aria-hidden="true"
          />
        </span>
      )}
      <span
        className={`min-w-0 leading-tight text-frost/90 ${
          flexible ? "text-[10px] sm:text-xs" : "text-[11px] sm:text-[13px]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/**
 * Visualizes a data pipeline as connected nodes with animated flow dots,
 * representing data moving between systems.
 *
 * The horizontal layout only kicks in at lg+ where there is room to breathe;
 * below that the flow stacks vertically so it can never overflow its
 * container. In horizontal mode nodes flex and wrap instead of overflowing.
 */
export default function FlowDiagram({
  nodes,
  icons,
  direction = "responsive",
  className = "",
}: FlowDiagramProps) {
  const horizontal = direction === "responsive" || direction === "horizontal";
  const vertical = direction === "responsive" || direction === "vertical";

  return (
    <div className={className}>
      {/* Horizontal layout (desktop) */}
      {horizontal && (
        <div
          className={`items-center ${
            direction === "responsive" ? "hidden lg:flex" : "flex"
          }`}
        >
          {nodes.map((node, i) => (
            <Fragment key={i}>
              <FlowNode label={node} icon={icons?.[i]} flexible />
              {i < nodes.length - 1 && (
                <div className="connector-x relative mx-1 h-px w-6 shrink-0 bg-gradient-to-r from-line via-accent/40 to-line sm:mx-1.5 sm:w-8">
                  <span
                    className="flow-dot"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      )}

      {/* Vertical layout (mobile / tablet / narrow containers) */}
      {vertical && (
        <div
          className={`flex-col items-stretch ${
            direction === "responsive" ? "lg:hidden flex" : "flex"
          }`}
        >
          {nodes.map((node, i) => (
            <Fragment key={i}>
              <FlowNode label={node} icon={icons?.[i]} />
              {i < nodes.length - 1 && (
                <div className="connector-y relative mx-auto h-6 bg-gradient-to-b from-line via-accent/40 to-line sm:h-8" style={{ width: "1px" }}>
                  <span
                    className="flow-dot"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
