import { SquareCard } from "../components/UI/SquareCard";
import { Meta } from "@storybook/react";

const meta = {
  component: SquareCard,
  variant: {
    options: ["primary", "secondary"],
    control: { type: "radio" },
  },
};
export default meta;
export const Red = ({ title, desc, color, width }) => {
  return (
    <div className="w-screen h-screen">
      <SquareCard
        title={title}
        width={width}
        desc={desc}
        color={color}
      />
    </div>
  );
};
