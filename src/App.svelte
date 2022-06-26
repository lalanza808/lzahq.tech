<script>
	import Navbar from './Navbar.svelte';
	import Load from './Load.svelte';
	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { pics } from './pictures.js';
	import { onMount } from 'svelte';

	let endSlice = 0;
	let incrementBy = 4;
	let allPics = Object.entries(pics);
	let progressVisible = false;
	let viewer;

	$: picsSliced = allPics.slice(0, endSlice);

	function shuffleArray(array) {
    	for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	shuffleArray(allPics);

	const progress = tweened(0, {
		duration: 600,
		easing: cubicOut
	});

	window.onscroll = function() {
		if (endSlice >= allPics.length) {
			return false;
		} else {
			var limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
			if (Math.round(window.scrollY) == Math.round(limit)) {
				let j = setInterval(function() {
					endSlice += incrementBy;
					progressVisible = true;
					progress.set(1);
					clearInterval(j);
				}, 1200);
				let k = setInterval(function() {
					progressVisible = false;
					progress.set(0);
					clearInterval(k);
				}, 2000)
			};
		};
	};

	function setupViewer(ev) {
		if (viewer) {
			viewer.destroy();
		}
		viewer = new Viewer(document.getElementById('allPics'), {
			inline: false,
			navbar: 0,
			toolbar: 0,
			transition: 0,
		});
		window.$(document).foundation();
	}

	onMount(async () => {
		window.$(document).foundation();
	});


</script>

<Load />

<Navbar />

<main>
	<div class="callout2">
		<h3>whoami</h3>
		<p>
			I'm lza_menace / lalanza808 / LZA / menace AKA Lance. I work in technology and am a California native.
		</p>
		<p>
			USMC radio repairman > IT support > SysAdmin > DevOps Engineer > Cloud Consultant >
			Platform Engineer > Site Reliability Engineer > Systems Architect > Sales Engineer > ?
		</p>
		<p>
			I've been moonlighting as a software developer in the crypto space since 2017,
			where I was mostly working on <a href="https://getmonero.org" target="_blank">Monero (XMR)</a>
			and later <a href="https://wownero.org" target="_blank">Wownero (WOW)</a> related tools and services,
			some of which are still running in production.
			I enjoyed the concept of digital money where participants were anonymous,
			but found it difficult to innovate without being a cryptographer or extremely advanced programmer making new protocols.
			All I could make was centralized web services.
		</p>
		<p>
			In the summer of 2021 I began working with my then IRC friends, and now IRL friends,
			<a href="https://cartysewill.com" target="_blank">@cartyisme</a> and <a href="https://jwinterm.com" target="_blank">@jwinterm</a>
			on crypto-art/NFT related projects. Since then I've been devoting more of my time to Solidity smart
			contract and web services development for our joint LLC and supporting the NFT & web3 ecosystem which I find to be pretty neat
			despite the fact that the scene has become propped up by unscrupulous
			<a href="https://meaningness.com/geeks-mops-sociopaths" target="_blank">sociopaths and mops</a>.
			I'm just a geek who is <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover="false" tabindex=0 title="Never going to make it.">NGMI</span>.
		</p>
		<p>
			I am available for contract work if you are looking for some coding done. Contact me at any of my socials provided below.
		</p>
		<p>
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="#" class="button success" data-open="tipsModal">Send a Tip</a>
		</p>
	</div>
	<div class="callout2">
		<h3>links</h3>
		<ul class="accordion" data-accordion>
			<li class="accordion-item" data-accordion-item>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="accordion-title">Contact Me</a>
				<div class="accordion-content" data-tab-content >
				<p>
					Email is the best way to get a hold of me.
				</p>
				<div class="button-group btn-links">
					<span class="center">
						<a href="mailto:lza_menace@protonmail.com" target="_blank" class="button">lza_menace@protonmail.com</a>
						<a href="https://twitter.com/lza_menace" target="_blank" class="button">@lza_menace</a>
						<a href="https://discord.gg/bemym26Rak" target="_blank" class="button">@lza.art101.eth</a>
					</span>
				</div>
				</div>
			</li>
			<li class="accordion-item" data-accordion-item>
			  <!-- svelte-ignore a11y-invalid-attribute -->
			  <a href="#" class="accordion-title">Art101</a>
			  <div class="accordion-content" data-tab-content >
				<p>
					Art101 is a collab project with @cartyisme and @jwinterm.
					We make free crypto-art distributed via Ethereum smart contracts, off-chain storage (Amazon S3), and IPFS.
					We stand in stark contrast to the vultures and scammers in the space with high quality art, minting experiences, and open source tools.
				</p>
				<div class="button-group btn-links">
					<span class="center">
						<a href="https://art101.io" target="_blank" class="button">Main Site</a>
						<a href="https://gallery.art101.io" target="_blank" class="button">Artwork Gallery & Marketplace</a>
					</span>
				</div>
			  </div>
			</li>
			<li class="accordion-item" data-accordion-item>
			  <!-- svelte-ignore a11y-invalid-attribute -->
			  <a href="#" class="accordion-title">Monero (XMR)</a>
			  <div class="accordion-content" data-tab-content>
				<p>
					I was initially building services on top of Monero's network for a few years but got bored.
					Monero is a very strong, useful currency, but I found it difficult to build on top of.
					I'm not a strong C/C++ programmer so I couldn't contribute meaningfully to the codebase, I couldn't build side-chains and cryptographic protocols/extensions, etc...
					Just simple web sites that used Monero in some way, but still a centralized system with it's own database.
				</p>
				<div class="button-group btn-links">
					<span class="center">
						<a href="https://monero.fail" target="_blank" class="button">monero.fail</a>
						<a href="https://github.com/lalanza808/docker-monero-node" target="_blank" class="button">Docker Monero Node</a>
						<a href="https://github.com/lalanza808/xmr-node-cannon-do" target="_blank" class="button">XMR Node Cannon</a>
						<a href="https://github.com/monero-ecosystem/monero-python" target="_blank" class="button">Monero Python (contributor)</a>
						<a href="https://github.com/lalanza808/monero-block-explorer" target="_blank" class="button">Block Explorer (dead)</a>
						<a href="https://github.com/lalanza808/xmrauctions" target="_blank" class="button">XMR Auctions (dead)</a>
						<a href="https://github.com/lalanza808/moneropunks.org" target="_blank" class="button">moneropunks.org (dead)</a>
					</span>
				</div>
			  </div>
			</li>
			<li class="accordion-item" data-accordion-item>
			  <!-- svelte-ignore a11y-invalid-attribute -->
			  <a href="#" class="accordion-title">Wownero (WOW)</a>
			  <div class="accordion-content" data-tab-content>
				<p>
					I spent a couple years messing around with Wownero because Monero became too serious and intense for me.
					The focus in Monero circles was heavily based around cypherpunk ethos, escaping corporate surveillance, fighting the state apparatus, etc.
					It became too heavy for me, so when I discovered <a href="https://wownero.org" target="_blank">Wownero</a> I was eager to port over my tools and services there.
					The scene was light-hearted, fun, playful, and not really caring about much besides having a good time.
					The project itself was a joke that came to life with a community of like-minded people.
					We spent most of our time making jokes on IRC, shitposting on Twitter/Reddit, laughing at memes, listening to music together, and getting stoned.
					It was good fun.
				</p>
				<div class="button-group btn-links">
					<span class="center">
						<a href="https://suchwow.xyz" target="_blank" class="button">SuchWow Memes</a>
						<a href="https://wownero.club" target="_blank" class="button">Wownero Block Explorer</a>
						<a href="https://git.wownero.com/lza_menace/docker-wownero" target="_blank" class="button">Docker Wownero Node</a>
						<a href="https://git.wownero.com/lza_menace/neroswap" target="_blank" class="button">NeroSwap XMR/WOW Swap Service (dead)</a>
						<a href="https://git.wownero.com/lza_menace/wowstash" target="_blank" class="button">Wowstash Web Wallet (dead)</a>
						<a href="https://git.wownero.com/lza_menace/tg-bot" target="_blank" class="button">Telegram Bot (dead)</a>
						<a href="https://git.wownero.com/lza_menace/totrader" target="_blank" class="button">TradeOgre Market Maker Bot (dead)</a>
						<a href="https://git.wownero.com/lza_menace/wownero-ci" target="_blank" class="button">Wownero CI/CD (dead)</a>
					</span>
				</div>
			  </div>
			</li>
			<li class="accordion-item" data-accordion-item>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="accordion-title">Miscellaneous</a>
				<div class="accordion-content" data-tab-content>
				  <p>
					  Over the years in my professional career I've done a lot of tying it into personal projects;
					  much of it pertained to DevOps and cloud related topics. AWS, Terraform, BASH & Python scripting, some Rust web services, Ansible/Chef config mgmt stuff, etc.
					  I have always done open source projects in my personal projects, much of that can be found in my repos/accounts listed below.
				  </p>
				  <div class="button-group btn-links">
					  <span class="center">
						  <a href="https://github.com/lalanza808" target="_blank" class="button">Personal Github</a>
						  <a href="https://git.wownero.com/lza_menace" target="_blank" class="button">Wownero Gitea</a>
						  <a href="https://github.com/art101nft" target="_blank" class="button">Art101 Github</a>
					  </span>
				  </div>
				</div>
			  </li>
		</ul>
	</div>
	<div class="callout2">
		<h3>pics</h3>
		<p>Keep scrolling down to view more pics.</p>
	</div>
	<div id="allPics">
		{#each picsSliced as pic, i}
			<span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover="false" tabindex=0 title="{pic[1]}">
				<img on:load|once={setupViewer} in:fade="{{duration: 1200, delay: 200 + ((i % incrementBy) * 300)}}" width="300px" src="/img/feed/{pic[0]}" alt="{pic[1]}" />
			</span>
		{/each}
	</div>
	{#if endSlice >= allPics.length}
		<p class="callout2">That's all! Thanks for viewing. :)</p>
	{/if}
</main>

{#if progressVisible}
	<progress in:fade="{{duration: 200}}" out:fade="{{duration: 200}}" class="clearfix" value={$progress}></progress>
{/if}

<div class="reveal" id="tipsModal" data-reveal>
    <p class="lead">I work primarily for tips. If you appreciate my services or work, please send tips.</p>
	<h5>XMR</h5>
	<p>49awrmn61ExDUZrV5wJxMM54fxVzHABUYUBNBskLJbxzVwk1KqfrFvdcPNK6RKY2qyfGbcpXP3mbofmnMmFKiFHSCB6jLFA</p>
	<h5>WOW</h5>
	<p>Wo59kvcHiDd48sstysDqGgBAN1fECLKALKw2bPUJhS4UjX9wj2SK4e4GH6HvrBmot6cBrWNE1T65UR6a5SLbzh882c1SXEhiK</p>
	<h5>ETH</h5>
	<p>0x653D2d1D10c79017b2eA5F5a6F02D9Ab6e725395</p>
    <button class="close-button" data-close aria-label="Close reveal" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
</div>

<style>
	main {
		margin: 0 auto;
		max-width: 1200px;
	}
	.callout2 {
        margin: 0 auto;
        text-align: center;
		padding: 2em;
    }
	.callout2 p {
		font-weight: 300;
	}
	.center {
		margin: 0 auto;
		width: 100%;
	}
	.btn-links a:visited {
		color: white;
	}
	#tipsModal p {
		overflow-wrap: anywhere;
		user-select: all;
	}
	.button-group .button {
		margin: 5px;
	}
	#allPics img {
		padding: 1em;
		cursor: zoom-in;
	}
	progress {
		position: fixed;
		width: 100%;
		bottom: 0;
		height: 20px;
	}
</style>
