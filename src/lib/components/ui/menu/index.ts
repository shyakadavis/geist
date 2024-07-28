import { DropdownMenu as MenuPrimitive } from 'bits-ui';
import CheckboxItem from './menu-checkbox-item.svelte';
import Content from './menu-content.svelte';
import Item from './menu-item.svelte';
import Label from './menu-label.svelte';
import RadioGroup from './menu-radio-group.svelte';
import RadioItem from './menu-radio-item.svelte';
import Separator from './menu-separator.svelte';
import Shortcut from './menu-shortcut.svelte';
import SubContent from './menu-sub-content.svelte';
import SubTrigger from './menu-sub-trigger.svelte';

const Sub = MenuPrimitive.Sub;
const Root = MenuPrimitive.Root;
const Trigger = MenuPrimitive.Trigger;
const Group = MenuPrimitive.Group;

export {
	CheckboxItem,
	Content,
	Group,
	Item,
	Label,
	Root as Menu,
	CheckboxItem as MenuCheckboxItem,
	Content as MenuContent,
	Group as MenuGroup,
	Item as MenuItem,
	Label as MenuLabel,
	RadioGroup as MenuRadioGroup,
	RadioItem as MenuRadioItem,
	Separator as MenuSeparator,
	Shortcut as MenuShortcut,
	Sub as MenuSub,
	SubContent as MenuSubContent,
	SubTrigger as MenuSubTrigger,
	Trigger as MenuTrigger,
	RadioGroup,
	RadioItem,
	Root,
	Separator,
	Shortcut,
	Sub,
	SubContent,
	SubTrigger,
	Trigger
};
