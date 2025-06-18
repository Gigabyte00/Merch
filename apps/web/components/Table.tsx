import { ReactNode } from 'react';

export function Table({ columns, data }: { columns: string[]; data: ReactNode[][] }) {
  return (
    <table className="min-w-full bg-white dark:bg-zinc-900 text-sm rounded shadow">
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col} className="p-2 text-left">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="p-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
