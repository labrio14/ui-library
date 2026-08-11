import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "contained",
    color: "primary",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["contained", "outlined", "text"],
    },
    color: {
      control: "inline-radio",
      options: ["primary", "secondary", "error", "inherit"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {};

export const Outlined: Story = {
  args: { variant: "outlined" },
};

export const Text: Story = {
  args: { variant: "text" },
};

export const WithTooltip: Story = {
  args: {
    tooltipProps: { title: "I'm a tooltip" },
    children: "Hover me",
  },
};

export const AsLink: Story = {
  args: {
    href: "https://example.com",
    target: "_blank",
    children: "Open link",
  },
};

/** All three variants side by side — quick visual check across color schemes. */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button {...args} variant="contained">
        Contained
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </div>
  ),
};
