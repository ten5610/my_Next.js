type OperatorRole = 'attack' | 'defense';

type Floor = 'b1' | '1f' | '2f' | '3f';

type Operator = {
	name: string;
	imgPath: string;
	role: OperatorRole;
	id: string;
}

type IconPosition = {
	left: number;
	top: number;
	operatorId: string;
	imgPath: string;
	name: string;
}

type Floors = {
	floor: Floor;
	imgPass: string;
}

type TacticalMap = {
	label: string;
	value: string;
	id: string;
	floors: Floors[];
}

type CurrentDisplay = {
	id: string
	floor: Floor
}
