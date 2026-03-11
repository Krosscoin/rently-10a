import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search restaurants by name or cuisine..."
        className="w-full max-w-md p-3 rounded-md border border-[var(--border)] bg-[var(--input)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search restaurants"
      />
    </div>
  );
};
