<script lang="ts">
	const {title: title}: {readonly title: string} = $props();
	// TODO: Match the template exactly
</script>

<section>
	<div class="university-and-faculty">
		<div>Uniwersytet Gdański</div>
		<div>Wydział Matematyki, Fizyki i Informatyki</div>
	</div>
	<div class="author-and-id">
		<div>Rafał Majewski</div>
		<div>numer albumu: 274970</div>
	</div>
	<div class="field-of-study">
		<div>Kierunek studiów: Informatyka</div>
	</div>
	<div class="title">
		<h1>{title}</h1>
	</div>
	<div class="description">
		<div>Praca magisterska</div>
		<div>wykonana</div>
		<div>pod kierunkiem</div>
		<div>Prof. Dr. rer. nat. Christopha Schwarzwellera</div>
	</div>
	<div class="place-and-year">
		<div>Gdańsk 2025</div>
	</div>
</section>

<style lang="scss">
	section {
		height: 100%;
		display: grid;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-columns: 1fr;
		& > div {
			align-self: center;
		}
	}
	.university-and-faculty {
		text-align: center;
		font-weight: bold;
		font-size: 16pt;
	}
	.author-and-id {
		text-align: center;
		font-weight: bold;
		font-size: 14pt;
	}
	.field-of-study {
		text-align: left;
		font-size: 12pt;
	}
	.title {
		text-align: center;
		font-weight: bold;
		font-size: 16pt;
	}
	.title h1 {
		font-size: inherit;
	}
	.description {
		text-align: right;
		font-size: 12pt;
	}
	.place-and-year {
		text-align: center;
		font-weight: bold;
		font-size: 14pt;
	}
	.university-and-faculty,
	.title {
		text-transform: uppercase;
	}
</style>
