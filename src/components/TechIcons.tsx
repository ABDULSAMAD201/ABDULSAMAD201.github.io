/* Real brand logos — sourced from Simple Icons (simpleicons.org) */

export function PythonIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <img src="/python-icon.svg" alt="Python" className={className} style={{ objectFit: 'contain' }} {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />
  );
}

export function FastAPIIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="12" fill="#009688"/>
      <path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896" fill="white"/>
    </svg>
  );
}

export function PostgreSQLIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <img src="/postgresql-icon.svg" alt="PostgreSQL" className={className} style={{ objectFit: 'contain' }} {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />
  );
}

export function SQLIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 28" {...props}>
      {/* Blue cylinder body */}
      <ellipse cx="12" cy="5" rx="10" ry="4" fill="#2196F3" />
      <rect x="2" y="5" width="20" height="18" fill="#1E88E5" />
      <ellipse cx="12" cy="23" rx="10" ry="4" fill="#1565C0" />
      {/* Lighter blue top highlight */}
      <ellipse cx="12" cy="5" rx="10" ry="4" fill="#42A5F5" />
      {/* SQL text in white */}
      <text x="12" y="18" textAnchor="middle" fontSize="9" fontWeight="900" fontFamily="Arial, sans-serif" fill="white">SQL</text>
    </svg>
  );
}

export function PowerBIIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...props}>
      <path d="M10 12a1 1 0 0 1 1 1v11H4a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h6Zm-2-.5V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17h-4.5V13a1.5 1.5 0 0 0-1.5-1.5H8Zm5-6V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-3.5V7A1.5 1.5 0 0 0 15 5.5h-2Z" fill="currentColor"/>
    </svg>
  );
}

export function DockerIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...props}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.184.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.186.186 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.687 11.687 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" fill="currentColor"/>
    </svg>
  );
}

export function LangChainIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" rx="5" fill="#111111"/>
      <path d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z" fill="#41C3B2"/>
    </svg>
  );
}

