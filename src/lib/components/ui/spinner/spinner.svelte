<script lang="ts">
	type Props = {
		color?: string;
		size?: number;
	};

	let { color = 'bg-gray-700', size = 20 }: Props = $props();
</script>

<div style:--spinner-size="{size}px" class="size-[var(--spinner-size)]">
	<div class="relative left-1/2 top-1/2 size-[var(--spinner-size)]">
		{#each { length: 12 } as _}
			<span class="absolute -left-[10%] -top-[3.9%] h-[8%] w-[24%] rounded-md {color}"></span>
		{/each}
	</div>
</div>

<style>
	span {
		animation: spin 1.2s linear infinite;
	}

	span:nth-child(1) {
		animation-delay: -1.2s;
		transform: rotate(0.0001deg) translate(146%);
	}

	span:nth-child(2) {
		animation-delay: -1.1s;
		transform: rotate(30deg) translate(146%);
	}

	span:nth-child(3) {
		animation-delay: -1s;
		transform: rotate(60deg) translate(146%);
	}

	span:nth-child(4) {
		animation-delay: -0.9s;
		transform: rotate(90deg) translate(146%);
	}

	span:nth-child(5) {
		animation-delay: -0.8s;
		transform: rotate(120deg) translate(146%);
	}

	span:nth-child(6) {
		animation-delay: -0.7s;
		transform: rotate(150deg) translate(146%);
	}

	span:nth-child(7) {
		animation-delay: -0.6s;
		transform: rotate(180deg) translate(146%);
	}

	span:nth-child(8) {
		animation-delay: -0.5s;
		transform: rotate(210deg) translate(146%);
	}

	span:nth-child(9) {
		animation-delay: -0.4s;
		transform: rotate(240deg) translate(146%);
	}

	span:nth-child(10) {
		animation-delay: -0.3s;
		transform: rotate(270deg) translate(146%);
	}

	span:nth-child(11) {
		animation-delay: -0.2s;
		transform: rotate(300deg) translate(146%);
	}

	span:nth-child(12) {
		animation-delay: -0.1s;
		transform: rotate(330deg) translate(146%);
	}

	@keyframes spin {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0.15;
		}
	}
</style>
