"use client";

import { AppShell } from "@/components/layout";
import { DataTable, type Column } from "@/components/ui/DataTable";

// ─── Type ──────────────────────────────────────────────────────────────────────
interface Supplier {
  id: string;
  kode: string;
  nama: string;
  telepon: string;
  email: string;
  alamat: string;
}

// ─── Columns ───────────────────────────────────────────────────────────────────
const COLUMNS: Column<Supplier>[] = [
  { key: "kode",     label: "Kode Supplier", width: "140px" },
  { key: "nama",     label: "Nama Supplier" },
  { key: "telepon",  label: "Telepon",       width: "140px" },
  { key: "email",    label: "Email",         width: "200px" },
  { key: "alamat",   label: "Alamat" },
];

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function SupplierPage() {
  return (
    <AppShell title="Data Supplier" subtitle="Master data supplier">
      <DataTable<Supplier>
        title="Daftar Supplier"
        columns={COLUMNS}
        data={[]}
        addLabel="Tambah Supplier"
        onAdd={() => {
          // TODO: buka modal tambah supplier
        }}
        keyField="id"
      />
    </AppShell>
  );
}