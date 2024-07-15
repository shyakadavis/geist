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
		this.el = el;
		this.summary = el.querySelector("summary") as HTMLElement;
		this.content = el.querySelector(".content") as HTMLElement;

		this.animation = null;
		this.is_closing = false;
		this.is_expanding = false;
		this.click_handler = (e) => this.onClick(e);
		this.summary.addEventListener("click", this.click_handler);

		// Store the custom animation duration
		this.animation_duration = animation_duration;
	}

	onClick(e: Event): void {
		e.preventDefault();
		this.el.style.overflow = "hidden";
		if (this.is_closing || !this.el.open) {
			this.open();
		} else if (this.is_expanding || this.el.open) {
			this.shrink();
		}
	}

	shrink(): void {
		this.is_closing = true;

		const startHeight = `${this.el.offsetHeight}px`;
		const endHeight = `${this.summary.offsetHeight}px`;

		if (this.animation) {
			this.animation.cancel();
		}

		this.animation = this.el.animate(
			{
				height: [startHeight, endHeight],
			},
			{
				duration: this.animation_duration,
				easing: "ease-out",
			},
		);

		this.animation.onfinish = () => this.onAnimationFinish(false);
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		this.animation.oncancel = () => (this.is_closing = false);
	}

	open(): void {
		this.el.style.height = `${this.el.offsetHeight}px`;
		this.el.open = true;
		window.requestAnimationFrame(() => this.expand());
	}

	expand(): void {
		this.is_expanding = true;
		const startHeight = `${this.el.offsetHeight}px`;
		const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

		if (this.animation) {
			this.animation.cancel();
		}

		this.animation = this.el.animate(
			{
				height: [startHeight, endHeight],
			},
			{
				duration: this.animation_duration,
				easing: "ease-out",
			},
		);
		this.animation.onfinish = () => this.onAnimationFinish(true);
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		this.animation.oncancel = () => (this.is_expanding = false);
	}

	onAnimationFinish(open: boolean): void {
		this.el.open = open;
		this.animation = null;
		this.is_closing = false;
		this.is_expanding = false;
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
