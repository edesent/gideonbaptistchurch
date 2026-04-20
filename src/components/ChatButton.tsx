"use client";

declare global {
  interface Window {
    WBCChat?: { open: (prefill?: string) => void };
  }
}

export default function ChatButton({
  prefill,
  className,
  children,
}: {
  prefill?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const onClick = () => {
    if (typeof window !== "undefined" && window.WBCChat?.open) {
      window.WBCChat.open(prefill);
    }
  };

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
