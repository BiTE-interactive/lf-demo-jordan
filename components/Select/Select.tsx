import { Flex, Select as StyledSelect } from "@styled/index";

interface Option {
  value: string;
  label: string;
}

export const Select = ({
  options,
  onChange,
  value,
}: {
  options: string[] | Option[];
  onChange: (e: any) => void;
  value?: string;
}) => {
  return (
    <Flex>
      <StyledSelect>
        <div className="custom-select">
          <select value={value} onChange={onChange}>
            {options.map((option) => {
              if (typeof option === "string") {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              }
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
      </StyledSelect>
    </Flex>
  );
};

export default Select;
