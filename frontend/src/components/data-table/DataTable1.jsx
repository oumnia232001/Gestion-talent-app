"use client"

import {
  flexRender,
  getSortedRowModel,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
 
} from "@tanstack/react-table"


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,

  
} from "@/components/ui/table"


import { Input } from "../ui/input.jsx"
import { useState } from "react";


import { DataTableViewOptions } from "./DataTableViewsOptions.jsx";
import { DataTablePagination } from "./DataTableColumnPagination.jsx";

export function DataTable1({columns,data}){
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getPaginationRowModel: getPaginationRowModel(),
   
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  return (

    <> 
     <div className="flex items-center py-4">
        <Input
          placeholder="Filter Contract ..."
          value={(table.getColumn("contrat")?.getFilterValue() ) ?? ""}
          onChange={(event) =>
            table.getColumn("contrat")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        
        <DataTableViewOptions table={table} />

      </div>

   
      <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />

    </div>
    </>
  
  )
}
