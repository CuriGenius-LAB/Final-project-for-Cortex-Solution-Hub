const InputField = ({ id, type, label , value , onChange , className="" }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        value={value}
        placeholder={label} 
        className={`block w-full rounded border-3 border-gray-300 bg-white px-3 py-4 text-[16px] text-[#666565] placeholder:text-[16px] placeholder:text-gray-500 focus:border-[#fea116] focus:outline-none ${className} `}
        onChange={(event) => onChange(event.target)}
      />
    </div>
  );
};

export default InputField;
