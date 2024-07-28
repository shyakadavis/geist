import { mediaQuery } from 'svelte-legos';
import { writable } from 'svelte/store';
import ModalContent from './modal-content.svelte';
import ModalDescription from './modal-description.svelte';
import ModalFooter from './modal-footer.svelte';
import ModalHeader from './modal-header.svelte';
import ModalTitle from './modal-title.svelte';
import ModalTrigger from './modal-trigger.svelte';
import Modal from './modal.svelte';

export const is_desktop = mediaQuery('(min-width: 640px)');

export const is_overflowing = writable(false);

export {
	ModalContent as Content,
	ModalDescription as Description,
	ModalFooter as Footer,
	ModalHeader as Header,
	Modal,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTrigger,
	Modal as Root,
	ModalTitle as Title,
	ModalTrigger as Trigger
};
