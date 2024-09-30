import { Tooltip as TooltipPrimitive } from 'bits-ui';
import Content from './tooltip-content.svelte';

const Provider = TooltipPrimitive.Provider;
const Root = TooltipPrimitive.Root;
const Trigger = TooltipPrimitive.Trigger;
const Arrow = TooltipPrimitive.Arrow;

export {
	Arrow,
	Content,
	Provider,
	Root,
	Root as Tooltip,
	Arrow as TooltipArrow,
	Content as TooltipContent,
	Provider as TooltipProvider,
	Trigger as TooltipTrigger,
	Trigger
};
