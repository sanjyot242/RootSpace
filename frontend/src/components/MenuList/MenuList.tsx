
import { Button } from "../Buttons/Button";
import { label } from "framer-motion/client";

// Define the properties based on the JSON
type MenuListProps = {
  device: "Web" | "Mobile";
  showCheckbox: boolean;
  showRadio: boolean;
  showAction1: boolean;
  showAction2: boolean;
  showRightIcon: boolean;
  label: String;
};

const MenuList: React.FC<MenuListProps> = ({
  device = "Web",
  showCheckbox = true,
  showRadio = true,
  showAction1 = true,
  showAction2 = true,
  showRightIcon = true,
  label = "Label",
}) => {
  // Define specific styles based on the device type
  const containerStyles = device === "Web" ? "h-[149px]" : "h-[127px]";
  const titleStyles =
    device === "Web"
      ? "text-paragraph-medium-medium"
      : "text-paragraph-xsmall-medium";

  return (
    <div
      className={`${containerStyles} flex flex-col gap-12 self-stretch items-start`}
    >
      {/* Title and Actions */}
      <div className="flex p-4 self-stretch gap-8 justify-between  border-stroke-secondary bg-bg-primary border-b-2">
        <span className={`font-medium font-ebgaramond  ${titleStyles}`}>
          {label}
        </span>
        {/* {showRightIcon && <div className="bg-gray-300 w-4 h-4 rounded-full" />} */}
        {showAction2 && (
          <Button
            socialMediaIcon={false}
            leftIcon={false}
            rightIcon={false}
            stateProp="normal"
            theme="destructive-link"
            size="large"
          >
            Clear
          </Button>
        )}
      </div>

      {/* Checkbox and Radio options */}
      <div className="flex  flex-col gap-8 items-start">
        {showCheckbox && (
          <div className="flex items-center p-4 self-stretch gap-8">
            <input type="checkbox" className="mr-2" />
            <label>Label Text</label>
          </div>
        )}
        {showRadio && (
          <div className="flex items-center p-4 self-stretch gap-8">
            <input type="radio" className="mr-2" />
            <label>Label Text</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuList;