export function OllamaIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="11" fill="white" />
      <path d="M16.361 10.26a.894.894 0 0 0-.558.47l-.072.148.001.207c0 .193.004.217.059.353.076.193.152.312.291.448.24.238.51.3.872.205a.86.86 0 0 0 .517-.436.752.752 0 0 0 .08-.498c-.064-.453-.33-.782-.724-.897a1.06 1.06 0 0 0-.466 0zm-9.203.005c-.305.096-.533.32-.65.639a1.187 1.187 0 0 0-.06.52c.057.309.31.59.598.667.362.095.632.033.872-.205.14-.136.215-.255.291-.448.055-.136.059-.16.059-.353l.001-.207-.072-.148a.894.894 0 0 0-.565-.472 1.02 1.02 0 0 0-.474.007Zm4.184 2c-.131.071-.223.25-.195.383.031.143.157.288.353.407.105.063.112.072.117.136.004.038-.01.146-.029.243-.02.094-.036.194-.036.222.002.074.07.195.143.253.064.052.076.054.255.059.164.005.198.001.264-.03.169-.082.212-.234.15-.525-.052-.243-.042-.28.087-.355.137-.08.281-.219.324-.314a.365.365 0 0 0-.175-.48.394.394 0 0 0-.181-.033c-.126 0-.207.03-.355.124l-.085.053-.053-.032c-.219-.13-.259-.145-.391-.143a.396.396 0 0 0-.193.032zm.39-2.195c-.373.036-.475.05-.654.086-.291.06-.68.195-.951.328-.94.46-1.589 1.226-1.787 2.114-.04.176-.045.234-.045.53 0 .294.005.357.043.524.264 1.16 1.332 2.017 2.714 2.173.3.033 1.596.033 1.896 0 1.11-.125 2.064-.727 2.493-1.571.114-.226.169-.372.22-.602.039-.167.044-.23.044-.523 0-.297-.005-.355-.045-.531-.288-1.29-1.539-2.304-3.072-2.497a6.873 6.873 0 0 0-.855-.031zm.645.937a3.283 3.283 0 0 1 1.44.514c.223.148.537.458.671.662.166.251.26.508.303.82.02.143.01.251-.043.482-.08.345-.332.705-.672.957a3.115 3.115 0 0 1-.689.348c-.382.122-.632.144-1.525.138-.582-.006-.686-.01-.853-.042-.57-.107-1.022-.334-1.35-.68-.264-.28-.385-.535-.45-.946-.03-.192.025-.509.137-.776.136-.326.488-.73.836-.963.403-.269.934-.46 1.422-.512.187-.02.586-.02.773-.002zm-5.503-11a1.653 1.653 0 0 0-.683.298C5.617.74 5.173 1.666 4.985 2.819c-.07.436-.119 1.04-.119 1.503 0 .544.064 1.24.155 1.721.02.107.031.202.023.208a8.12 8.12 0 0 1-.187.152 5.324 5.324 0 0 0-.949 1.02 5.49 5.49 0 0 0-.94 2.339 6.625 6.625 0 0 0-.023 1.357c.091.78.325 1.438.727 2.04l.13.195-.037.064c-.269.452-.498 1.105-.605 1.732-.084.496-.095.629-.095 1.294 0 .67.009.803.088 1.266.095.555.288 1.143.503 1.534.071.128.243.393.264.407.007.003-.014.067-.046.141a7.405 7.405 0 0 0-.548 1.873c-.062.417-.071.552-.071.991 0 .56.031.832.148 1.279L3.42 24h1.478l-.05-.091c-.297-.552-.325-1.575-.068-2.597.117-.472.25-.819.498-1.296l.148-.29v-.177c0-.165-.003-.184-.057-.293a.915.915 0 0 0-.194-.25 1.74 1.74 0 0 1-.385-.543c-.424-.92-.506-2.286-.208-3.451.124-.486.329-.918.544-1.154a.787.787 0 0 0 .223-.531c0-.195-.07-.355-.224-.522a3.136 3.136 0 0 1-.817-1.729c-.14-.96.114-2.005.69-2.834.563-.814 1.353-1.336 2.237-1.475.199-.033.57-.028.776.01.226.04.367.028.512-.041.179-.085.268-.19.374-.431.093-.215.165-.333.36-.576.234-.29.46-.489.822-.729.413-.27.884-.467 1.352-.561.17-.035.25-.04.569-.04.319 0 .398.005.569.04a4.07 4.07 0 0 1 1.914.997c.117.109.398.457.488.602.034.057.095.177.132.267.105.241.195.346.374.43.14.068.286.082.503.045.343-.058.607-.053.943.016 1.144.23 2.14 1.173 2.581 2.437.385 1.108.276 2.267-.296 3.153-.097.15-.193.27-.333.419-.301.322-.301.722-.001 1.053.493.539.801 1.866.708 3.036-.062.772-.26 1.463-.533 1.854a2.096 2.096 0 0 1-.224.258.916.916 0 0 0-.194.25c-.054.109-.057.128-.057.293v.178l.148.29c.248.476.38.823.498 1.295.253 1.008.231 2.01-.059 2.581a.845.845 0 0 0-.044.098c0 .006.329.009.732.009h.73l.02-.074.036-.134c.019-.076.057-.3.088-.516.029-.217.029-1.016 0-1.258-.11-.875-.295-1.57-.597-2.226-.032-.074-.053-.138-.046-.141.008-.005.057-.074.108-.152.376-.569.607-1.284.724-2.228.031-.26.031-1.378 0-1.628-.083-.645-.182-1.082-.348-1.525a6.083 6.083 0 0 0-.329-.7l-.038-.064.131-.194c.402-.604.636-1.262.727-2.04a6.625 6.625 0 0 0-.024-1.358 5.512 5.512 0 0 0-.939-2.339 5.325 5.325 0 0 0-.95-1.02 8.097 8.097 0 0 1-.186-.152.692.692 0 0 1 .023-.208c.208-1.087.201-2.443-.017-3.503-.19-.924-.535-1.658-.98-2.082-.354-.338-.716-.482-1.15-.455-.996.059-1.8 1.205-2.116 3.01a6.805 6.805 0 0 0-.097.726c0 .036-.007.066-.015.066a.96.96 0 0 1-.149-.078A4.857 4.857 0 0 0 12 3.03c-.832 0-1.687.243-2.456.698a.958.958 0 0 1-.148.078c-.008 0-.015-.03-.015-.066a6.71 6.71 0 0 0-.097-.725C8.997 1.392 8.337.319 7.46.048a2.096 2.096 0 0 0-.585-.041Zm.293 1.402c.248.197.523.759.682 1.388.03.113.06.244.069.292.007.047.026.152.041.233.067.365.098.76.102 1.24l.002.475-.12.175-.118.178h-.278c-.324 0-.646.041-.954.124l-.238.06c-.033.007-.038-.003-.057-.144a8.438 8.438 0 0 1 .016-2.323c.124-.788.413-1.501.696-1.711.067-.05.079-.049.157.013zm9.825-.012c.17.126.358.46.498.888.28.854.36 2.028.212 3.145-.019.14-.024.151-.057.144l-.238-.06a3.693 3.693 0 0 0-.954-.124h-.278l-.119-.178-.119-.175.002-.474c.004-.669.066-1.19.214-1.772.157-.623.434-1.185.68-1.382.078-.062.09-.063.159-.012z" fill="#1a1a1a"/>
    </svg>
  );
}

