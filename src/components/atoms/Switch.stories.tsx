import type { Meta, StoryObj } from "@storybook/react-vite";
import Switch from "./Switch";

/**
 * Mui online documentation: [MUI](https://mui.com/material-ui/react-switch)
 *
 * ---
 *
 * ### Migration from CoreToSwitch V1
 *
 * - Change import from `import { CoreToSwitch } from 'coreto-ui-library'` to `import { Switch } from '@alpitour/common-ui-lib'
 * - Use the component `<FormGroup>` and `<FormControl>` for the checkbox label
 * - Use the prop labelPlacement to set the position of the label (top, bottom, start, end) - See the example below
 */
const meta: Meta<typeof Switch> = {
  title: "atoms/Switch",
  component: Switch,
  argTypes: {},
};

type Story = StoryObj<typeof Switch>;

export const BasicSwitches: Story = {
  args: {
    size: "small",
  },
  render: (args) => (
    <>
      <Switch {...args} defaultChecked />
      <Switch {...args} />
      <Switch {...args} disabled />
      <Switch {...args} disabled checked />
    </>
  ),
};

export default meta;
