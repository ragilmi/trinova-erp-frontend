"use client";

import { AppShell } from "@/components/layout";
import { DataTable, type Column } from "@/components/ui/DataTable";

// ─── Type ─────────────────────────────────────────────────────────────────────
interface PurchaseReturn {
  id: string;
  nomor: string;
  tanggal: string;
  supplier: string;
  informasi: string;
  total: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const formatDate = (d: string) =>
  new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(d));

const formatNumber = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 0,
  }).format(n);

// ─── Columns (Sesuai Gambar) ──────────────────────────────────────────────────
const COLUMNS: Column<PurchaseReturn>[] = [
  {
    key: "nomor",
    label: "Number #",
    width: "160px",
    render: (val) => (
      <span className="font-mono font-semibold text-[12px] text-navy-700">
        {String(val)}
      </span>
    ),
  },
  {
    key: "tanggal",
    label: "Date",
    width: "120px",
    render: (val) => (
      <span className="text-slate-600 whitespace-nowrap">
        {formatDate(String(val))}
      </span>
    ),
  },
  {
    key: "supplier",
    label: "Supplier",
    width: "220px",
    render: (val) => (
      <span className="font-medium text-slate-700">{String(val)}</span>
    ),
  },
  {
    key: "informasi",
    label: "Information",
    render: (val) => (
      <span className="text-slate-500 text-xs">
        {String(val) || "—"}
      </span>
    ),
  },
  {
    key: "total",
    label: "Total",
    width: "150px",
    render: (val) => (
      <span className="font-semibold text-slate-700 tabular-nums">
        {formatNumber(Number(val))}
      </span>
    ),
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PurchaseReturnsPage() {
  return (
    <AppShell
      title="Purchase Returns"
      subtitle="Kelola pengembalian pembelian"
    >
      <DataTable<PurchaseReturn>
        title="Daftar Purchase Returns"
        columns={COLUMNS}
        data={[]} 
        addLabel="Tambah Purchase Return"
        onAdd={() => {
          // TODO: buka modal tambah purchase return
        }}
        keyField="id"
      />
    </AppShell>
  );
}