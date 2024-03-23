<script lang="ts">
import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
import Icon from '$lib/images/degen-mafia-square-icon.png'
</script>

<section class="py-11">
<h2 class="h2 mx-auto flex justify-center items-center">FAQ</h2>
<div class="mt-10 pt-10 container h-full mx-auto flex justify-center items-center">
    <Accordion>
	<AccordionItem open>
		<svelte:fragment slot="lead"><img class="max-h-8" src={Icon} alt="Icon"></svelte:fragment>
		<svelte:fragment slot="summary"><h3 class="">What is Degen Mafia?</h3></svelte:fragment>
		<svelte:fragment slot="content">We are a Web3 gaming guild that fosters a vibrant community of digital adventurers passionate about decentralized experiences. Our mission is to cultivate an environment where innovation thrives, friendships flourish, and fortunes await.</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="lead"><img class="max-h-8" src={Icon} alt="Icon"></svelte:fragment>
		<svelte:fragment slot="summary">What smart contracts does Degen Mafia use?</svelte:fragment>
		<svelte:fragment slot="content">We are currently developing smart contracts for a raffle system, a group collaboration tool, and a black market. These smart contracts will enable seamless and secure transactions within our community.
		</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="lead"><img class="max-h-8" src={Icon} alt="Icon"></svelte:fragment>
		<svelte:fragment slot="summary">What platforms does Degen Mafia use for membership?</svelte:fragment>
		<svelte:fragment slot="content">We utilize Discord and our website (dapp soon) for community engagement and membership. Our Discord server serves as a hub for communication and collaboration among members, while our website provides essential information and resources.</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="lead"><img class="max-h-8" src={Icon} alt="Icon"></svelte:fragment>
		<svelte:fragment slot="summary">How does Degen Mafia engage its community?</svelte:fragment>
		<svelte:fragment slot="content">We engage our community through various channels, including social media, Discord, weekly poker games, and giveaway raffles. We encourage active participation, feedback, and collaboration among members to foster a strong sense of community.</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="lead"><img class="max-h-8" src={Icon} alt="Icon"></svelte:fragment>
		<svelte:fragment slot="summary">What are the community guidelines for Degen Mafia? </svelte:fragment>
		<svelte:fragment slot="content">Degen Mafia has established community guidelines to ensure a safe and enjoyable environment for all members. These guidelines outline expectations for behavior, communication, and participation within our community.</svelte:fragment>
	</AccordionItem>
	<!-- ... -->
</Accordion>
</div>
</section>
