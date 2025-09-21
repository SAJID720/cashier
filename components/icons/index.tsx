import React from 'react';

// Generic Icon Props
type IconProps = React.SVGProps<SVGSVGElement>;

export const LogoIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A.75.75 0 0 1 14.25 12h.01a.75.75 0 0 1 .75.75v7.5m4.13-1.01a.75.75 0 0 0 1.05-.22l.75-1.25a.75.75 0 0 0-1.05-1.05l-.75 1.25a.75.75 0 0 0 .01 1.27ZM3.86 19.99a.75.75 0 0 0 1.05.22l.75-1.25a.75.75 0 1 0-1.05-1.05l-.75 1.25a.75.75 0 0 0-.01 1.27ZM12 6.01a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V6.01ZM12 3a9 9 0 1 0 9 9 .75.75 0 0 1 1.5 0 10.5 10.5 0 1 1-10.5-10.5.75.75 0 0 1 0 1.5A9 9 0 0 0 12 3Z" />
    </svg>
);

export const ScanIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5v15h16.5v-15H3.75Zm9 3.75-3.75 6m6.75-3.75L12.75 15" />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
  </svg>
);

export const TrashIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

export const LoadingIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691V5.25m0 0H9.345M14.033 5.25l-3.181 3.183a8.25 8.25 0 0 1-11.667 0L2.985 9.348" />
  </svg>
);

export const ErrorIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);

export const EmptyCartIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.838-5.513a1.875 1.875 0 0 0-1.642-2.58H5.169m-1.138 0-1.898-.633A.75.75 0 0 0 1.25 3.25V3" />
  </svg>
);

export const AppleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M17.168 8.017A4.482 4.482 0 0 0 12.016 4.5a4.483 4.483 0 0 0-5.183 3.517c-2.45.23-4.334 2.315-4.334 4.793 0 2.65 2.158 4.81 4.808 4.81h.165c.343 0 .68-.047 1.009-.136.726-.2 1.595-.264 2.522-.264s1.796.065 2.522.264c.33.09.667.136 1.01.136h.164c2.65 0 4.808-2.16 4.808-4.81 0-2.478-1.885-4.563-4.334-4.793ZM12.016 3c.48 0 .95.066 1.403.192.052-.104.11-.205.171-.303A3.5 3.5 0 0 0 10 2.5c-.538 0-1.048.12-1.5.337.07.13.13.265.18.404.498-.168.99-.241 1.336-.241Z" /></svg>
);
export const BananaIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M21.192 12.33C19.48 11.23 16.48 9.4 14 7.63c-2.1-1.52-3.13-3.48-3.08-5.32.03-.98.34-1.88.85-2.61-1.17.13-2.31.54-3.34 1.18C4.54 3.4 2.1 7.23 2.1 11.63c0 4.14 2.05 7.89 5.21 10.19 1.49 1.08 3.2 1.7 4.96 1.76 4.82.16 8.76-3.8 8.76-8.72 0-1.2-.24-2.36-.67-3.43-.07.02-.13.04-.17.05Z" /></svg>
);
export const BreadIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M5 8.61C5 7.02 6.27 5.75 7.86 5.75h8.28c1.59 0 2.86 1.27 2.86 2.86v7.64c0 .8-.65 1.45-1.45 1.45H6.45C5.65 17.7 5 17.05 5 16.25V8.61Zm13.41-1.37c-.36-.46-.86-.8-1.41-.97C15.82 5.8 14.36 5 12.29 5c-1.74 0-3.18.61-4.22 1.54-.42.38-.8.8-1.08 1.29-.81 1.43-1.49 3.57-1.49 5.17 0 1.9 1.17 3.55 2.82 4.19.06.02.13.04.19.06.91.31 2.02.48 3.23.48h.51c2.11 0 3.82-.44 4.9-1.22.6-.43 1.08-.98 1.41-1.63.79-1.51 1.18-3.09 1.18-4.71.01-1.61-.38-3.2-1.17-4.73Z" /></svg>
);
export const MilkIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.92 19.34c-1.35.32-2.48.32-3.83.01-1.66-.4-2.84-1.22-2.84-2.15v-5.2C6.25 10.2 7 8.35 8.1 6.32c.32-.6.67-1.23 1.04-1.84.2-.33.4-.67.62-1 .2-.3.4-.6.6-.9.4-.6.82-1.2 1.24-1.58.5-.43 1.03-.64 1.56-.56.68.1 1.17.6 1.36 1.22.1.32.12.65.08 1-.03.26-.07.52-.13.78-.17.73-.4 1.48-.67 2.25-.6 1.7-1.33 3.5-1.4 5.37v.34c0 .54.45.98 1 .98s1-.44 1-.98V17c.83 0 1.5.67 1.5 1.5 0 .6-.32 1.13-.8 1.4l-.12.06Z" /></svg>
);
export const WaterIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14.22 2.2c-.32-.2-.72-.2-1.04-.01-.32.2-.5.58-.42.94l.84 3.35c-1.2.6-2.02 1.8-2.02 3.12v8.94c0 1.9 1.56 3.44 3.48 3.44s3.48-1.54 3.48-3.44V9.6c0-1.32-.82-2.5-2.02-3.12L14.64 3.14c.08-.36-.1-.74-.42-.94ZM9.5 2c-1.94 0-3.5 1.56-3.5 3.5v11c0 1.94 1.56 3.5 3.5 3.5s3.5-1.56 3.5-3.5V5.5C13 3.56 11.44 2 9.5 2Z" /></svg>
);
export const BagIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 6.5h-3.48c-.46-2.28-2.48-4-4.77-4-2.29 0-4.31 1.72-4.77 4H2.75C2.34 6.5 2 6.84 2 7.25v12c0 .41.34.75.75.75h18.5c.41 0 .75-.34.75-.75v-12c0-.41-.34-.75-.75-.75ZM10.75 6.5c.29-1.49 1.63-2.5 3-2.5s2.71 1.01 3 2.5h-6Z" /></svg>
);

export const CashIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
  </svg>
);

export const CardIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
  </svg>
);

export const CashRegisterIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V11.87a2.25 2.25 0 0 0-1.18-2.035l-7.5-4.25a2.25 2.25 0 0 0-2.14 0L3.43 9.835a2.25 2.25 0 0 0-1.18 2.036v6.75ZM15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

export const HistoryIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const ChartBarIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
);

export const MagnifyingGlassIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

export const ExportIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const BarcodeScannerIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5A2.25 2.25 0 0 1 6 2.25h12A2.25 2.25 0 0 1 20.25 4.5v12A2.25 2.25 0 0 1 18 18.75H6A2.25 2.25 0 0 1 3.75 16.5v-12ZM8.25 8.25h.008v.008H8.25V8.25Zm0 3h.008v.008H8.25v-.008Zm0 3h.008v.008H8.25v-.008Zm3-6h.008v.008H11.25V8.25Zm0 3h.008v.008H11.25v-.008Zm0 3h.008v.008H11.25v-.008Zm3-6h.008v.008H14.25V8.25Zm0 3h.008v.008H14.25v-.008Zm0 3h.008v.008H14.25v-.008Z" />
    </svg>
);