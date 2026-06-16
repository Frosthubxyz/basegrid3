// Task 19: Format Ethereum Address
export function formatAddress(address: string | undefined): string {
  if (!address || address.length < 10) return "0x0...000";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

// Task 21: Format ETH Currency
export function formatCurrency(amountStr: string | number): string {
  const amount = Number(amountStr);
  if (isNaN(amount)) return "0.00 ETH";
  return `${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })} ETH`;
}

// Task 23: Format Date
export function formatDate(dateString: string | Date): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Unknown Date";
  
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}
