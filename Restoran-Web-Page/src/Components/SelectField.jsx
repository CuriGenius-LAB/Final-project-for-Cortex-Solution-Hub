const SelectField = ({ id, label, options , value , onChange }) => {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        className="block w-full rounded border-3 border-gray-300 bg-white px-3 py-4 text-[16px] text-[#666565] 
                   focus:border-[#fea116] focus:outline-none"
        onChange={(event) => onChange(event.target)}
      >
        <option value="">{`Select ${label}`}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
