import React from 'react';

import FieldItem from './FieldItem'

type Blueprint = Array<string | null>;

interface State {
    field: FieldItem[];
}

interface Props {
    blueprint: Blueprint;
    size: number;
}

export default class Field extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

        const { blueprint, size } = props;

        if (props.blueprint) {
            blueprint.forEach((item, index) => this.state.field.push(new FieldItem(item, index, size));
        }
    }
    state: State = {
        field: [],
    };
}
