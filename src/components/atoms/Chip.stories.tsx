import type { Meta, StoryObj } from "@storybook/react-vite";

import Chip from "./Chip";

const meta = {
  title: "Atoms/Chip",
  component: Chip,
  args: {
    variant: "filled",
    color: "primary",
    label: "chip",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["filles", "outlined"],
    },
    color: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {};

export const Outlined: Story = {
  args: { variant: "outlined" },
};

/** All three variants side by side — quick visual check across color schemes. */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12 }}>
      <Chip {...args} variant="filled" label="filled"></Chip>
      <Chip {...args} variant="outlined" label="outlined"></Chip>
    </div>
  ),
};