export function RAGIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="5" cy="19" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="19" cy="19" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 7.5v4M7.2 17.3l3-4.8M16.8 17.3l-3-4.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function AWSIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...props}>
      {/* aws text in white */}
      <text x="12" y="13" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif" fill="white">aws</text>
      {/* Orange smile/arrow */}
      <path d="M4 17 Q12 21 20 17" fill="none" stroke="#FF9900" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Arrow tip */}
      <path d="M18.5 16 L20 17 L18.5 18.5" fill="none" stroke="#FF9900" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ETLPipelineIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 64 64" {...props}>
      <defs>
        <linearGradient id="etl-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8"/>
          <stop offset="100%" stopColor="#7C3AED"/>
        </linearGradient>
      </defs>
      {/* Dashed circle border */}
      <circle cx="32" cy="28" r="26" fill="none" stroke="url(#etl-grad)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/>
      {/* Left database cylinder */}
      <ellipse cx="16" cy="16" rx="7" ry="3" fill="none" stroke="url(#etl-grad)" strokeWidth="1.5"/>
      <rect x="9" y="16" width="14" height="12" fill="none" stroke="url(#etl-grad)" strokeWidth="1.5"/>
      <ellipse cx="16" cy="28" rx="7" ry="3" fill="none" stroke="url(#etl-grad)" strokeWidth="1.5"/>
      {/* Right database cylinder (in house) */}
      <path d="M44 10 L52 16 L52 16 L44 22 L36 16 Z" fill="none" stroke="url(#etl-grad)" strokeWidth="1.5" strokeLinejoin="round"/>
      <ellipse cx="44" cy="22" rx="5" ry="2.5" fill="none" stroke="url(#etl-grad)" strokeWidth="1.5"/>
      <rect x="39" y="22" width="10" height="8" fill="none" stroke="url(#etl-grad)" strokeWidth="1.5"/>
      <ellipse cx="44" cy="30" rx="5" ry="2.5" fill="none" stroke="url(#etl-grad)" strokeWidth="1.5"/>
      {/* Connection lines between databases */}
      <line x1="23" y1="16" x2="39" y2="22" stroke="url(#etl-grad)" strokeWidth="1" opacity="0.6"/>
      <line x1="23" y1="28" x2="39" y2="30" stroke="url(#etl-grad)" strokeWidth="1" opacity="0.6"/>
      {/* Dots on connection */}
      <circle cx="26" cy="15" r="1.5" fill="url(#etl-grad)"/>
      <circle cx="30" cy="17" r="1.5" fill="url(#etl-grad)"/>
      <circle cx="34" cy="19" r="1.5" fill="url(#etl-grad)"/>
      {/* Bottom server/processing box */}
      <rect x="20" y="34" width="24" height="16" rx="2" fill="none" stroke="url(#etl-grad)" strokeWidth="1.5"/>
      {/* Server lines */}
      <line x1="24" y1="38" x2="28" y2="38" stroke="url(#etl-grad)" strokeWidth="1"/>
      <line x1="24" y1="42" x2="28" y2="42" stroke="url(#etl-grad)" strokeWidth="1"/>
      <line x1="24" y1="46" x2="28" y2="46" stroke="url(#etl-grad)" strokeWidth="1"/>
      <line x1="32" y1="38" x2="36" y2="38" stroke="url(#etl-grad)" strokeWidth="1"/>
      <line x1="32" y1="42" x2="36" y2="42" stroke="url(#etl-grad)" strokeWidth="1"/>
      <line x1="32" y1="46" x2="36" y2="46" stroke="url(#etl-grad)" strokeWidth="1"/>
      <line x1="40" y1="38" x2="40" y2="38" stroke="url(#etl-grad)" strokeWidth="1" strokeLinecap="round"/>
      {/* Connection to server */}
      <line x1="16" y1="31" x2="24" y2="34" stroke="url(#etl-grad)" strokeWidth="1" opacity="0.6"/>
      <line x1="44" y1="33" x2="40" y2="34" stroke="url(#etl-grad)" strokeWidth="1" opacity="0.6"/>
      {/* ETL text */}
      <text x="32" y="60" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="Arial, sans-serif" fill="url(#etl-grad)">ETL</text>
    </svg>
  );
}

export function DAXIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="6" y="7" width="5" height="3" rx="0.5" fill="currentColor" opacity="0.5"/>
      <rect x="6" y="12" width="5" height="3" rx="0.5" fill="currentColor" opacity="0.5"/>
      <rect x="13" y="7" width="5" height="3" rx="0.5" fill="currentColor" opacity="0.3"/>
      <rect x="13" y="12" width="5" height="3" rx="0.5" fill="currentColor" opacity="0.3"/>
    </svg>
  );
}
