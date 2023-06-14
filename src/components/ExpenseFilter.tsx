import categories from '../categories'

interface ExpenseFilterProps {
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ onSelect }: ExpenseFilterProps) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onSelect(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
