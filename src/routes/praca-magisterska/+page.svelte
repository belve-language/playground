<script lang="ts">
	import type {Snippet} from "svelte";
	import AutomaticPages from "../../lib/core/automatic-pages/AutomaticPages.svelte";
	import MainPageContent from "../../lib/core/main-page-content/MainPageContent.svelte";
	import {ruleById} from "../../lib/instances/rule-by-id/ruleById.ts";
	type Getter<Prop> = () => Prop;
	function createGetter<Prop>(prop: Prop): Getter<Prop> {
		return () => {
			return prop;
		};
	}
	function attachPropsToSnippet<Props extends unknown[]>(
		snippet: Snippet<Props>,
		...props: Props
	): Snippet<[]> {
		return ((node: Text): ReturnType<Snippet<[]>> => {
			return (
				snippet as unknown as (
					node: Text,
					...props: {
						readonly [IndexToUse in keyof Props]: Getter<Props[IndexToUse]>;
					}
				) => ReturnType<Snippet<[]>>
			)(
				node,
				...(props.map((prop) => {
					return createGetter(prop);
				}) as {
					readonly [IndexToUse in keyof Props]: Getter<Props[IndexToUse]>;
				}),
			);
		}) as Snippet<[]>;
	}
</script>

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
	{@render pre(attachPropsToSnippet(code, text))}
{/snippet}
{#snippet preText(text: string)}
	{@render pre(attachPropsToSnippet(text_, text))}
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
		attachPropsToSnippet(h2, "Motywacja"),
		attachPropsToSnippet(h2, "Opracowanie"),
		attachPropsToSnippet(h3, "Paradygmat"),
		attachPropsToSnippet(
			p,
			"Na spektrum deklaratywności i imperatywności Belve należy umieścić przy deklaratywnym końcu. Konkretniej mówiąc, jest to język logiczny.",
		),
		attachPropsToSnippet(h3, "Składnia"),
		attachPropsToSnippet(
			p,
			"Składnia została opracowana tak, żeby nie pozwolić na wiele różnych zapisów tego samego kodu.",
		),
		attachPropsToSnippet(
			p,
			"Przykładowo, w Prologu wszystkie poniższe zapisy oznaczają to samo:",
		),
		attachPropsToSnippet(li, [
			attachPropsToSnippet(
				preCode,
				`rodzic(ania, bartek).
rodzic(ania, celina).
`,
			),
		]),
		attachPropsToSnippet(li, [
			attachPropsToSnippet(
				preCode,
				`rodzic(ania, bartek) :- true.
rodzic(ania, celina) :- true.
`,
			),
		]),
		attachPropsToSnippet(li, [
			attachPropsToSnippet(
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
		attachPropsToSnippet(h4, "Gramatyka"),
		...Object.values(ruleById).map((rule) => {
			return attachPropsToSnippet(
				pre,
				attachPropsToSnippet(text_, rule.stringify(ruleById)),
			);
		}),
		attachPropsToSnippet(h3, "Semantyka"),
		attachPropsToSnippet(h3, "Model obliczeniowy"),
		attachPropsToSnippet(h2, "Implementacja"),
		attachPropsToSnippet(h2, "Możliwe rozszerzenia"),
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
