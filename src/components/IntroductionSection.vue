<template>
	<section id="introduction">
		<h1>Hi! I'm Leonard Decena</h1>
		<p id="introduction-paragraph">
			As a passionate web developer, I bring ideas to life through code.
			My journey began with a curiosity for how things work and evolved
			into a love for creating intuitive and dynamic web applications.
			From the intricacies of mechanical engineering to the fluidity of
			front-end frameworks, my path has been anything but conventional.
		</p>
		<p>
			You can check out my
			<a href="https://drive.google.com/file/d/1WHS92LIo8RFCKTiIB5bFEKpf8FRC23e0/view?usp=drive_link"
				target="_blank" title="View resume">
				<strong>resume</strong>
			</a>
			for more details about me.
		</p>
		<div id="socials-container">
			<p>You can also check out my socials:</p>
			<ul id="socials">
				<li title="Go to GitHub">
					<a href="https://github.com/hshnj0216/" target="_blank">
						<i class="fa-brands fa-square-github"></i>
					</a>
				</li>
				<li title="Go to LinkedIn">
					<a href="https://www.linkedin.com/in/leonard-decena-64b9a2241/" target="_blank">
						<i class="fa-brands fa-linkedin"></i>
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>
<script>
export default {};
</script>
<style scoped>
@keyframes slideIn {
	0% {
		opacity: 0;
		transform: translateX(-100%);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

#introduction {
	box-sizing: border-box;
	height: 100dvh;
	max-height: 100dvh;
	min-height: 660px;
}

#introduction-paragraph{
	text-align: justify;
}

h1,
p {
	text-align: left;
}

h1 {
	font-size: 2rem;
	animation: slideIn 0.3s backwards ease-out;
}

p {
	animation: slideIn 0.3s backwards ease-out;
	animation-delay: 0.3s;
	font-size: 1rem;
}
strong {
	text-decoration: underline;
}

#socials-container {
	margin-top: 4rem;
	opacity: 0;
	animation: fadeIn 1s ease forwards;
	animation-delay: 1s;
}

#socials-container>p {
	font-size: 0.8rem;
	margin-bottom: 1rem;
}

#socials {
	margin: 0;
	list-style-type: none;
	display: flex;
	gap: 1rem;
	padding: 0;
}

#socials li {
	transition: transform 0.2s ease-in;
}

#socials li:hover {
	transform: scale(1.5);
}

.fa-brands {
	font-size: 3rem;
}

@media only screen and (min-width: 1100px) {
	#introduction {
		box-sizing: border-box;
		height: 100dvh;
		max-height: 100vh;
		scroll-snap-align: start;
		padding: 5rem;
	}

	h1,
	p {
		text-align: left;
	}

	h1 {
		font-size: 4rem;
		animation: slideIn 0.3s backwards ease-out;
	}

	p {
		font-size: 1.5rem;
		animation: slideIn 0.3s backwards ease-out;
		animation-delay: 0.3s;
		text-align: justify;
	}

	strong {
		text-decoration: underline;
	}

	#socials-container {
		margin-top: 4rem;
		opacity: 0;
		animation: fadeIn 1s ease forwards;
		animation-delay: 1s;
	}

	#socials-container>p {
		font-size: 1.3rem;
		margin-bottom: 1rem;
	}

	#socials {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
		padding: 0;
	}

	#socials li {
		transition: transform 0.2s ease-in;
	}

	#socials li:hover {
		transform: scale(1.5);
	}

	.fa-brands {
		font-size: 3rem;
	}
}
</style>
