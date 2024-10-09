import { DropdownMenu as MenuPrimitive } from 'bits-ui';
import CheckboxItem from './menu-checkbox-item.svelte';
import Content from './menu-content.svelte';
import Item from './menu-item.svelte';
import RadioItem from './menu-radio-item.svelte';
import Separator from './menu-separator.svelte';
import Shortcut from './menu-shortcut.svelte';
import SubContent from './menu-sub-content.svelte';
import SubTrigger from './menu-sub-trigger.svelte';

const Sub = MenuPrimitive.Sub;
const Root = MenuPrimitive.Root;
const Trigger = MenuPrimitive.Trigger;
const Group = MenuPrimitive.Group;
const Portal = MenuPrimitive.Portal;

export {
	CheckboxItem,
	Content,
	Group,
	Item,
	Root as Menu,
	CheckboxItem as MenuCheckboxItem,
	Content as MenuContent,
	Group as MenuGroup,
	Item as MenuItem,
	Portal as MenuPortal,
	RadioItem as MenuRadioItem,
	Separator as MenuSeparator,
	Shortcut as MenuShortcut,
	Sub as MenuSub,
	SubContent as MenuSubContent,
	SubTrigger as MenuSubTrigger,
	Trigger as MenuTrigger,
	Portal,
	RadioItem,
	Root,
	Separator,
	Shortcut,
	Sub,
	SubContent,
	SubTrigger,
	Trigger
};
