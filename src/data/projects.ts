/**
 * Project details.
 *
 * To add a new project, append an entry to the `projects` array below.
 * Screenshots can be attached via the `images` array — the first image
 * is used as the card thumbnail; additional images appear in the modal.
 */

export interface SolutionBlock {
  /** Optional sub-heading inside the solution */
  heading?: string;
  /** Paragraph text */
  text?: string;
  /** Bullet list */
  items?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  overview: string;
  problem: string;
  solution: SolutionBlock[];
  outcome: string[];
  tech: string[];
  /** Nodes of the architecture / flow diagram visual */
  flow: string[];
  /** Optional highlighted note (e.g. usage status, confidentiality) */
  callout?: string;
  /** Explicit key capabilities list (shown in modal) */
  capabilities?: string[];
  /** Project images — first is the card thumbnail, rest appear in modal */
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "aviation-weather-pipeline",
    title: "Aviation Weather Data Pipeline",
    category: "Data Engineering / Aviation",
    overview:
      "An automated ETL pipeline designed to process aviation and weather data and provide flight-specific weather information for aviation users.",
    problem:
      "Aviation users need timely weather information to understand conditions relevant to a specific flight. Processing and preparing weather data manually was inefficient, while information needed to be refreshed frequently across a large number of airports.",
    solution: [
      {
        text: "We built an automated Python-based ETL pipeline that gathers data from aviation weather data providers and weather APIs, transforms the data, and prepares relevant weather information for specific flights.",
      },
      {
        text: "When a flight is selected, the system can provide weather information from the departure side through the flight route to the landing destination.",
      },
      {
        heading: "Weather information includes",
        items: [
          "Clear and cloudy conditions",
          "Temperature",
          "Visibility",
          "Weather conditions along the flight route",
          "Departure-to-destination weather coverage",
        ],
      },
    ],
    outcome: [
      "Replaced manual weather data processing with an automated ETL pipeline.",
      "Supports weather data coverage across approximately 8,000 airports.",
      "Automatically refreshes data every 2–3 minutes.",
      "Currently in use by pilots for viewing weather conditions along flight routes.",
    ],
    tech: ["Python"],
    flow: [
      "Aviation Data Providers & Weather APIs",
      "Python ETL Pipeline",
      "Data Processing & Transformation",
      "Flight Weather System",
      "Pilots",
    ],
  },
  {
    id: "notam-caching-system",
    title: "NOTAM Data Caching System",
    category: "Data Engineering / Backend",
    overview:
      "A backend data caching system designed to efficiently manage NOTAM data from thousands of airports.",
    problem:
      "The system needed to work with NOTAM data covering more than 8,000 airports. Storing and repeatedly handling large amounts of data created unnecessary cloud storage overhead and increased infrastructure costs.",
    solution: [
      {
        text: "We developed a Python and Flask-based backend that fetches NOTAM data from an aviation information API.",
      },
      {
        text: "The service processes the data and implements a caching approach using Google Cloud Storage, reducing unnecessary repeated data handling and improving how cloud storage resources are utilized.",
      },
    ],
    outcome: [
      "A more efficient approach for managing large-scale aviation NOTAM data and reducing unnecessary cloud storage overhead.",
    ],
    tech: ["Python", "Flask", "lxml", "httpx", "Google Cloud Storage"],
    flow: [
      "Aviation NOTAM API",
      "Python / Flask Service",
      "Data Processing",
      "Cache Management",
      "Google Cloud Storage",
      "Application",
    ],
  },
  {
    id: "multi-source-etl-pipeline",
    title: "Automated Multi-Source ETL Pipeline",
    category: "Data Engineering / ETL",
    overview:
      "A fully automated ETL pipeline designed to replace manual and ad hoc data movement with a reliable scheduled workflow.",
    problem:
      "Data was coming from multiple operational sources, including APIs, PostgreSQL databases, and CSV files. The existing approach depended on manual exports and ad hoc scripts, causing delays of up to 24 hours and providing limited visibility into rejected or problematic records.",
    solution: [
      {
        text: "We built an automated data pipeline that collects customer, order, and product data from different sources, cleans and transforms it using business rules, removes duplicate and invalid records, and loads the clean data into a PostgreSQL data warehouse. The pipeline handles errors without stopping the entire process, updates existing data to prevent duplicates, supports daily scheduling and incremental updates, and provides detailed logs and error reports for every run. Automated tests are also included to ensure the pipeline works reliably.",
      },
    ],
    outcome: [
      "A repeatable, scheduled ETL process that replaces manual data movement with a more reliable and testable pipeline.",
      "The system centralizes clean data into a PostgreSQL warehouse for downstream business intelligence and reporting.",
    ],
    tech: ["Python 3.11", "PostgreSQL", "pandas", "APScheduler", "pytest", "requests", "psycopg2"],
    flow: [
      "REST API + PostgreSQL + CSV Files",
      "Extract",
      "Transform & Validate",
      "Error Handling & Logging",
      "PostgreSQL Data Warehouse",
      "BI & Reporting",
    ],
  },
  {
    id: "ai-sql-assistant",
    title: "AI-Powered SQL Assistant",
    category: "AI / Backend / Developer Tools",
    overview:
      "An AI-powered SQL assistant designed to help users generate, improve, and troubleshoot SQL queries.",
    problem:
      "Writing SQL can be time-consuming, especially when users need help translating requirements into queries, identifying errors, improving existing queries, or making searches more specific.",
    solution: [
      {
        text: "We built an AI-powered SQL assistant with a FastAPI backend. Users can describe what they want in natural language or provide an existing SQL query.",
      },
      {
        heading: "The assistant can",
        items: [
          "Generate SQL based on natural-language requirements",
          "Help users create more specific queries",
          "Detect issues or errors in existing queries",
          "Optimize and improve existing SQL queries",
          "Assist with query refinement",
        ],
      },
      {
        text: "For example, a user can describe a requirement such as retrieving information from an employee table based on salary conditions, and the system helps generate the appropriate SQL query.",
      },
      {
        text: "The project runs a local Ollama model rather than relying on a specific hosted model provider.",
      },
    ],
    outcome: [
      "A practical AI-powered tool that makes SQL query creation and optimization easier for users and developers.",
      "Demonstrated through the FastAPI Swagger/API interface — does not currently have a dedicated frontend UI.",
      "Operates as a query generation and optimization assistant without requiring access to a specific production database.",
    ],
    tech: ["Python", "FastAPI", "LangChain", "Ollama", "PostgreSQL", "SQL"],
    flow: [
      "Natural Language Request or Existing SQL",
      "FastAPI Backend",
      "LangChain + Ollama",
      "SQL Generation / Error Detection / Optimization",
      "Improved SQL Query",
    ],
  },
  {
    id: "medical-rag-chatbot",
    title: "Medical RAG Chatbot",
    category: "AI / Backend",
    capabilities: [
      "PDF ingestion and document chunking",
      "Semantic embeddings",
      "FAISS vector search",
      "Context-grounded question answering",
      "LLM-powered responses",
      "Web interface",
      "Containerized deployment",
      "CI/CD pipeline",
    ],
    overview:
      "A Retrieval-Augmented Generation system that allows users to upload PDFs and ask natural-language questions to get context-grounded answers from large document collections.",
    problem:
      "Businesses and individuals working with large document collections need fast and accurate answers without manually searching through large numbers of PDFs.",
    solution: [
      {
        text: "We built a Retrieval-Augmented Generation system that allows users to upload PDFs and ask natural-language questions. Documents are processed, chunked, converted into semantic embeddings, stored in a FAISS vector index, and retrieved as context for LLM-generated answers.",
      },
    ],
    outcome: [
      "Reduced the manual effort required to search through large document collections by providing direct, context-grounded answers.",
      "Demonstrates a production-style AI deployment workflow using Docker, Jenkins, and AWS.",
    ],
    tech: ["Python", "LangChain", "FAISS", "Mistral", "Flask", "Docker", "Jenkins", "GitHub", "AWS"],
    flow: [
      "PDF Upload",
      "Document Chunking",
      "Semantic Embeddings",
      "FAISS Vector Index",
      "Context Retrieval",
      "LLM Response Generation",
    ],
  },
  {
    id: "multi-agent-ai-system",
    title: "Multi-Agent AI System",
    category: "AI / Backend",
    capabilities: [
      "Multi-agent orchestration",
      "LangGraph-based workflow",
      "External web search integration",
      "Configurable model selection",
      "FastAPI backend",
      "Streamlit interface",
      "Containerized deployment",
      "Automated code quality checks",
      "CI/CD pipeline",
    ],
    overview:
      "A multi-agent AI system that coordinates an LLM with external tools such as web search, exposed through a FastAPI backend with a Streamlit interface.",
    problem:
      "Traditional single-LLM chatbots can struggle with multi-step tasks and accessing current external information.",
    solution: [
      {
        text: "We built a multi-agent AI system using LangChain/LangGraph that coordinates an LLM with external tools such as web search. The system is exposed through a FastAPI backend with a Streamlit interface.",
      },
    ],
    outcome: [
      "Demonstrates a production-style agentic AI workflow capable of coordinating multiple steps and using external information sources.",
    ],
    tech: ["Python", "LangChain", "LangGraph", "Groq API", "Tavily API", "FastAPI", "Streamlit", "Docker", "Jenkins", "SonarQube", "GitHub", "AWS Fargate"],
    flow: [
      "User Input",
      "LangGraph Multi-Agent Orchestrator",
      "Web Search / External Tools",
      "LLM Processing",
      "FastAPI Backend",
      "Streamlit Interface",
    ],
  },
];
