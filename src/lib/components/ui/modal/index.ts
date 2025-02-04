import { MediaQuery } from 'svelte/reactivity';
import { writable } from 'svelte/store';
import ModalContent from './modal-content.svelte';
import ModalDescription from './modal-description.svelte';
import ModalFooter from './modal-footer.svelte';
import ModalHeader from './modal-header.svelte';
import ModalInset from './modal-inset.svelte';
import ModalTitle from './modal-title.svelte';
import ModalTrigger from './modal-trigger.svelte';
import Modal from './modal.svelte';

export const is_desktop = new MediaQuery('(min-width: 640px)');
export const is_overflowing = writable(false);
export const is_single_button = writable(false);

export {
	ModalContent as Content,
	ModalDescription as Description,
	ModalFooter as Footer,
	ModalHeader as Header,
	ModalInset as Inset,
	Modal,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalInset,
	ModalTitle,
	ModalTrigger,
	Modal as Root,
	ModalTitle as Title,
	ModalTrigger as Trigger
};
