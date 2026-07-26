"use client";

import { AppShell } from "@/components/layout";
import { DataTable, type Column } from "@/components/ui/DataTable";

// ─── Type ──────────────────────────────────────────────────────────────────────
interface ItemCategory {
  id: string;
  nama: string;
  kategoriDefault: string;
}

// ─── Columns ───────────────────────────────────────────────────────────────────
const COLUMNS: Column<ItemCategory>[] = [
  {
    key: "no",
    label: "No",
    width: "60px",
    render: (val) => (
      <span className="text-slate-600">{1}</span>
    ),
  },
  {
    key: "nama",
    label: "Nama",
    render: (val) => (
      <span className="font-medium text-slate-700">{String(val)}</span>
    ),
  },
  {
    key: "kategoriDefault",
    label: "Kategori Default",
    width: "200px",
    render: (val) => (
      <span className="text-slate-600">{String(val)}</span>
    ),
  },
];

// ─── Dummy Data ────────────────────────────────────────────────────────────────
const DATA: ItemCategory[] = [
  {
    id: "1",
    nama: "Obat Bebas",
    kategoriDefault: "Farmasi",
  },
  {
    id: "2",
    nama: "Alat Kesehatan",
    kategoriDefault: "Non-Farmasi",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ItemCategoryPage() {
  return (
    <AppShell title="Item Category" subtitle="Kelola kategori item">
      <DataTable<ItemCategory>
        title="Item Category"
        columns={COLUMNS}
        data={[]}
        addLabel="Tambah Kategori"
        onAdd={() => {
          // TODO: buka modal tambah kategori
        }}
        keyField="id"
      />
    </AppShell>
  );
}