<span />

<style>
	span {
		margin: 0 0.6rem;
		padding: 0 0.4rem;
		border-radius: 1px;
		position: relative;
		bottom: 2px;
		vertical-align: baseline;
		background-color: var(--dark-background);
		font-size: 1.4rem;
		animation: 1.6s blink step-end infinite;
	}
	@keyframes blink {
		from,
		to {
			background-color: var(--dark-background);
		}
		50% {
			background-color: var(--light-background);
		}
	}
	@media screen and (min-width: 1200px) {
		span {
			font-size: 1.6rem;
		}
	}
</style>
