<script lang="ts">
	import type {Snippet} from "svelte";
	import AutomaticPages from "../../lib/core/automatic-pages/AutomaticPages.svelte";
	import MainPageContent from "../../lib/core/main-page-content/MainPageContent.svelte";
	import {ruleById} from "../../lib/instances/rule-by-id/ruleById.ts";
	import {bindSnippetProps} from "../../lib/binding-snippet-props/bindSnippetProps.ts";
</script>

<svelte:head>
	<title>Opracowanie i implementacja języka programowania Belve</title>
</svelte:head>

{#snippet titlePageContent()}
	<MainPageContent />
{/snippet}
{#snippet h1(text: string)}
	<h1>{text}</h1>
{/snippet}
{#snippet h2(text: string)}
	<h2>{text}</h2>
{/snippet}
{#snippet h3(text: string)}
	<h3>{text}</h3>
{/snippet}
{#snippet h4(text: string)}
	<h4>{text}</h4>
{/snippet}
{#snippet h5(text: string)}
	<h5>{text}</h5>
{/snippet}
{#snippet h6(text: string)}
	<h6>{text}</h6>
{/snippet}
{#snippet pre(child: Snippet<[]>)}
	<pre>{@render child()}</pre>
	<style lang="scss">
		pre {
			margin-block: 0;
			background-color: hsl(0, 0%, 95%);
		}
	</style>
{/snippet}
{#snippet text_(text: string)}
	{text}
{/snippet}
{#snippet code(text: string)}
	<code>{text}</code>
{/snippet}
{#snippet preCode(text: string)}
	{@render pre(bindSnippetProps(code, text))}
{/snippet}
{#snippet preText(text: string)}
	{@render pre(bindSnippetProps(text_, text))}
{/snippet}
{#snippet p(text: string)}
	<p>{text}</p>
{/snippet}
{#snippet li(children: readonly Snippet<[]>[])}
	<li>
		<span class="bullet">•</span>
		<span class="content">
			{#each children as child}
				{@render child()}
			{/each}
		</span>
	</li>
	<style lang="scss">
		li {
			display: flex;
		}
		.bullet {
			width: 1em;
		}
	</style>
{/snippet}

<AutomaticPages
	parts={[
		titlePageContent,
		bindSnippetProps(h2, "Motywacja"),
		bindSnippetProps(p, ""),
		bindSnippetProps(h2, "Opracowanie"),
		bindSnippetProps(h3, "Paradygmat"),
		bindSnippetProps(
			p,
			"Na spektrum deklaratywności i imperatywności Belve należy umieścić przy deklaratywnym końcu. Konkretniej mówiąc, jest to język logiczny.",
		),
		bindSnippetProps(h3, "Składnia"),
		bindSnippetProps(
			p,
			"Składnia została opracowana tak, żeby nie pozwolić na wiele różnych zapisów tego samego kodu.",
		),
		bindSnippetProps(
			p,
			"Przykładowo, w Prologu wszystkie poniższe zapisy oznaczają to samo:",
		),
		bindSnippetProps(li, [
			bindSnippetProps(
				preCode,
				`rodzic(ania, bartek).
rodzic(ania, celina).
`,
			),
		]),
		bindSnippetProps(li, [
			bindSnippetProps(
				preCode,
				`rodzic(ania, bartek) :- true.
rodzic(ania, celina) :- true.
`,
			),
		]),
		bindSnippetProps(li, [
			bindSnippetProps(
				preCode,
				`rodzic(X, Y) :-
	X = ania,
	Y = bartek.

rodzic(X, Y) :-
	X = ania,
	Y = celina.
`,
			),
		]),
		bindSnippetProps(h4, "Gramatyka"),
		...Object.values(ruleById).map((rule) => {
			return bindSnippetProps(
				pre,
				bindSnippetProps(text_, rule.stringify(ruleById)),
			);
		}),
		bindSnippetProps(h3, "Semantyka"),
		bindSnippetProps(h3, "Model obliczeniowy"),
		bindSnippetProps(h2, "Implementacja"),
		bindSnippetProps(h2, "Możliwe rozszerzenia"),
	]}
/>

<style lang="scss">
	:global {
		html {
			background-color: black;
			min-height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		body {
			margin: 0;
		}
	}
</style>
