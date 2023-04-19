type Flore = 'b1' | '1f' | '2f' | '3f';

type Flores = {
	flore: string;
	imgpass: string;
}

type Map2 = {
	label: string;
	value: string;
	id: string;
	flores: Flores[];
}

declare module '../_data/map2.json' {
	const data: Map2[]
	export = data;
}
