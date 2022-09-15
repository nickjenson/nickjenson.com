<span />

<style>
  span {
    margin: 0 .5rem;
    padding: 0 .4rem;
    border-radius: 1px;
    position: relative;
    bottom: 2px;
    vertical-align: baseline;
    background-color: var(--dark-background);
    font-size: 1.3rem;
    animation: 2s blink step-end infinite;
  }
  @keyframes blink {
    from, to {
      background-color: var(--dark-background);
    }
    50% {
      background-color: var(--light-background);
    }
  }
</style>