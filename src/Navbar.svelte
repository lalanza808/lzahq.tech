<script>
    let start = new Date('6/4/2022');
    let now = new Date();
    $: diffSec = now - start;
    $: diffDays = diffSec / (1000 * 60 * 60 * 24);
    $: days = Math.floor(diffSec / (1000 * 60 * 60 * 24));
    $: hours = Math.floor((diffSec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    $: minutes = Math.floor((diffSec % (1000 * 60 * 60)) / (1000 * 60));
    $: seconds = Math.floor((diffSec % (1000 * 60)) / 1000);

    setInterval(function() {
        now = new Date();
    }, 1000);
</script>

<div class="top-bar">
    <div class="top-bar-left">
      <ul class="menu">
        <li class="menu-text">LZAHQ</li>
      </ul>
    </div>
    <div class="top-bar-right">
        <a data-open="fuckItModal" id="fuckIt">
            {days} {days === 1 ? 'day': 'days'},
            {hours} {hours === 1 ? 'hour': 'hours'},
            {minutes} {minutes === 1 ? 'minute': 'minutes'},
            {seconds} {seconds === 1 ? 'second' : 'seconds'}.
        </a>
    </div>
</div>


<div class="reveal" id="fuckItModal" data-reveal>
    <p class="lead">...but who's counting...</p>
    <button class="close-button" data-close aria-label="Close reveal" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
</div>

<style>
    #fuckIt {
        color: black;
    }
</style>
