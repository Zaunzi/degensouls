<script lang="ts">
	import Logo from '$lib/images/degen-logo.png'
</script>

<footer class="py-16 sm:py-20 md:py-24 px-4 md:px-8">
    <div
        class="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-base"
    >
        <div class="flex flex-col gap-4 md:col-span-2">
            <img alt="degen logo" src={Logo} />
            <p>©2024 Degen Maafia LTD. All rights reserved.</p>
        </div>
        <div class="flex flex-col gap-4">
            <p class=" font-bold poppins text-base sm:text-lg">Support</p>
            <a
                href="email"
                target="_blank"
                class="cursor-pointer hover:text-indigo-400 duration-200"
            >
                Contact Us</a
            >
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-bold poppins text-base sm:text-lg">Partners</p>
            <a
                href=""
                target="_blank"
                class="cursor-pointer hover:text-indigo-400 duration-200"
            >
                Aavegotchi</a
            >
            <a
                href=""
                target="_blank"
                class="cursor-pointer hover:text-indigo-400 duration-200"
            >
                Orium</a
            >
            <a
                href=""
                target="_blank"
                class="cursor-pointer hover:text-indigo-400 duration-200"
            >
                Rekt Dogs</a
            >
            
        </div>
        <div class="flex flex-col gap-4">
            <p class="font-bold poppins text-base sm:text-lg">Join Us</p>
            <a
                href=""
                target="_blank"
                class="cursor-pointer hover:text-indigo-400 duration-200"
            >
                <i class="fa-brands fa-facebook pr-2" />
                Discord</a
            >
            <a
                href=""
                target="_blank"
                class="cursor-pointer hover:text-indigo-400 duration-200"
            >
                <i class="fa-brands fa-twitter pr-2" />
                Twitter</a
            >
        </div>
    </div>
</footer>
