/**
 * Power BI dashboard gallery.
 *
 * Real screenshots uploaded to public/dashboards/.
 */

export interface DashboardItem {
  id: string;
  name: string;
  industry: string;
  image: string;
  overview: string;
  capabilities: string[];
  tech: string[];
}

export const dashboards: DashboardItem[] = [
  {
    id: "ai-forecast-01",
    name: "AI Forecast & Anomaly Dashboard",
    industry: "AI / Analytics",
    image: "/dashboards/finance-performance.png",
    overview:
      "Analytics dashboard for forecast monitoring, anomaly detection, and KPI analysis.",
    capabilities: [
      "Forecast vs actual analysis",
      "Anomaly visualization",
      "Time-series analysis",
      "KPI monitoring",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "logistics-01",
    name: "Logistics and Fulfillment Dashboard",
    industry: "Logistics",
    image: "/dashboards/logistics-fulfillment.png",
    overview:
      "Power BI dashboard for monitoring logistics and fulfillment performance.",
    capabilities: [
      "KPI monitoring",
      "Trend analysis",
      "Cost / performance analysis",
      "Geographic analysis",
      "Interactive filtering",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "executive-overview-01",
    name: "Executive Overview Dashboard",
    industry: "Executive / Finance",
    image: "/dashboards/healthcare-operations.png",
    overview:
      "Executive dashboard providing a consolidated view of revenue, costs, profitability, and business performance.",
    capabilities: [
      "Executive KPIs",
      "Revenue / profit trends",
      "Industry analysis",
      "Geographic performance",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "marketing-01",
    name: "Marketing Funnel Dashboard",
    industry: "Marketing",
    image: "/dashboards/marketing-funnel.png",
    overview:
      "Power BI dashboard for monitoring marketing performance and funnel activity.",
    capabilities: [
      "Funnel analysis",
      "KPI monitoring",
      "Conversion trends",
      "Interactive filtering",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "operations-01",
    name: "Operations Monitoring Dashboard",
    industry: "Operations",
    image: "/dashboards/operations-monitoring.png",
    overview:
      "Operational analytics dashboard for monitoring production, costs, and performance against targets.",
    capabilities: [
      "Production KPIs",
      "Cost breakdown",
      "Actual vs target analysis",
      "Monthly performance trends",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
  {
    id: "ecommerce-01",
    name: "E-commerce Sales Dashboard",
    industry: "E-commerce",
    image: "/dashboards/ecommerce-sales.png",
    overview:
      "Power BI dashboard for monitoring e-commerce sales, workforce activity, and operational metrics.",
    capabilities: [
      "KPI monitoring",
      "Sales trends",
      "Workforce performance",
      "Target vs actual analysis",
    ],
    tech: ["Power BI", "DAX", "Data Modeling"],
  },
];
