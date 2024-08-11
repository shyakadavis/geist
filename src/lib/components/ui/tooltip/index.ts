import { Tooltip as TooltipPrimitive } from 'bits-ui';
import Content from './tooltip-content.svelte';

const Root = TooltipPrimitive.Root;
const Trigger = TooltipPrimitive.Trigger;
const Arrow = TooltipPrimitive.Arrow;

export {
	Arrow,
	Content,
	Root,
	Root as Tooltip,
	Arrow as TooltipArrow,
	Content as TooltipContent,
	Trigger as TooltipTrigger,
	Trigger
};
