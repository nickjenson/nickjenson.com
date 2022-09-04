<span />

<style>
  span {
    margin: 0 .5rem;
    padding: 0 .4rem;
    border-radius: 2px;
    position: relative;
    bottom: 2px;
    vertical-align: baseline;
    background-color: var(--text);
    font-size: 1.4rem;
    animation: 1.5s blink step-end infinite;
  }

  @keyframes blink {
    from, to {
      background-color: transparent;
    }
    50% {
      background-color: var(--text);
    }
  }
  @-webkit-keyframes blink {
    from, to {
      background-color: transparent;
    }
    50% {
      background-color: var(--text);
    }
  }
</style>