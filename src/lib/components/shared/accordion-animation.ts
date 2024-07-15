// Original source: https://css-tricks.com/how-to-animate-the-details-element/
class Accordion {
	private el: HTMLDetailsElement;
	private summary: HTMLElement;
	private content: HTMLElement;
	private animation: Animation | null;
	private is_closing: boolean;
	private is_expanding: boolean;
	private click_handler: (e: Event) => void;
	private animation_duration: number;

	constructor(el: HTMLDetailsElement, animation_duration = 150) {
		// Store the <details> element
		this.el = el;
		// Store the <summary> element
		this.summary = el.querySelector("summary") as HTMLElement;
		// Store the <div class="content"> element
		this.content = el.querySelector(".content") as HTMLElement;
		// Store the animation object (so we can cancel it if needed)
		this.animation = null;
		// Store if the element is closing
		this.is_closing = false;
		// Store if the element is expanding
		this.is_expanding = false;
		// Store the click handler
		this.click_handler = (e) => this.on_click(e);
		// Detect user clicks on the summary element
		this.summary.addEventListener("click", this.click_handler);
		// Store the custom animation duration
		this.animation_duration = animation_duration;
	}

	on_click(e: Event): void {
		e.preventDefault();
		// Add an overflow on the <details> to avoid content overflowing
		this.el.style.overflow = "hidden";
		// Check if the element is being closed or is already closed
		if (this.is_closing || !this.el.open) {
			this.open();
			// Check if the element is being opened or is already open
		} else if (this.is_expanding || this.el.open) {
			this.shrink();
		}
	}

	shrink(): void {
		// Set the element as "being closed"
		this.is_closing = true;

		// Store the current height of the element
		const start_height = `${this.el.offsetHeight}px`;
		// Calculate the height of the summary
		const end_height = `${this.summary.offsetHeight}px`;

		// If there is already an animation running
		if (this.animation) {
			// Cancel the current animation
			this.animation.cancel();
		}

		// Start a WAAPI animation
		this.animation = this.el.animate(
			{
				// Set the keyframes from the start_height to end_height
				height: [start_height, end_height],
			},
			{
				duration: this.animation_duration,
				easing: "ease-out",
			},
		);

		// When the animation is complete, call on_animation_finish()
		this.animation.onfinish = () => this.on_animation_finish(false);
		// If the animation is cancelled, isClosing variable is set to false
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		this.animation.oncancel = () => (this.is_closing = false);
	}

	open(): void {
		// Apply a fixed height on the element
		this.el.style.height = `${this.el.offsetHeight}px`;
		// Force the [open] attribute on the details element
		this.el.open = true;
		// Wait for the next frame to call the expand function
		window.requestAnimationFrame(() => this.expand());
	}

	expand(): void {
		// Set the element as "being expanding"
		this.is_expanding = true;
		// Get the current fixed height of the element
		const start_height = `${this.el.offsetHeight}px`;
		// Calculate the open height of the element (summary height + content height)
		const end_height = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

		// If there is already an animation running
		if (this.animation) {
			// Cancel the current animation
			this.animation.cancel();
		}

		// Start a WAAPI animation
		this.animation = this.el.animate(
			{
				// Set the keyframes from the start_height to end_height
				height: [start_height, end_height],
			},
			{
				duration: this.animation_duration,
				easing: "ease-out",
			},
		);
		// When the animation is complete, call on_animation_finish()
		this.animation.onfinish = () => this.on_animation_finish(true);
		// If the animation is cancelled, is_expanding variable is set to false
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		this.animation.oncancel = () => (this.is_expanding = false);
	}

	on_animation_finish(open: boolean): void {
		// Set the open attribute based on the parameter
		this.el.open = open;
		// Clear the stored animation
		this.animation = null;
		// Reset isClosing & is_expanding
		this.is_closing = false;
		this.is_expanding = false;
		// Remove the overflow hidden and the fixed height
		this.el.style.height = "";
		this.el.style.overflow = "";
	}

	destroy(): void {
		this.summary.removeEventListener("click", this.click_handler);
		if (this.animation) {
			this.animation.cancel();
		}
	}
}

export default Accordion;
