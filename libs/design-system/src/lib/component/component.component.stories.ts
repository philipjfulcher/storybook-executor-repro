import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ComponentComponent } from './component.component';

export default {
  title: 'ComponentComponent',
  component: ComponentComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ComponentComponent>;

const Template: Story<ComponentComponent> = (args: ComponentComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}